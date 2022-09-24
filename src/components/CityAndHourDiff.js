import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diffHour: {
    fontSize: 20,
  },
  city: {
    marginTop: 4,
    fontSize: 34,
    marginRight: 5,
  },
});

const dayHash = {
  0: "Today",
  1: "Tomorrow",
  "-1": "Yesterday",
};

const CityAndHourDiff = ({ diffHours, diffDay, city }) => {
  const { colors } = useTheme();
  const citySplit = city.split("/", 2);
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.diffHour, color: colors.secondary }}>
        {`${dayHash[diffDay.toString()]}, ${diffHours}HRS`}
      </Text>
      <Text
        style={{ ...styles.city, color: colors.text }}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {citySplit.length > 1 ? citySplit[1] : citySplit[0]}
      </Text>
    </View>
  );
};

export default CityAndHourDiff;
