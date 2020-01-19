import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegisterScreen'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthScreen,
    Reg: RegisterScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Auth',

  }
  
  )

);
