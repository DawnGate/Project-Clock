import { StyleSheet, TouchableOpacity, Text, Animated } from "react-native";
import { addWorldClock } from "@/store/worldClockSlice";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  container: {},
  itemText: {
    fontSize: 20,
    paddingVertical: 10,
  },
});

const SectionListItem = ({ colors, item, setModalVisible }) => {
  const fadeAnim = new Animated.Value(0);
  const dispatch = useDispatch();
  const fadeIn = () => {
    Animated.spring(fadeAnim, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.spring(fadeAnim, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View
      style={[
        {
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", colors.third],
          }),
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(addWorldClock(item.value));
          setModalVisible(false);
        }}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
      >
        <Text
          style={{
            color: colors.text,
            ...styles.itemText,
          }}
        >
          {item.value}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SectionListItem;
