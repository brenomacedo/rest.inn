import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import { createConnection } from 'typeorm'
createConnection()

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen(3333)