
import react from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import ScreenContainer from '../ScreenContainer';

const HomeScreen = ({ navigation }: any) => {
    const titleImg = require('../../assets/imgs/Title.png')
    const portal = require('../../assets/imgs/RickAndMortyPortal.png')

    const imageSizeWidth = (Dimensions.get('screen').width - 40)

    return (
        <ScreenContainer style={styles.container}>
            <View style={{ height: '15%', justifyContent: 'center' }}>
                <Image source={titleImg} style={{ width: imageSizeWidth, height: '100%' }}></Image>
            </View>
            <View style={{ height: '60%', width: '90%', justifyContent: 'center' }}>
                <Image source={portal} style={{ height: imageSizeWidth, width: imageSizeWidth }}></Image>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
                <Text style={styles.text}>Click to go</Text>
            </TouchableOpacity>
        </ScreenContainer>
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
        fontSize: 24,
        fontFamily: 'get_schwifty',

    },
    button: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: '#FFF',
        shadowColor: '#8FC748',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 25,
        shadowOpacity: 1,
    }
});

export default HomeScreen;