import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './componenets/BookList';
import AddBook from './componenets/AddBook';

// apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <h1>Shivams Reading List</h1>
          <BookList/>
          <AddBook/>
       </div> 
      </ApolloProvider>
    );
  }
}

export default App;