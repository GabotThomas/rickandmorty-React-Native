import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_ROUTER_OPTIONS } from "../../constants/router";
import LocationListScreen from "../screen/LocationListScreen"
import LocationScreen from "../screen/LocationScreen";

const LocationsRouter = () => {
    const Episodes = createNativeStackNavigator();

    return (
        <Episodes.Navigator
            screenOptions={STACK_ROUTER_OPTIONS}
        >
            <Episodes.Screen
                name="Home"
                component={LocationListScreen}
                options={{
                    title: 'Episodes'
                }}
            />
            <Episodes.Screen
                name="Episode"
                component={LocationScreen}
                options={({ route }: any) => ({
                    title: route.params.name
                })}
            />
        </Episodes.Navigator>
    )
}

export default LocationsRouter;