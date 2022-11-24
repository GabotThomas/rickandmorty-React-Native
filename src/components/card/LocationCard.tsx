import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { cardStyle, imageCardStyle, text } from "../../styleSheets";


const LocationCard = ({ location, image, handleClick }: any) => {
    const { id, name, dimension } = location;

    return (
        <TouchableOpacity style={cardStyle} onPress={() => handleClick({ id, name })}>
            <View style={imageCardStyle}>
                <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>
            <View style={{ flex: 1, padding: 10, justifyContent: 'space-around' }}>
                <Text style={text}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{dimension}</Text>
                    <Text style={text}>{'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default LocationCard;