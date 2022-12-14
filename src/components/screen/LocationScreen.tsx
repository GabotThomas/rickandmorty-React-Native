import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import useGetLocation from '../../hooks/useGetLocation';
import CharacterCard from '../card/CharacterCard';
import Segment from '../Segment';
import { renameTitle } from '../functions.tsx';
import { styleScreen } from '../../styleSheets';

const locationImages = require("../../assets/json/RickandMortyLOCATIONS.json")

const LocationScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [location, loading, error] = useGetLocation({ id });

    const handleCharacterClick = (character) =>
        navigation.navigate('Character', character);

    3

    return (
        <SafeAreaView style={styleScreen.container}>
            <Segment loading={loading}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: locationImages[location?.id] }} style={{ height: '100%', flex: 1, marginRight: 5, borderRadius: 10, }} />
                        <View style={{ flex: 1, marginLeft: 5 }}>
                            <Text style={[styleScreen.text, styleScreen.textTitle]}>{renameTitle(location?.name)}</Text>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#fff', marginTop: 10 }}>The dimension in which the location is located:</Text>
                                <Text style={styleScreen.text}>{location?.dimension}</Text>
                                <Text style={{ fontWeight: 'bold', color: '#fff', marginTop: 10 }}>The type of the location:</Text>
                                <Text style={styleScreen.text}>{location?.type}</Text>
                            </View>
                        </View >
                    </View >
                    <View style={{ flex: 2 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, alignItems: 'flex-start', marginTop: 40, marginBottom: 10 }}>Characters</Text>
                            <Text style={{ marginTop: 40, marginBottom: 10, color: "#ffffff" }}>({location?.residents.length})</Text>
                        </View>
                        {location?.residents.length > 0 &&
                            <FlatList
                                data={location?.residents}
                                numColumns={2}
                                renderItem={({ item }) =>
                                    <CharacterCard
                                        character={item}
                                        handleClick={handleCharacterClick}
                                    />
                                }
                            />
                        }
                    </View>
                </View >
            </Segment >
        </SafeAreaView >
    );
}

export default LocationScreen;