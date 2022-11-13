import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderCenter, HeaderLeft, HeaderRight } from '../components/Header';
import { textTitle } from '../styleSheets';

export const STACK_ROUTER_OPTIONS: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: 'black',
		color: 'white',
	},
	headerTitle: HeaderCenter,
	headerBackVisible: false,
	headerRight: HeaderRight,
	headerLeft: HeaderLeft,
};

export const DRAWER_ROUTER_OPTIONS: DrawerNavigationOptions = {
	drawerPosition: 'right',
	headerShown: false,
	drawerActiveBackgroundColor: 'green',
	drawerContentStyle: {
		backgroundColor: '#000',
		borderLeftColor: '#ccc',
		borderLeftWidth: 2,
	},
	drawerLabelStyle: {
		...textTitle,
	},
};
