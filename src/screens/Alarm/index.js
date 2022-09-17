import { Layout } from "@/components";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

const Alarm = () => {
  const { colors } = useTheme();

  return (
    <Layout>
      <View>
        <Text
          style={{
            color: colors.text,
          }}
        >
          Alarm
        </Text>
      </View>
    </Layout>
  );
};

export default Alarm;
