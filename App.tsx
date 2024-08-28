/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  AppState,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainStack from './src/Navigation/MainStack';
import PushNotification from 'react-native-push-notification';


// PushNotification.createChannel(
//   {
//     channelId: "pushNotification", 
//     channelName: "Notification", 
//     channelDescription: "A channel to categorize notifications", 
//     soundName: "default", 
//     importance: 4,
//   },
//   (created) => console.log(`CreateChannel returned '${created}'`)
// );

// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('Notification:', notification);

//   },
//   popInitialNotification: true,
//   requestPermissions: Platform.OS === 'android',
// });


const App = () => {
  // useEffect(() => {

  //   const handleAppStateChange = (nextAppState: any) => {
  //     console.log('nextAppState', nextAppState)
  //     if (nextAppState === 'background' || nextAppState === 'inactive') {
  //       console.log('nextAppState', nextAppState)
  //       scheduleNotification();
  //     }
  //   };

  //   // Function to schedule the notification
  //   const scheduleNotification = () => {
  //     PushNotification.localNotificationSchedule({
  //       title: 'Reminder',
  //       message: 'This is a reminder notification.',
  //       date: new Date(Date.now() + 1 * 60 * 1000), // 10 minutes from now
  //       allowWhileIdle: true, // Allows notification to be sent while the device is idle
  //     });
  //   };

  //   // Add listener for app state changes
  //   AppState.addEventListener('change', handleAppStateChange);


  // }, []);


  return (
    <MainStack>

    </MainStack>
  );


}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
