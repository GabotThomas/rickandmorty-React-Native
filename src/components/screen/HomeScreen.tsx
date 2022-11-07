
import react from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Episodes')}>
                <Text style={styles.text}>Episodes</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    text: {
        color: 'green'
    }
});

export default HomeScreen;