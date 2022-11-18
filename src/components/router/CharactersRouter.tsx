import CharacterScreen from "../screen/CharacterScreen";
import CharacterListScreen from "../screen/CharacterListScreen";
import EpisodeScreen from "../screen/EpisodeScreen";
import LocationScreen from "../screen/LocationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_ROUTER_OPTIONS } from "../../constants/router";

const CharactersRouter = () => {
    const Characters = createNativeStackNavigator();

    const renameTitle = (title) => {
        if(title.length > 15) {
            return title.slice(0, 15) + '...'
        }
        return title;
    }

    return (
        <Characters.Navigator
            screenOptions={STACK_ROUTER_OPTIONS}
        >
            <Characters.Screen
                name="Home"
                component={CharacterListScreen}
                options={{
                    title: 'Personnages'
                }}
            />
            <Characters.Screen
                name="Character"
                component={CharacterScreen}
                options={({ route }: any) => ({
                    title: renameTitle(route.params.name)
                })}
            />
            <Characters.Screen
                name="Episode"
                component={EpisodeScreen}
                options={({ route }: any) => ({
                    title: renameTitle(route.params.name)
                })}
            />
            <Characters.Screen
                name="Location"
                component={LocationScreen}
                options={({ route }: any) => ({
                    title: renameTitle(route.params.name)
                })}
            />
        </Characters.Navigator>
    )
}

export default CharactersRouter;