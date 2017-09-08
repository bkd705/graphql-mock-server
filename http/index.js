const koa = require('koa')
const koaRouter = require('koa-router')
const koaBody = require('koa-bodyparser')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const graphqlSchema = require('./graphql/User')

const app = new koa()
const router = new koaRouter()

router.post('/graphql', koaBody(), graphqlKoa({ schema: graphqlSchema }))
router.get('/graphql', graphqlKoa({ schema: graphqlSchema }))

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
