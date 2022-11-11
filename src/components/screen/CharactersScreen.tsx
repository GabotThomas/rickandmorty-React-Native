import react, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text } from 'react-native';
import useGetCharacters from '../../hooks/useGetCharacters';
import CharacterCard from '../card/CharacterCard';




const CharactersScreen = ({ navigation }: any) => {

    // Navigate to 1 Character //
    const handleCharacterClick = (idCharacter: any) =>
        navigation.navigate('Character', idCharacter);


    const [characters, loading, error] = useGetCharacters({ page: 1 });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>Prev</Text>
            <Text style={styles.text}>Next</Text>
            <Text style={styles.text}>Characters</Text>
            {characters?.results.length &&
                <FlatList data={characters.results} numColumns={2} renderItem={({ item }) =>
                    <CharacterCard character={item} handleClick={handleCharacterClick} />
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
        fontWeight: 'bold',
    }
});

export default CharactersScreen;