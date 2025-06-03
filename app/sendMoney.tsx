import { Stack } from "expo-router";
import React from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function sendMoney() {
    return (
        <View>
            <StatusBar hidden />
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image
                        source={require("../assets/images/arrow.png")}
                        style={styles.arrowImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.sendMoney}>Send Money</Text>
                </View>
                <View style={styles.headerRight}>
                    <Image
                        source={require("../assets/images/search.png")}
                        style={styles.arrowImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View style={styles.profileWrapper}>
                <Image
                    source={require("../assets/images/Profile.png")}
                    style={styles.profileImage}
                    resizeMode="contain"
                />
                <View style={styles.profileTextWrapper}>
                    <Text style={styles.name}>Nayantara V</Text>
                    <Text style={styles.number}>+91 8050530XXX</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    arrowImage: {
        width: 19,
        height: 19
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F9EFE5",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 40
    },
    headerLeft: {
        flexDirection: "row"
    },
    headerRight: {

    },
    sendMoney: {
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: 19,
        color: "#1C1C1C"
    },
    profileWrapper: {
        alignItems: "center",
        backgroundColor: "#F9EFE5",
        paddingTop: 19,
    },
    profileImage: {
        width: 110,
        height: 110
    },
    profileTextWrapper: {
        paddingTop: 13,
        alignItems: "center"
    },
    name: {
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: 19,
        lineHeight: 32,
        color: "#1C1C1C"
    },
    number: {
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: 13,
        color: "#595F67"
    }
});