import CharacterScreen from "../screen/CharacterScreen";
import CharactersScreen from "../screen/CharactersScreen";
import { HeaderCenter, HeaderLeft, HeaderRight } from '../Header';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        headerLeft: HeaderLeft,
    };

    return (
        <Characters.Navigator
            screenOptions={{ ...options, }}
        >
            <Characters.Screen
                name="Home"
                component={CharactersScreen}
                options={{
                    title: 'Personnages'
                }}
            />
            <Characters.Screen
                name="Character"
                component={CharacterScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Characters.Navigator>
    )
}

export default CharactersRouter;