import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_ROUTER_OPTIONS } from "../../constants/router";
import EpisodeListScreen from "../screen/EpisodeListScreen";
import EpisodeScreen from "../screen/EpisodeScreen";

const EpisodesRouter = () => {
    const Episodes = createNativeStackNavigator();

    return (
        <Episodes.Navigator
            screenOptions={STACK_ROUTER_OPTIONS}
        >
            <Episodes.Screen
                name="Home"
                component={EpisodeListScreen}
                options={{
                    title: 'Episodes'
                }}
            />
            <Episodes.Screen
                name="Character"
                component={EpisodeScreen}
                options={({ route }: any) => ({
                    title: route.params.name
                })}
            />
        </Episodes.Navigator>
    )
}

export default EpisodesRouter;