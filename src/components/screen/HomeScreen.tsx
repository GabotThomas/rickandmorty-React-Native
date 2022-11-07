
import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';


const HomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
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