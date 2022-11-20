import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
// Fonts import
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
	createDrawerNavigator
} from '@react-navigation/drawer';
import { DRAWER_ROUTER_OPTIONS } from '../../constants/router';
import StackRouter from './StackRouter';


const Router = () => {
	const Drawer = createDrawerNavigator();
	let [fontsLoaded] = useFonts({
		'get_schwifty': require('../../assets/fonts/get_schwifty.ttf'),

	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();

		}
		prepare();
	}, []);

	if (!fontsLoaded) return null;

	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={DRAWER_ROUTER_OPTIONS}
				backBehavior={'order'}
			>
				<Drawer.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Accueil' }}
				/>
				<Drawer.Screen
					name="Characters"
					options={{ title: 'Personnages' }}
					component={StackRouter}
				/>
				<Drawer.Screen
					name="Episodes"
					options={{ title: 'Episodes' }}
					component={StackRouter}
				/>
				<Drawer.Screen
					name="Locations"
					options={{ title: 'Locations' }}
					component={StackRouter}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Router;
