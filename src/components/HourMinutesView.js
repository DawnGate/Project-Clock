import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HourMinutesView = ({ timeText }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        style={{
          color: colors.text,
          fontSize: 80,
          fontWeight: "300",
        }}
      >
        {timeText}
      </Text>
    </View>
  );
};

export default HourMinutesView;
