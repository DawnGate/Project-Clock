import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#B0BEC5",
      secondary: "#29434E",
      third: "#D8D8D8",
      error: "#D32F2F",
      text: "#212121",
      border: "#212121",
      activeTab: "#1976D2",
      inactiveTab: "#757575",
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#212121",
      secondary: "#444444",
      third: "#979797",
      error: "#D32F2F",
      text: "#FFFFFF",
      border: "#FFFFFF",
      activeTab: "rgb(255,159,10)",
      inactiveTab: "#898989",
    },
  },
};
