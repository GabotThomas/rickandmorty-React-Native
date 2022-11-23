import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { text, textTitle } from "../styleSheets";

export const HeaderLeft = (props) => {
    const navigation = useNavigation();
    if (!props.canGoBack) {
        return null;
    }
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={text}>{'Back'}</Text>
        </TouchableOpacity>)
        ;
}

export const HeaderCenter = (props) => {
    return <Text style={textTitle}>{props.children}</Text>
}

export const HeaderRight = (props) => {
    const navigation = useNavigation();

    const handleOpen = () => {
        navigation.openDrawer();
    }

    return (
        <TouchableOpacity onPress={handleOpen}>
            <Text style={text}>Menu</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#262626',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    menuContainer: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        height: '111%',
        width: '100%',
        right: 0,
        //backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 10,
    }
});