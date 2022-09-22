import { Text } from "react-native";
const ScreenHeader = ({ title, color }) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: 30,
        fontWeight: "700",
        marginVertical: 10,
      }}
    >
      {title}
    </Text>
  );
};

export default ScreenHeader;
