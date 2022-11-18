import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import useGetLocation from '../../hooks/useGetLocation';
import CharacterCard from '../card/CharacterCard';

const locationImages = require("../../assets/json/RickandMortyLOCATIONS.json")

const LocationScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [location, loading, error] = useGetLocation({ id });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ width: 150, height: 150 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: locationImages[location?.id] }} />
                </View>
                <Text style={[styles.text, styles.textTitle]}>{location?.name}</Text>
                <Text style={styles.text}>{location?.dimension}</Text>
                <Text style={styles.text}>{location?.type}</Text>
                <Text style={styles.text}>{location?.residents.name}</Text>
                <View>
                    {location?.residents.length > 0 &&
                        <FlatList
                            data={location?.residents}
                            renderItem={({ item }) =>
                                <CharacterCard
                                    character={item}
                                // handleClick={handleEpisodeClick}
                                />
                            }
                        />
                    }
                </View>
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
    textTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 32,
        alignItems: 'flex-start'
    },
    image: {
        width: '100%',
        height: '75%'
    },
    cards: {
        borderWidth: 5,
        borderColor: "red"
    }
});

export default LocationScreen;