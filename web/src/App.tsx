import React from 'react'
import Routes from './routes'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3333'
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes />
      </div>
    </ApolloProvider>
  )
}

export default App