
import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Image, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

    const titleImg = require('../../assets/imgs/Title.png')
    const portal = require('../../assets/imgs/RickAndMortyPortal.png')
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <Image source={titleImg} style={{width: '100%', height: 150, padding: 20}}></Image>
                <View style={{height: '50%', padding: 20}}>
                    <Image source={portal} style={{flex: 1, justifyContent:'center' , width: '100%'}}></Image>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#262626',
        backgroundColor: '#FFF',
    },
    text: {
        color: 'green'
    }
});

export default HomeScreen;