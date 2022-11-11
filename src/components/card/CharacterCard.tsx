import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native"
import { COLUMN_2 } from "../../constants/column";


const CharacterCard = ({ character, handleClick }: any) => {

    const isAlive = character.status == 'Alive';

    return (
        <TouchableOpacity style={styles.cards} onPress={() => handleClick(character.id)}>
            <View style={styles.image}>
                <Image source={{ uri: character.image }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>
            <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
                <Text style={styles.text}>{character.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles[character.status]}>{character.status}</Text>
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

export default CharacterCard;