import react, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native";
// Fonts import
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const ScreenContainer = ({ style, children }) => {
    let [fontsLoaded] = useFonts({
        'get_schwifty': require('../assets/fonts/get_schwifty.ttf'),

    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();

        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();

        }

    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView style={style} onLayout={onLayoutRootView}>
            {children}
        </SafeAreaView>
    );
}

export default ScreenContainer;