import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/View/SplashScreen';
import { SafeAreaView } from 'react-native';
// import LandingScreen from '../Screens/View/LandingScreen';
import OnBording from '../Screens/View/OnBording';
import Login from '../Screens/View/Login';
import Welcome from '../Screens/View/Welcome';
import Home from '../Screens/View/Home';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="OnBording" component={OnBording} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />          
        </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaView>

  );
};

export default MainStack;