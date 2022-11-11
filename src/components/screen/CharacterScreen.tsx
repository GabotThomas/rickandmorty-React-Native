import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';

const CharacterScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [character, loading, error] = useGetCharacter({ id });

    console.log(character)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>Prev</Text>
            <Text style={styles.text}>Next</Text>
            <Text style={styles.text}>{character?.name}</Text>

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
        color: '#FFF'
    },
    cards: {
        borderWidth: 5,
        borderColor: "red"
    }
});

export default CharacterScreen;