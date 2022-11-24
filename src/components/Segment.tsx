import { ActivityIndicator, View } from "react-native"

const Segment = ({ loading, children }) => {
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return children;
}

export default Segment;