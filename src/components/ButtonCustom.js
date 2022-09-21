import { TouchableOpacity, View, Text } from "react-native";

const ButtonCustom = ({ title, style, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View>
        <Text style={style}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
