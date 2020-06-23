import { gql } from 'apollo-server'

export default gql`

    type Inn {
        id: ID!
        name: String!
        description: String!
        lat: Float!
        lng: Float!
        state: String!
        city: String!
    }

    type Query {
        getInns(state: String!, city: String!): [Inn!]!
    }

    type Mutation {
        createInn(name: String!, description: String!, lat: Float!, lng: Float!, state: String!, city: String!): Inn!
    }

`