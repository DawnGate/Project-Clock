import {
  CityAndHourDiff,
  HeaderBar,
  HourMinutesView,
  LayoutWithHeader,
  ListItem,
  ScreenHeader,
} from "@/components";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import { AddWorldClockModal } from "../Modal";

const WorldClock = () => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(true);

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
    <LayoutWithHeader>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <AddWorldClockModal />
      </Modal>
      <View style={{ flex: 1 }}>
        <HeaderBar />
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
          <ScreenHeader color={colors.text} title="World Clock" />
          {items.map((item) => (
            <ListItem key={item.id}>
              <CityAndHourDiff />
              <HourMinutesView />
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </LayoutWithHeader>
  );
};

export default WorldClock;
