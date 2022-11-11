import { Text, View, StyleSheet } from "react-native";

const Header = ({ navigation, title = "Title", next }) => {

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.text, marginRight: 10 }} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.pagination}>
                <Text style={{ ...styles.text, marginRight: 40 }}>Prev</Text>
                <Text style={styles.text} onPress={next}>Next</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFF',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }
});

export default Header;