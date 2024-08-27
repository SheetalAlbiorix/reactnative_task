/* eslint-disable prettier/prettier */
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    SplashScreen: undefined;
    LandingScreen: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;