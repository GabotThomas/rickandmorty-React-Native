import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { renameTitle } from '../components/functions.tsx';
import { HeaderCenter, HeaderLeft, HeaderRight } from '../components/Header';
import { textTitle } from '../styleSheets';

export const STACK_ROUTER_OPTIONS: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: '#262626'
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
		backgroundColor: '#262626',
		borderLeftColor: '#00B5CC',
		borderLeftWidth: 2,
	},
	drawerLabelStyle: {
		...textTitle,
	},
};

export const optionStackScreen = ({ route }: any) => ({
	title: renameTitle(route.params.name)
})
