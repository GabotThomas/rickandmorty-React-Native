import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native"
import { COLUMN_2 } from "../../constants/column";
import { cardStyle, imageCardStyle, text } from "../../styleSheets";


const CharacterCard = ({ character, handleClick }: any) => {
    const { id, name, status, image } = character;

    return (
        <TouchableOpacity style={cardStyle} onPress={() => handleClick({ id, name })}>
            <View style={imageCardStyle}>
                <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>
            <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
                <Text style={text}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles[status]}>{status}</Text>
                    <Text style={text}>{'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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