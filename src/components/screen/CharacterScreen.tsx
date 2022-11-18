import react, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import useGetCharacter from '../../hooks/useGetCharacter';
import DetailsScreen from '../../constants/DetailsScreen';

const CharacterScreen = ({ route, navigation }: any) => {
    const { id } = route.params;
    const [character, loading, error] = useGetCharacter({ id });

    return (
        <DetailsScreen
            name={character?.name}
            image={character?.image}
            location={character?.location}
            species={character?.species}
            dimension={character?.dimension}
            status={character?.status}
            episode={character?.episode}/>
    );
}

const styles = StyleSheet.create({});

export default CharacterScreen;