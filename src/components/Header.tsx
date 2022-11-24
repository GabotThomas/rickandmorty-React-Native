import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from "react-native";
import { textSchwifty, textTitle } from "../styleSheets";

export const HeaderLeft = (props) => {
    const navigation = useNavigation();
    if (!props.canGoBack) {
        return null;
    }
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={textSchwifty}>{'Back'}</Text>
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
            <Text style={textSchwifty}>Menu</Text>
        </TouchableOpacity>
    );
}