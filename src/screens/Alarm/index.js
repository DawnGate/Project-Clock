import { LayoutWithHeader } from "@/components";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const Alarm = () => {
  const { colors } = useTheme();

  return (
    <LayoutWithHeader>
      <View>
        <Text
          style={{
            color: colors.text,
          }}
        >
          Alarm
        </Text>
      </View>
    </LayoutWithHeader>
  );
};

export default Alarm;
