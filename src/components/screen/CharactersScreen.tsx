import react, {Component} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import useGetCharacters from '../../hooks/useGetCharacters';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const imageSizeWidth = (Dimensions.get('screen').width / 2)


const CharactersScreen = ({ navigation }: any) => {

    // Navigate to 1 Character //
    const handleCharacterClick = ({character}) => {
        navigation.navigate('Character', character);
      };

    const [characters, loading, error] = useGetCharacters({ page: 1 });

    const isAlive = 'Alive'

    // console.log(characters?.results)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>Prev</Text>
            <Text style={styles.text}>Next</Text>
            <Text style={styles.text}>Characters</Text>
            {characters?.results.length &&
                <FlatList data={characters.results} numColumns={2} renderItem={({ item }) =>
                <TouchableOpacity style={styles.cards} onPress={() => handleCharacterClick(item.id)}>
                    <View style={styles.image}>
                        <Image source= {{uri: item.image}} style={{width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
                    </View>
                    <View style={{flex: 1, padding: 10, justifyContent: 'space-around'}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={[isAlive ? styles.alive : styles.dead]}>{item.status}</Text>
                            <Text style={styles.text}>{'>'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                } />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    text: {
        color: '#000',
        fontWeight: 'bold'
    },
    cards: {
        flex: 1,
        margin: 10,
        borderColor: "#FAFAFA",
        backgroundColor: '#FAFAFA',
        borderRadius: 11,
        width: imageSizeWidth,
        height: 280
    },
    image: {
        width: '100%',
        height: '75%'
    },
    alive: {
        color: 'green'
    },
    dead: {
        color: 'red'
    }
});

export default CharactersScreen;