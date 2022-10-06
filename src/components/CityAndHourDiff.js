import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import CircularIcon from "./CircularIcon";

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
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

const dayHash = {
  0: "Today",
  1: "Tomorrow",
  "-1": "Yesterday",
};

const CityAndHourDiff = ({ diffHours, diffDay, city, isEditAble }) => {
  const { colors } = useTheme();
  const citySplit = city.split("/", 2);
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: "row",
        padding: 10,
      }}
    >
      {isEditAble && (
        <View style={styles.iconContainer}>
          <CircularIcon size={30}>
            <Icon
              name="minuscircle"
              size={30}
              color={colors.error}
              onPress={() => {
                console.log("Delete");
              }}
            />
          </CircularIcon>
        </View>
      )}

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
    </View>
  );
};

export default CityAndHourDiff;
