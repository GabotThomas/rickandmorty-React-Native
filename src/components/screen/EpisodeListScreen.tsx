import react, { Component, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import useGetCharacters from '../../hooks/useGetCharacters';
import CharacterCard from '../card/CharacterCard';
import Pagination from '../Pagination';
import useGetEpisodes from '../../hooks/useGetEpisodes';
import EpisodeCard from '../card/EpisodeCard';

const episodeImages = require('../../assets/json/RickandMortyEPISODES.json');

const EpisodeListScreen = ({ navigation, route }: any) => {
    const [pages, setPages] = useState({
        current: route.params?.page || 1,
        prev: null,
        next: null
    })
    const [characters, setCaracters] = useState([]);
    const [result, loading, error] = useGetEpisodes({ page: pages.current });


    useEffect(() => {
        if (result?.results) {
            setCaracters(result.results);
            setPages({ ...pages, ...result.info })
        }
    }, [result])

    // Navigate to 1 Character //
    const handleEpisodeClick = (episode) =>
        navigation.navigate('Episode', episode);

    const handlePage = (current: Number) => {
        setPages({ ...pages, current })
    }

    return (
        <SafeAreaView style={styles.container}>
            {characters.length > 0 &&
                <FlatList data={characters} numColumns={2} renderItem={({ item }) =>
                    <EpisodeCard episode={item} image={episodeImages[item.id]} handleClick={handleEpisodeClick} />
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
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'relative',
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
    }
});

export default EpisodeListScreen;