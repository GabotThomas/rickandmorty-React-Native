import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useGetLocations from "../../hooks/useGetLocations";
import Pagination from '../Pagination';
import LocationCard from '../card/LocationCard';
import { listStyle } from "../../styleSheets";
import Segment from "../Segment";

const locationImages = require("../../assets/json/RickandMortyLOCATIONS.json")


const LocationListScreen = ({ navigation, route }: any) => {
    const [pages, setPages] = useState({
        current: route.params?.page || 1,
        prev: null,
        next: null
    })
    const [characters, setCaracters] = useState([]);
    const [result, loading, error] = useGetLocations({ page: pages.current });

    useEffect(() => {
        if (result?.results) {
            setCaracters(result.results);
            setPages({ ...pages, ...result.info })
        }
    }, [result])

    // Navigate to 1 Location //
    const handleCharacterClick = (location) =>
        navigation.navigate('Location', location);

    const handlePage = (current: Number) => {
        setPages({ ...pages, current })
    }

    return (
        <SafeAreaView style={listStyle}>
            <Segment loading={loading}>
                {characters.length > 0 &&
                    <FlatList data={characters} numColumns={2} renderItem={({ item }) =>
                        <LocationCard location={item} image={locationImages[item.id]} handleClick={handleCharacterClick} />
                    }
                    />
                }
                {Object.keys(pages).length > 1 &&
                    <Pagination
                        current={pages.current}
                        next={pages.next}
                        prev={pages.prev}
                        handlePage={handlePage}
                    />
                }
            </Segment>
        </SafeAreaView >
    );

}

export default LocationListScreen;