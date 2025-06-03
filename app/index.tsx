import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const slides = [1, 2, 3]; // Just identifiers for carousel pages

export default function Index() {
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
  const imageHeight = (screenHeight * 363) / 640;
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Scrollable Background Image Carousel */}
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <Image
            source={require("../assets/images/boardBackground.png")}
            style={[styles.backgroundImage, { width: screenWidth, height: imageHeight }]}
            resizeMode="cover"
          />
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Easy Online Payment</Text>
        <Text style={styles.description}>
          Make your payment experience more better today. No additional admin fee
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => router.push("/mainPage")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Sign Up</Text>
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
    height: "60%",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  textContainer: {
    display: "flex",
    gap: 6,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 25,
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
    marginBottom: 25,
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
