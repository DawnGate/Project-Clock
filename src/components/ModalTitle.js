import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

const ModalTitle = ({ title, color }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: color }}>{title}</Text>
    </View>
  );
};

export default ModalTitle;
