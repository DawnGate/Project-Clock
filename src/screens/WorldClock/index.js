import {
  HeaderBar,
  HourMinutesView,
  Layout,
  ListItem,
  ScreenHeader,
} from "@/components";
import { useTheme } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";

const WorldClock = () => {
  const { colors } = useTheme();

  const items = [
    { id: 1, title: "Hello" },
    { id: 2, title: "Hello" },
    { id: 3, title: "Hello" },
    { id: 4, title: "Hello" },
    { id: 5, title: "Hello" },
    { id: 6, title: "Hello" },
    { id: 7, title: "Hello" },
  ];
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <HeaderBar />
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
          <ScreenHeader color={colors.text} title="World Clock" />
          {items.map((item) => (
            <ListItem key={item.id}>
              <Text style={{ color: colors.text }}>{item.title}</Text>
              <HourMinutesView />
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default WorldClock;
