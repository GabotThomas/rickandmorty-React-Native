import react, { Component, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import useGetCharacters from '../../hooks/useGetCharacters';
import CharacterCard from '../card/CharacterCard';
import Header from '../Header';




const CharactersScreen = ({ navigation, route }: any) => {
    const [page, setPage] = useState(route.params?.page || 1)
    const [characters, loading, error] = useGetCharacters({ page });
    // Navigate to 1 Character //
    const handleCharacterClick = (id: any) =>
        navigation.navigate('Character', { id });

    const handleNext = () => {
        navigation.navigate('Characters', { page: 2 });
    }




    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={`Page ${page}`} next={handleNext} />
            <View>
                {characters?.results.length &&
                    <FlatList data={characters.results} numColumns={2} renderItem={({ item }) =>
                        <CharacterCard character={item} handleClick={handleCharacterClick} />
                    } />
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#262626',
        backgroundColor: '#000',
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
    }
});

export default CharactersScreen;