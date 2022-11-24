import react, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';
import ExpandableView from '../view/ExpandableView';
import Segment from '../Segment';

const CharacterScreen = ({ route, navigation, locations }: any) => {
    const { id } = route.params;
    const [character, loading, error] = useGetCharacter({ id });

    // Navigate to 1 Episode //
    const handleLocationClick = (location) =>
        navigation.navigate('Location', location);

    3

    return (
        <SafeAreaView style={styles.container}>
            <Segment loading={loading}>
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
                                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>
                                        Last known location endpoint:
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("Location", character?.location)}>
                                        <Text style={{ marginTop: 5, color: '#fff' }}>
                                            {character?.location.name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <ExpandableView
                            navigation={navigation}
                            episodes={character?.episode}
                        />
                    </View>
                </View>
            </Segment>
        </SafeAreaView>
    );
}

const EpisodeCard = ({ episode }) => {
    return (
        <Text style={{ color: "#000", marginVertical: 4, fontWeight: 'bold' }}>{episode.name} - {episode.episode}</Text>
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