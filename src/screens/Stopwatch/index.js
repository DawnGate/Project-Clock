import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Stopwatch = () => {
  const fadeAnim = new Animated.Value(0);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 1,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.spring(fadeAnim, {
      toValue: 0,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          { ...styles.fadingContainer, opacity: 1 },
          {
            // Bind opacity to animated value

            backgroundColor: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["black", "red"],
            }),
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPressIn={fadeIn}
          onPressOut={fadeOut}
          onPress={() => {
            console.log("hello");
          }}
        >
          <Text style={{ color: "white" }}>Click me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    color: "white",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default Stopwatch;
