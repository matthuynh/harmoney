import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateRoomScreen from '../screens/CreateRoomScreen';
import RequestConfirmScreen from '../screens/RequestConfirmScreen';
import RoomConfirmedScreen from '../screens/RoomConfirmedScreen';
import DoneScreen from '../screens/DoneScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {  },
});

const CreateRoomStack = createStackNavigator(
  {
    CreateRoom: CreateRoomScreen,
    RoomConfirmed: RoomConfirmedScreen
  },
  config
);

CreateRoomStack.path='';


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CreateRoom: CreateRoomScreen,
    RequestConfirm: RequestConfirmScreen,
    RoomConfirmed: RoomConfirmedScreen,
    Done: DoneScreen

  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#5cf',
  },
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-card' : 'md-link'} />
  ),
  tabBarOptions: {
    activeTintColor: '#5cf',
  },
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  tabBarOptions: {
    activeTintColor: '#5cf',
  },
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
