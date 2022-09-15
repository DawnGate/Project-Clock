import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { theme } from "@/theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NAVIGATION } from "@/constants";
import { WorldClock, Alarm, Stopwatch, Timer } from "@/screens";
import { TabBarIcon } from "@/components";

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  console.log(scheme);
  console.log(colors);
  return (
    <NavigationContainer theme={theme[scheme]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintcolor: colors.activeTab,
          tabBarInactiveTintColor: colors.inactiveTab,
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} routeName={route.name}></TabBarIcon>
          ),
        })}
      >
        <Tab.Screen name={NAVIGATION.world_clock} component={WorldClock} />
        <Tab.Screen name={NAVIGATION.alarm} component={Alarm} />
        <Tab.Screen name={NAVIGATION.stop_watch} component={Stopwatch} />
        <Tab.Screen name={NAVIGATION.timer} component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
