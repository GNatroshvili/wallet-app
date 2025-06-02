import { Stack } from "expo-router";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { height: screenHeight } = Dimensions.get("window");
  const imageHeight = (screenHeight * 363) / 640;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <Image
        source={require("../assets/images/boardBackground.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
        height={imageHeight}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Easy Online Payment</Text>
        <Text style={styles.description}>
          Make your payment experience more better today. No additional admin
          fee
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Sigh Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  backgroundImage: {
    width: "100%",
    // height: "55%",
  },
  textContainer: {
    display: "flex",
    gap: 6,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 56,
  },
  title: {
    fontSize: 35,
    fontFamily: "IBM Plex Sans",
    fontWeight: "600",
    lineHeight: 30,
    textAlign: "center",
    color: "#0B0A0A",
  },
  description: {
    fontSize: 16,
    fontFamily: "IBM Plex Sans",
    fontWeight: "400",
    textAlign: "center",
    color: "#595F67",
    marginTop: 12,
  },
  buttonContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 6,
  },
  buttonPrimary: {
    backgroundColor: "#000000",
    height: 38,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    height: 38,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.79,
    borderColor: "#000000",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSecondary: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});
