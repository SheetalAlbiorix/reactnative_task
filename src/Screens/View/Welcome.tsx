/* eslint-disable prettier/prettier */
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Items } from '../../Utils/api';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const ListItem = async () => {
            if (AsyncStorage.getItem('ListView') == null) {
                await AsyncStorage.setItem('ListView', JSON.stringify(Items));
            }
        }
        ListItem();
    }, []);

    const handleNextPress = () => {
        navigation.navigate('HomeScreen');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/images/done/Group42.png')} style={styles.image} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 80,
    },
    image: {
        width: 72,
        height: 72,
    },
    text: {
        paddingTop: 10,
        fontSize: 23,
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        paddingLeft: 10,
    },
    title: {
        color: '#888888',
        marginTop: 30,
        fontFamily: 'UberMoveTextMedium',
    },
    press: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 28,
        paddingHorizontal: 12,
        paddingVertical: 14,
        alignSelf: 'flex-start',
        marginTop: 40,
    },
    arrow1: {
        color: '#000',
    },
    buttonText: {
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        fontSize: 25,
        marginRight: 10,
    },
});

export default Welcome;
