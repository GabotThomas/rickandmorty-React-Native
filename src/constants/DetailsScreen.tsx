import React from "react";
import ExpandableView from "../components/view/ExpandableView";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";


const DetailsScreen = ({image, name, status, species, location, episode, navigation}: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={{ uri: image }} style={{ height: '100%', flex: 1, marginRight: 5, borderRadius: 10, }} />
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <Text style={styles.textTitle}>{name}</Text>
                        <View style={{ /*flex: 1 */ }}>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <View style={[styles.square, styles[status]]}></View>
                                <Text style={styles.text}>{status}</Text>
                                <Text style={styles.text}>  -  </Text>
                                <Text style={styles.text}>{species}</Text>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Last known location endpoint:</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Location",location)}><Text style={{ marginTop: 5, color: '#fff' }}>{location?.name}</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <ExpandableView
                        navigation={navigation}
                        episodes={episode}
                    />
                </View>
            </View>
        </SafeAreaView>
    );

    const EpisodeCard = ({ episode }) => {
        return (
            <Text style={{ color: "#000", marginVertical: 4, fontWeight: 'bold' }}>{episode.name} - {episode.episode}</Text>
        )
    }

     // Navigate to 1 Episode //
     const handleLocationClick = (location) =>
     navigation.navigate('Location', location);

 3
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

export default DetailsScreen;