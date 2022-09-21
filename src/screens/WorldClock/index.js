import {
  CityAndHourDiff,
  HeaderBar,
  HourMinutesView,
  LayoutWithHeader,
  ListItem,
  ScreenHeader,
  BackgroundTextView,
} from "@/components";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import { AddWorldClockModal } from "../Modal";
import { useSelector } from "react-redux";

const WorldClock = () => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector((state) => state.worldClock.items);

  console.log(items);

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
        <AddWorldClockModal setModalVisible={setModalVisible} />
      </Modal>
      <View style={{ flex: 1 }}>
        <HeaderBar setModalVisible={setModalVisible} />
        {items.length ? (
          <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
            <ScreenHeader color={colors.text} title="World Clock" />
            {items.map((item, index) => (
              <ListItem key={index}>
                <CityAndHourDiff />
                <HourMinutesView />
              </ListItem>
            ))}
          </ScrollView>
        ) : (
          <BackgroundTextView title="No World Clocks" colors={colors} />
        )}
      </View>
    </LayoutWithHeader>
  );
};

export default WorldClock;
