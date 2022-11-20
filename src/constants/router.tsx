import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderCenter, HeaderLeft, HeaderRight } from '../components/Header';
import { textTitle } from '../styleSheets';

export const STACK_ROUTER_OPTIONS: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: '#262626',
		color: '#fff'
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

export const renameTitle = (title) => {
	if (title.length > 15) {
		return title.slice(0, 15) + '...'
	}
	return title;
}

export const optionStackScreen = ({ route }: any) => ({
	title: renameTitle(route.params.name)
})
