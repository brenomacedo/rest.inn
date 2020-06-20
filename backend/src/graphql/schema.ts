import { gql } from 'apollo-server'

export default gql`

    type Inn {
        id: ID!
        name: String!
        description: String!
        lat: Float!
        lng: Float!
        image: String!
    }

    type Query {
        getInns: [Inn!]!
    }

    type Mutation {
        createInn(name: String!, description: String!, lat: Float!, lng: Float!, image: String!): Inn!
    }

`