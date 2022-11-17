import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import useGetLocation from '../../hooks/useGetLocation';

const LocationScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [location, loading, error] = useGetLocation({ id });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>{location?.name}</Text>
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

export default LocationScreen;