import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  searchIcon: {
    paddingEnd: 5,
  },
  clearSearchIcon: {
    borderRadius: 10,
  },
});

const SearchNavigation = ({
  colors,
  setModalVisible,
  setSearchText,
  searchText,
}) => {
  return (
    <View style={styles.root}>
      <View style={{ ...styles.container, backgroundColor: colors.secondary }}>
        <Feather
          name="search"
          size={20}
          color={colors.third}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={{ ...styles.textInput, color: colors.third }}
          value={searchText}
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => {
            setSearchText(text);
          }}
        ></TextInput>
        {searchText && (
          <TouchableOpacity
            style={{ ...styles.clearSearchIcon, backgroundColor: colors.third }}
            onPress={() => {
              setSearchText("");
              Keyboard.dismiss();
            }}
          >
            <Entypo name="cross" size={20} />
          </TouchableOpacity>
        )}
      </View>
      <Button
        title="Cancel"
        color={colors.activeTab}
        onPress={() => {
          setModalVisible(false);
        }}
      ></Button>
    </View>
  );
};

export default SearchNavigation;
