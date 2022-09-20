import {
  Layout,
  LayoutWithModal,
  ListCountryTimeZone,
  ModalTitle,
  SearchNavigation,
} from "@/components";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  sfarea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
  },
});

const AddWorldClockModal = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithModal bottomColor={colors.background}>
      <View style={{ ...styles.container, backgroundColor: colors.background }}>
        <ModalTitle title="Choose a City" color={colors.text} />
        <SearchNavigation colors={colors} />
        <ListCountryTimeZone />
      </View>
    </LayoutWithModal>
  );
};

export default AddWorldClockModal;
