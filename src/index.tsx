import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
}`;

const client = new ApolloClient({
  uri: 'https://academtest.ilink.dev/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <Global />
    <App />
  </ApolloProvider>,
);
