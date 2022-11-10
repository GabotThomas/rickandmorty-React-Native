import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';

const CharacterScreen = ({ navigation }: any) => {
    
    const [character, loading, error] = useGetCharacter({ id: Number });

    console.log(character?.results)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
            <Text style={styles.text}>Prev</Text>
            <Text style={styles.text}>Next</Text>
            <Text style={styles.text}>Character</Text>
            {character?.results.length &&
                <FlatList data={character.results} renderItem={({ item }) =>
                <View style={styles.cards}>
                    <Image source= {{uri: item.image}} style={{width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8}}/>
                    <View style={{padding: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <View>
                            <Text style={styles.text}>{item.status}</Text>
                        </View>
                    </View>
                </View>
                } />
            }
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