import PropTypes from "prop-types";
import React from "react";

import { Image } from "react-native";
import { worldClockIcon, alarmIcon, stopWatchIcon, timerIcon } from "@/assets";
import { NAVIGATION } from "@/constants";

const tabIcon = {
  [NAVIGATION.world_clock]: worldClockIcon,
  [NAVIGATION.alarm]: alarmIcon,
  [NAVIGATION.stop_watch]: stopWatchIcon,
  [NAVIGATION.timer]: timerIcon,
};

const TabBarIcon = ({ color, routeName, focused }) => {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color, width: 30, height: 30 }}
      focused={focused}
    />
  );
};

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default TabBarIcon;
