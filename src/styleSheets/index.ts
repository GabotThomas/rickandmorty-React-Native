import { StyleSheet } from 'react-native';
import { COLUMN_2 } from '../constants/column';

export const textTitle = {
	color: '#00B5CC',
	fontSize: 24,
	fontFamily: 'get_schwifty',
};

export const textSchwifty = {
	color: '#00B5CC',
	fontSize: 18,
	fontFamily: 'get_schwifty',
};

export const text: any = {
	color: '#000',
	fontWeight: 'bold',
};

export const rowBetween: any = {
	flexDirection: 'row',
	justifyContent: 'space-between',
};

export const listStyle: any = {
	flex: 1,
	backgroundColor: '#262626',
	position: 'relative',
};

export const cardStyle: any = {
	flex: 1,
	margin: 10,
	borderColor: '#FAFAFA',
	backgroundColor: '#FAFAFA',
	borderRadius: 11,
	width: COLUMN_2,
	height: 280,
};

export const imageCardStyle: any = {
	width: '100%',
	height: '75%',
};

export const styleScreen = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#262626',
		padding: 20,
	},
	textTitle: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 32,
		alignItems: 'flex-start',
	},
	text: {
		color: '#FFF',
		alignItems: 'center',
	},
	square: {
		width: 15,
		height: 15,
		borderRadius: 50,
		marginRight: 5,
	},
	Alive: {
		backgroundColor: 'green',
	},
	Dead: {
		backgroundColor: 'red',
	},
	unknown: {
		backgroundColor: 'gray',
	},
});
