import { ScrollView, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './src/components/router/Router';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: `https://rickandmortyapi.com/graphql`,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	);
}

export default App;
