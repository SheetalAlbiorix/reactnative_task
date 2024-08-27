import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screens/View/Splash';
import { SafeAreaView } from 'react-native';
import OnBording from '../Screens/View/OnBording';
import Login from '../Screens/View/Login';
import Welcome from '../Screens/View/Welcome';
import Home from '../Screens/View/Home';
import Routes from './Routes';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Splash}>
          <Stack.Screen name={Routes.Splash} component={Splash} />
          <Stack.Screen name={Routes.OnBording} component={OnBording} />
          <Stack.Screen name={Routes.Login} component={Login} />
          <Stack.Screen name={Routes.Welcome} component={Welcome} />
          <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
};

export default MainStack;