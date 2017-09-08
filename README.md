# GraphQL Mock Server

A server used for serving a GraphQL and GraphiQL endpoint with mock data. Concept similar to [ReqRes](https:/reqres.in) allowing users to point their application to a placholder endpoint providing them with mock data on whatever they request.

## Development

__Requirements__

Only tested on Node ^7.9.0
PostgreSQL

__Setup__
Super simple setup for development.
1. `cd graphql-mock-server && yarn install`
2. `cp .env.example .env`
3. Modify `.env` contents with environment configuration (database, port, etc)
4. Migrate database (TODO: add command once setup)
5. Seed database (TODO: add command once setup)

## Contributing

See [https://github.com/bkd705/graphql-mock-server/CONTRIBUTING.md](CONTRIBUTING.md)
