import React from 'react'
import 'react-native-gesture-handler'
import Routes from './routes'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'


const App = () => {

    const client = new ApolloClient({
        uri: 'http://10.0.0.106:3333'
    })

    return (
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    )
}

export default App