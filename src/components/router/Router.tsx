import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import EpisodeScreen from '../screen/EpisodeScreen';
import CharactersScreen from '../screen/CharactersScreen';
import CharacterScreen from '../screen/CharacterScreen';
// Fonts import
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { HeaderCenter, HeaderLeft, HeaderRight } from '../Header';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Router = () => {


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

	const Drawer = createDrawerNavigator();
	const options = {
		headerShown: false
	}

	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{ drawerPosition: 'right' }}
				defaultScreenOptions={{}}
			>
				<Drawer.Screen name="Home" component={HomeScreen} options={options} />
				<Drawer.Screen
					name="Characters"
					component={CharactersRouter}
					options={options}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

const CharactersRouter = () => {
	const Characters = createNativeStackNavigator();

	const options = {
		headerStyle: {
			backgroundColor: 'black',
			color: 'white'
		},
		headerTitle: HeaderCenter,
		headerBackVisible: false,
		headerRight: HeaderRight,
		headerLeft: HeaderLeft
	};

	return (
		<Characters.Navigator>
			<Characters.Screen
				name="Home"
				component={CharactersScreen}
				options={{
					...options,
					title: 'Personnages'
				}}
			/>
			<Characters.Screen
				name="Character"
				component={CharacterScreen}
				options={({ route }) => ({
					...options,
					title: route.params.name
				})}
			/>
		</Characters.Navigator>
	)
}

export default Router;
