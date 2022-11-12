import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';

const CharacterScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [character, loading, error] = useGetCharacter({ id });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>{character?.name}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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