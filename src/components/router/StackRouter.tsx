import CharacterScreen from "../screen/CharacterScreen";
import CharacterListScreen from "../screen/CharacterListScreen";
import EpisodeScreen from "../screen/EpisodeScreen";
import LocationScreen from "../screen/LocationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { optionStackScreen, STACK_ROUTER_OPTIONS } from "../../constants/router";
import LocationListScreen from "../screen/LocationListScreen";
import EpisodeListScreen from "../screen/EpisodeListScreen";

const StackRouter = ({ route }) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={STACK_ROUTER_OPTIONS}
            initialRouteName={route.name + 'Home'}
        >
            <Stack.Screen
                name="CharactersHome"
                component={CharacterListScreen}
                options={{ title: 'Personnages' }}
            />
            <Stack.Screen
                name="Character"
                component={CharacterScreen}
                options={optionStackScreen}
            />
            <Stack.Screen
                name="EpisodesHome"
                options={{ title: 'Episodes' }}
                component={EpisodeListScreen}
            />
            <Stack.Screen
                name="Episode"
                component={EpisodeScreen}
                options={optionStackScreen}
            />
            <Stack.Screen
                name="LocationsHome"
                options={{ title: 'Locations' }}
                component={LocationListScreen}
            />
            <Stack.Screen
                name="Location"
                component={LocationScreen}
                options={optionStackScreen}
            />
        </Stack.Navigator>
    )
}

export default StackRouter;