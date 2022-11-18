import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import useGetEpisode from '../../hooks/useGetEpisode';
import DetailsScreen from '../../constants/DetailsScreen';

const EpisodeScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [episode, loading, error] = useGetEpisode({ id });

    return (
        <DetailsScreen
            name={episode?.name}
        />
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
        borderWidth: 5,
        borderColor: "red"
    }
});

export default EpisodeScreen;