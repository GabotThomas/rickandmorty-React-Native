import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { COLUMN_2 } from "../../constants/column";


const LocationCard = ({ location, image, handleClick }: any) => {
    const { id, name, dimension } = location;

    return (
        <TouchableOpacity style={styles.cards} onPress={() => handleClick({ id, name })}>
            <View style={styles.image}>
                <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>
            <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
                <Text style={styles.text}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{dimension}</Text>
                    <Text style={styles.text}>{'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: 'bold'
    },
    cards: {
        flex: 1,
        margin: 10,
        borderColor: "#FAFAFA",
        backgroundColor: '#FAFAFA',
        borderRadius: 11,
        width: COLUMN_2,
        height: 280
    },
    image: {
        width: '100%',
        height: '75%'
    },
    'Alive': {
        color: 'green'
    },
    'Dead': {
        color: 'red'
    },
    'unknown': {
        color: 'grey'
    }
});

export default LocationCard;