import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import useGetEpisode from '../../hooks/useGetEpisode';
import CharacterCard from '../card/CharacterCard';
import Segment from '../Segment';
import { renameTitle } from '../functions.tsx';
import { styleScreen } from '../../styleSheets';

const episodeImages = require("../../assets/json/RickandMortyEPISODES.json");

const EpisodeScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [episode, loading, error] = useGetEpisode({ id });

    const handleCharacterClick = (character) =>
        navigation.navigate('Character', character);

    3

    return (
        <SafeAreaView style={styleScreen.container}>
            <Segment loading={loading}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={{ uri: episodeImages[episode?.id] }} style={{ height: '100%', flex: 1, marginRight: 5, borderRadius: 10, }} />
                        <View style={{ flex: 1, marginLeft: 5 }}>
                            <Text style={[styleScreen.text, styleScreen.textTitle]}>{renameTitle(episode?.name)}</Text>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#fff', marginTop: 10 }}>The code of the episode:</Text>
                                <Text style={styleScreen.text}>{episode?.episode}</Text>
                                <Text style={{ fontWeight: 'bold', color: '#fff', marginTop: 10 }}>The air date of the episode:</Text>
                                <Text style={styleScreen.text}>{episode?.air_date}</Text>
                            </View>
                        </View >
                    </View >
                    <View style={{ flex: 2 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24, alignItems: 'flex-start', marginTop: 40, marginBottom: 10 }}>Characters</Text>
                            <Text style={{ marginTop: 40, marginBottom: 10, color: "#ffffff" }}>({episode?.characters.length})</Text>
                        </View>
                        {episode?.characters.length > 0 &&
                            <FlatList
                                data={episode?.characters}
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

export default EpisodeScreen;