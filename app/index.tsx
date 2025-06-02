import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height: screenHeight } = Dimensions.get("window");

const slides = [
  require("../assets/images/boardBackground.png"),
  require("../assets/images/boardBackground.png"),
  require("../assets/images/boardBackground.png"),
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const imageHeight = (screenHeight * 363) / 640;

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Onboarding Carousel */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={[styles.backgroundImage, { height: imageHeight }]}
            resizeMode="cover"
          />
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? "#000" : "#C4C4C4",
              },
            ]}
          />
        ))}
      </View>

      {/* Text Below Carousel */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Easy Online Payment</Text>
        <Text style={styles.description}>
          Make your payment experience more better today. No additional admin
          fee
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
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
    width: width,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 16,
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
