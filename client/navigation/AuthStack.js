import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
const AuthStack = createStackNavigator(
    {
      SignIn: SignInScreen,
      
      
    },
    config
  );
  
  export default AuthStack;