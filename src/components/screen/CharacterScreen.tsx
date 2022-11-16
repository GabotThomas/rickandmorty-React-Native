import react, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';

const CharacterScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [character, loading, error] = useGetCharacter({ id });

    const ExpandableView = ({ expanded = false }) => {
        const [height] = useState(new Animated.Value(0));

        useEffect(() => {
            Animated.timing(height, {
              toValue: !expanded ? 200 : 0,
              duration: 150,
              useNativeDriver: false
            }).start();
          }, [expanded, height]);

          return (
            <Animated.View style={{ height, backgroundColor: "#FAFAFA", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20 }}>
                {character?.episode.length > 0 &&
                <FlatList data={character?.episode} renderItem={({ item }) => <EpisodeCard episode={item} />} />
            }
            </Animated.View>
          );
    };
    
    const [isExpanded, setIsExpanded] = useState(true);

    return (    
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={{ uri: character?.image }} style={{ height: '100%', flex: 1, marginRight: 5, borderRadius: 10, }} />
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <Text style={styles.textTitle}>{character?.name}</Text>
                        <View style={{ /*flex: 1 */ }}>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <View style={[styles.square, styles[character?.status]]}></View>
                                <Text style={styles.text}>{character?.status}</Text>
                                <Text style={styles.text}>  -  </Text>
                                <Text style={styles.text}>{character?.species}</Text>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Last known location endpoint:</Text>
                                <Text style={{ marginTop: 5, color: '#fff' }}>{character?.location.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={[styles.textTitle, styles.margin]} onPress={() => {setIsExpanded(!isExpanded)}}>Episodes</Text>
                    <ExpandableView expanded={isExpanded}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const EpisodeCard = ({ episode }) => {
    return (
        <Text style={{color: "#000", marginVertical: 4, fontWeight: 'bold'}}>{episode.name} - {episode.episode}</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 20
    },
    textTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 32,
        alignItems: 'flex-start'
    },
    text: {
        color: '#FFF',
        alignItems: 'center',
    },
    cards: {
        borderWidth: 5,
        borderColor: "red"
    },
    square: {
        width: 15,
        height: 15,
        borderRadius: 50,
        marginRight: 5
    },
    margin: {
        marginTop: 40,
        marginBottom: 10
    },
    'Alive': {
        backgroundColor: 'green'
    },
    'Dead': {
        backgroundColor: 'red'
    },
    'unknown': {
        backgroundColor: 'gray'
    }
});

export default CharacterScreen;