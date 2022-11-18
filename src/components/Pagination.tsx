import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { text, textTitle } from '../styleSheets';

const Pagination = ({ current = 1, next, prev, handlePage }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => prev && handlePage(prev)}>
                <Text
                    style={{...textTitle, opacity: prev ? 1 : 0 }}
                >
                    Prev
                </Text>
            </TouchableOpacity>
            <Text style={textTitle}>{`Page ${current}`}</Text>
            <TouchableOpacity onPress={() => next && handlePage(next)}>
                <Text
                    style={{ ...textTitle, opacity: next ? 1 : 0 }}
                >
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }
});

export default Pagination;