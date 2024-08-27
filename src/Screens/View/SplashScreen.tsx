import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SplashScreenNavigationProp } from '../../../navigation';

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo/Group1.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 120,
    },
});

export default SplashScreen;
