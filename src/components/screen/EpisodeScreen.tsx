import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text } from 'react-native';
import useGetEpisodes from '../../hooks/useGetEpisodes';


const EpisodeScreen = ({ navigation }: any) => {

    const [episodes, loading, error] = useGetEpisodes({ page: 1 });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Episode</Text>
            {episodes?.results.length &&
                <FlatList data={episodes.results} renderItem={({ item }) =>
                    <Text style={styles.text} >{item.name}</Text>
                } />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    text: {
        color: 'green'
    }
});

export default EpisodeScreen;