import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { theme } from "@/theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NAVIGATION } from "@/constants";
import { WorldClock, Alarm, Stopwatch, Timer } from "@/screens";
import { TabBarIcon } from "@/components";

const Tab = createBottomTabNavigator();

const TabNavigationRender = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          return (
            <TabBarIcon
              color={color}
              routeName={route.name}
              focused={focused}
            ></TabBarIcon>
          );
        },
      })}
    >
      <Tab.Screen name={NAVIGATION.world_clock} component={WorldClock} />
      <Tab.Screen name={NAVIGATION.alarm} component={Alarm} />
      <Tab.Screen name={NAVIGATION.stop_watch} component={Stopwatch} />
      <Tab.Screen name={NAVIGATION.timer} component={Timer} />
    </Tab.Navigator>
  );
};

export function RootNavigator() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={theme[scheme]}>
      <TabNavigationRender />
    </NavigationContainer>
  );
}
