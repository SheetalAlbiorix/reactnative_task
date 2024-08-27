/* eslint-disable prettier/prettier */
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Items } from '../../Utils/Constant';
import Routes from '../../Navigation/Routes';
import { styles } from '../Style/Welcome';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const ListItem = async () => {
            const status = await AsyncStorage.getItem('isLoggeIn')
            if (status != "true") {
                await AsyncStorage.setItem('ListView', JSON.stringify(Items));
                await AsyncStorage.setItem('isLoggeIn', "true");
            }
        }
        ListItem();
    }, []);

    const handleNextPress = () => {
        navigation.navigate(Routes.Home);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/done/Group42.png')} style={styles.image} />
                <Text style={styles.text}>All Set</Text>
            </View>
            <View>
                <Text style={styles.title}>
                    You'll be signed into your account in a moment. If nothing happens, click continue
                </Text>
            </View>
            <Pressable style={styles.press} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Continue</Text>
                <FontAwesomeIcon style={styles.arrow1} icon={faArrowRightLong} size={28} />
            </Pressable>
        </View>
    );
};

export default Welcome;
