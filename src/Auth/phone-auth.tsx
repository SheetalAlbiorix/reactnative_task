/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


function PhoneAuth() {

    const navigation = useNavigation();
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    function onAuthStateChanged(user) {
        if (user) {
            navigation.navigate('PhoneVerificationScreen');
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <View style={styles.view1}>
                <Pressable
                    style={styles.button}
                    onPress={() => signInWithPhoneNumber('+91 971-416-0383')}
                >
                    <Text style={styles.text}>Phone Number Sign In</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <>
            <TextInput style={styles.text1}
            value={code} onChangeText={text => setCode(text)} />
            <Pressable
                style={styles.button}
                onPress={() => confirmCode()}>
                <Text style={styles.text}>Confirm Code</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
    },
    text1: {
        color: '#000',
    },
});
export default PhoneAuth;
