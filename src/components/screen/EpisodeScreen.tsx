import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import useGetEpisode from '../../hooks/useGetEpisode';

const EpisodeScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [episode, loading, error] = useGetEpisode({ id });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>{episode?.name}</Text>
            </View>
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
        borderWidth: 5,
        borderColor: "red"
    }
});

export default EpisodeScreen;