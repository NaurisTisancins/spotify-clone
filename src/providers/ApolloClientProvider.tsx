import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://vadoligure.stepzen.net/spotify/api/__graphql',
  headers: {
    Authorization:
      'apikey vadoligure::stepzen.net+1000::fd876aba37d6e08d915573002ffbd34eadae93de0713b7b120251a81644e109a',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
