import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  diffHour: {
    fontSize: 20,
  },
  city: {
    marginTop: 4,
    fontSize: 34,
  },
});

const CityAndHourDiff = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ ...styles.diffHour, color: colors.secondary }}>
        Today, -11HRS
      </Text>
      <Text style={{ ...styles.city, color: colors.text }}>New York</Text>
    </View>
  );
};

export default CityAndHourDiff;
