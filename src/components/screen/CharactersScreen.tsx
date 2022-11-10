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

    const statusAlive = ({value}) => {
        if (value === 'Alive') {
            return {color: 'green'};
        } 
        else if (value === 'Dead') {
            return {color: 'red'};
        } 
        else {
            return {color: 'gray'};
        }
    }

    // console.log(characters?.results)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>Prev</Text>
            <Text style={styles.text}>Next</Text>
            <Text style={styles.text}>Characters</Text>
            {characters?.results.length &&
                <FlatList data={characters.results} numColumns={2} renderItem={({ item }) =>
                <TouchableOpacity style={styles.cards} onPress={() => handleCharacterClick(item)}>
                    <Image source= {{uri: item.image}} style={{width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8}}/>
                    <View style={{padding: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <View>
                            <Text style={[statusAlive(item.status)]}>{item.status}</Text>
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
        backgroundColor: '#000',
    },
    text: {
        color: '#FFF'
    },
    cards: {
        flex: 1,
        margin: 10,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 11,
        width: imageSizeWidth,

    }
});

export default CharactersScreen;