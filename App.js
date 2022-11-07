import { ScrollView, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './src/components/router/Router';

const GRAPHQL_PORT = 8000;

// Initialize Apollo Client
const client = new ApolloClient({0
	uri: `http://localhost:${GRAPHQL_PORT}/graphql`,
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
