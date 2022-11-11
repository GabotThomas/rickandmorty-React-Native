import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import EpisodeScreen from '../screen/EpisodeScreen';
import CharactersScreen from '../screen/CharactersScreen';
import CharacterScreen from '../screen/CharacterScreen';
// Fonts import
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Router = () => {
	const Stack = createNativeStackNavigator();

	let [fontsLoaded] = useFonts({
		'get_schwifty': require('../../assets/fonts/get_schwifty.ttf'),

	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();

		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Episodes" component={EpisodeScreen} />
				<Stack.Screen name="Characters" component={CharactersScreen} />
				<Stack.Screen name="Character" component={CharacterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
