import { SectionList, View, Text } from "react-native";
import data from "../data";
const ListCountryTimeZone = () => {
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
    .sort((a, b) => getFistChar(data[a], "/", 1) > getFistChar(data[b], "/", 1))
    .map((key) => {
      const value = data[key];
      const alphabet_key = getFistChar(value, "/", 1);
      const section_data_item = sections_data.find(
        (item) => item.title === alphabet_key
      );
      console.log(alphabet_key);
      section_data_item.data = [
        ...section_data_item.data,
        {
          key: key,
          value: value,
        },
      ];
      return key;
    });

  console.log(sections_data);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SectionList
        sections={sections_data}
        renderItem={({ item }) => {
          return (
            <Text
              style={{
                color: "#fff",
              }}
            >
              {item.value}
            </Text>
          );
        }}
        renderSectionHeader={({ section: {title}}) => {
            return <Text style={{
                color: "#fff"
            }}>{title}</Text>
        }}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default ListCountryTimeZone;
