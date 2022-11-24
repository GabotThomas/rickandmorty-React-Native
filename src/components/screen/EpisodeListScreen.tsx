import react, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import Pagination from '../Pagination';
import useGetEpisodes from '../../hooks/useGetEpisodes';
import EpisodeCard from '../card/EpisodeCard';
import { listStyle } from '../../styleSheets';
import Segment from '../Segment';

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
        <SafeAreaView style={listStyle}>
            <Segment loading={loading}>
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
            </Segment>
        </SafeAreaView >
    );
}

export default EpisodeListScreen;