import { ApolloServer, gql } from 'apollo-server'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import { createConnection } from 'typeorm'
import 'reflect-metadata'
createConnection().then(res => {}).catch(err => {})

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen(3333)