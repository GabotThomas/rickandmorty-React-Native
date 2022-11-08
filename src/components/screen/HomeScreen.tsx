
import react from 'react';
import { useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';

// Fonts import
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const HomeScreen = ({ navigation }: any) => {
    /* ---- ---- Fonts ---- ---- */
    /**/let [fontsLoaded] = useFonts({
    /**/   'get_schwifty': require('../../assets/fonts/get_schwifty.ttf'),
    /**/});
    /**/
    /**/useEffect(() => {
    /**/    async function prepare() {
    /**/      await SplashScreen.preventAutoHideAsync();
    /**/    }
    /**/    prepare();
    /**/  }, []);
    /**/
    /**/  const onLayoutRootView = useCallback(async () => {
    /**/    if (fontsLoaded) {
    /**/      await SplashScreen.hideAsync();
    /**/    }
    /**/  }, [fontsLoaded]);

    const titleImg = require('../../assets/imgs/Title.png')
    const portal = require('../../assets/imgs/RickAndMortyPortal.png')
    const text = require('../../assets/imgs/TextHome.png')

    const imageSizeWidth = (Dimensions.get('screen').width - 40)

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={{height: '15%', justifyContent: 'center'}}>
                <Image source={titleImg} style={{width: imageSizeWidth, height: '100%'}}></Image>
            </View>
            <View style={{height: '50%', width: '90%', justifyContent: 'center'}}>
                <Image source={portal} style={{height: '90%', width: imageSizeWidth}}></Image>
            </View>
            <View style={{height: '20%', justifyContent: 'center'}}>
                <Image source={text} style={{width: imageSizeWidth, height: '75%'}}></Image>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
    },
    text: {
        color: '#00B5CC',
        fontSize: 32,
        borderWidth: 1,
        fontFamily: 'get_schwifty'
    }
});

export default HomeScreen;