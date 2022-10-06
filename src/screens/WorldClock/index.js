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
import { useEffect, useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import { AddWorldClockModal } from "../Modal";
import { useSelector } from "react-redux";
import { zonedTimeToUtc, utcToZonedTime } from "date-fns-tz";

import {
  format,
  differenceInDays,
  differenceInHours,
  subHours,
} from "date-fns";
import { convertTimeToLocalTimeZone, dateTimeWithoutTime } from "@/utils";

const WorldClock = () => {
  const { colors } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const items = useSelector((state) => state.worldClock.items);

  const [currentDate, setCurrentDate] = useState(new Date());

  const getDataFromItem = (item) => {
    const zoneTime = utcToZonedTime(currentDate, item);
    const diffHours = differenceInHours(zoneTime, currentDate);
    const diffDay = differenceInDays(
      dateTimeWithoutTime(convertTimeToLocalTimeZone(zoneTime)),
      dateTimeWithoutTime(convertTimeToLocalTimeZone(currentDate))
    );
    return {
      diffHours: diffHours,
      diffDay: diffDay,
      timeText: format(zoneTime, "HH:mm"),
    };
  };

  useEffect(() => {
    const secTimer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * (60 - currentDate.getSeconds()));

    return () => {
      clearInterval(secTimer);
    };
  }, [currentDate]);

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
        <HeaderBar
          setModalVisible={setModalVisible}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        {items.length && currentDate ? (
          <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
            <ScreenHeader color={colors.text} title="World Clock" />
            {items.map((item, index) => {
              const data = getDataFromItem(item);
              return (
                <ListItem key={index} firstItem={index === 0}>
                  <CityAndHourDiff
                    diffDay={data.diffDay}
                    diffHours={data.diffHours}
                    city={item}
                    isEditAble={isEdit}
                  />
                  {!isEdit && <HourMinutesView timeText={data.timeText} />}
                </ListItem>
              );
            })}
          </ScrollView>
        ) : (
          <BackgroundTextView title="No World Clocks" colors={colors} />
        )}
      </View>
    </LayoutWithHeader>
  );
};

export default WorldClock;
