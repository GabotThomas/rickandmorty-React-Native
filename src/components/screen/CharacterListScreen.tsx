import react, { Component, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import useGetCharacters from '../../hooks/useGetCharacters';
import CharacterCard from '../card/CharacterCard';
import Pagination from '../Pagination';
import { TextInput } from 'react-native-gesture-handler';
import { listStyle, text, textSchwifty } from '../../styleSheets/index'
import Segment from '../Segment';




const CharacterListScreen = ({ navigation, route }: any) => {
    const [filter, setFilter] = useState({});
    const [pages, setPages] = useState({
        current: route.params?.page || 1,
        prev: null,
        next: null
    })
    const [characters, setCaracters] = useState([]);
    const [result, loading, error] = useGetCharacters({ page: pages.current, filter });


    useEffect(() => {
        if (result?.results) {
            setCaracters(result.results);
            setPages({ ...pages, ...result.info })
        }
    }, [result])

    // Navigate to 1 Character //
    const handleCharacterClick = (character) =>
        navigation.navigate('Character', character);

    const handlePage = (current: Number) => {
        setPages({ ...pages, current })
    }

    const handleChange = (name, value) => {
        setFilter({ ...filter, [name]: value })
    }

    return (
        <SafeAreaView style={listStyle}>
            <Segment loading={loading && !filter.name}>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <Text style={[{ marginBottom: 10 }, textSchwifty]}>Nom du Personnages :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => handleChange('name', value)}
                    />
                </View>
                <Segment loading={loading}>
                    {characters.length > 0 &&
                        <FlatList data={characters} numColumns={2} renderItem={({ item }) =>
                            <CharacterCard character={item} handleClick={handleCharacterClick} />
                        }
                        />
                    }
                    {Object.keys(pages).length > 1 &&
                        <Pagination
                            current={pages.current}
                            next={pages.next}
                            prev={pages.prev}
                            handlePage={handlePage}
                        />
                    }
                </Segment>
            </Segment>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 4,
        padding: 15,
        marginBottom: 15,
        fontSize: 14,
        backgroundColor: '#333333',
        width: '80%',
        color: 'white'
    }
});

export default CharacterListScreen;