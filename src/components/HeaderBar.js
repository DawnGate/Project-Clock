import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "./ButtonCustom";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 10,
    zIndex: 999,
  },
  button: {
    fontSize: 18,
    fontWeight: "500",
  },
});

const HeaderBar = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ButtonCustom
        title={"Edit"}
        style={{ ...styles.button, color: colors.activeTab }}
      />
      <Text></Text>
      <ButtonCustom
        title={"Add"}
        style={{ ...styles.button, color: colors.activeTab }}
      />
    </View>
  );
};

export default HeaderBar;
