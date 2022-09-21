import { SafeAreaView } from "react-native";

const Layout = ({ children, bottomColor }) => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "transparent" }}
      ></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {children}
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: bottomColor }}
      ></SafeAreaView>
    </>
  );
};

export default Layout;
