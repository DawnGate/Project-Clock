const { View } = require("react-native");

const CircularIcon = ({ children, size }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: size,
        height: size,
        borderRadius: size * 0.5,
      }}
    >
      {children}
    </View>
  );
};

export default CircularIcon;
