import { useTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

const ListItem = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.root, borderBottomColor: colors.primary }}>
      {children}
    </View>
  );
};

export default ListItem;
