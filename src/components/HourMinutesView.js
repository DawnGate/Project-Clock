import { View, Text } from "react-native";
import { format } from "date-fns";
import { useTheme } from "@react-navigation/native";

const HourMinutesView = () => {
  const timeText = format(Date.now(), "HH:mm");
  const { colors } = useTheme();
  return (
    <View>
      <Text
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