import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SplashScreenNavigationProp } from '../../../navigation';
import { styles } from '../Style/Splash';
import Routes from '../../Navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        setTimeout(async () => {
            const status = await AsyncStorage.getItem('isLoggeIn')
            if (status == "true") {
                navigation.navigate(Routes.Home);
            } else {
                navigation.navigate(Routes.Login);
            }
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo/Group1.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

export default Splash;
