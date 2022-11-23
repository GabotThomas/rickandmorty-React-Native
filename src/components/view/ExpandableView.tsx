import { useEffect, useState } from "react";
import { FlatList, Animated, Text, StyleSheet, View } from "react-native";
import EpisodeCard from "../card/EpisodeCard";

const episodeImages = require('../../assets/json/RickandMortyEPISODES.json');

const ExpandableView = ({ navigation, episodes = [] }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [height] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(height, {
            toValue: !isExpanded ?
                (episodes.length > 1 ? 400 : 300)
                : 0,
            duration: 150,
            useNativeDriver: false
        }).start();

    }, [isExpanded, height]);

    // Navigate to 1 Episode //
    const handleEpisodeClick = (episode) =>
        navigation.navigate('Episode', episode);

    3
    return (
        <>
            <View style={{flex: 1}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={[styles.textTitle, styles.margin]} onPress={() => { setIsExpanded(!isExpanded) }}>Episodes</Text>
                    <Text style={{marginTop: 40, marginBottom: 10, color: "#ffffff"}}>({episodes?.length})</Text>
                </View>
                <Animated.View style={[styles.container, { height }]}>
                    {episodes.length > 0 &&
                        <FlatList
                            data={episodes}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <EpisodeCard
                                    episode={item}
                                    image={episodeImages[item.id]}
                                    handleClick={handleEpisodeClick}
                                />
                            }
                        />
                    }
                </Animated.View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "gray",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    textTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        alignItems: 'flex-start'
    },
    margin: {
        marginTop: 40,
        marginBottom: 10
    },

});
export default ExpandableView;