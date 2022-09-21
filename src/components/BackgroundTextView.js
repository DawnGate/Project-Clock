import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
  },
});

const BackgroundTextView = ({ title, colors }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: colors.secondary }}>{title}</Text>
    </View>
  );
};

export default BackgroundTextView;
