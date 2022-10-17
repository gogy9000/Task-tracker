import {Text, View, StyleSheet} from "react-native";
import {FONTSIZEPrimary, HEIGHT, PADDING, WIDTH} from "../common/Variables";

export const Footer = () => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>
                Все наши права защищены, но это не точно.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: (HEIGHT - PADDING * 2) / 19,
        width: WIDTH,
        paddingHorizontal: 10,
        fontSize: FONTSIZEPrimary,
        backgroundColor: "rgba(5,5,5,0.2)",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#DDDDDD"
    }
})