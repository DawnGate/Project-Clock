import { SafeAreaView } from "react-native";

const Layout = ({ children }) => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "rgba(255,255,255,0.1)" }}
      ></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {children}
      </SafeAreaView>
    </>
  );
};

export default Layout;
