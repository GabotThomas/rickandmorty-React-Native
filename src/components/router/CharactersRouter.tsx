import CharacterScreen from "../screen/CharacterScreen";
import CharacterListScreen from "../screen/CharacterListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_ROUTER_OPTIONS } from "../../constants/router";

const CharactersRouter = () => {
    const Characters = createNativeStackNavigator();

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
                    title: route.params.name
                })}
            />
        </Characters.Navigator>
    )
}

export default CharactersRouter;