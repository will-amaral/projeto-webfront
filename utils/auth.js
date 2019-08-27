import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'http://localhost:4000/', fetch: fetch });
const cache = new InMemoryCache();

export const api = new ApolloClient({
  cache, link
});