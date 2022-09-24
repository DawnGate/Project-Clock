import { useTheme } from "@react-navigation/native";
import { SectionList, View, Text, StyleSheet } from "react-native";
import data from "../data";
import { Divider } from "react-native-elements";
import SectionListItem from "./SectionListItem";

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },

  subContainer: {
    marginLeft: 5,
  },

  listHeader: {
    paddingVertical: 10,
    fontSize: 20,
  },
});
const ListCountryTimeZone = ({ searchText, setModalVisible }) => {
  const { colors } = useTheme();

  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  const sections_data = alphabets.map((item) => ({
    title: item,
    data: [],
  }));

  const getFistChar = (text, split_char, index) => {
    const temp_arr = text.split(split_char);
    if (temp_arr.length > 1) {
      return temp_arr[index][0];
    }
    return temp_arr[0][0];
  };

  Object.keys(data)
    .filter((key) => (searchText ? data[key].includes(searchText) : key))
    .sort((a, b) => getFistChar(data[a], "/", 1) > getFistChar(data[b], "/", 1))
    .map((key) => {
      const value = data[key];
      const alphabet_key = getFistChar(value, "/", 1);
      const section_data_item = sections_data.find(
        (item) => item.title === alphabet_key
      );
      section_data_item.data = [
        ...section_data_item.data,
        {
          key: key,
          value: value,
        },
      ];
      return key;
    });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SectionList
        sections={sections_data}
        style={styles.container}
        removeClippedSubviews
        renderItem={(data) => {
          const item = data.item;
          return (
            <View style={styles.subContainer} key={item.key}>
              <SectionListItem
                colors={colors}
                item={item}
                setModalVisible={setModalVisible}
              />
              {(data.section.data.length - 1 > data.index || searchText) && (
                <Divider />
              )}
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => {
          return (
            <>
              {searchText ? null : (
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: colors.primary,
                    paddingLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      ...styles.listHeader,
                      color: colors.text,
                    }}
                  >
                    {title}
                  </Text>
                </View>
              )}
            </>
          );
        }}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default ListCountryTimeZone;
