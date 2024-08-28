import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, Dimensions, TouchableOpacity, FlatList, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import { _signInWithGoogle } from '../../config';
import Routes from '../../Navigation/Routes';
import { styles } from '../Style/Login';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { width } = Dimensions.get('window');

const Login = () => {
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('password123');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigation = useNavigation();

    useEffect(
        () =>
            GoogleSignin.configure({
                webClientId: '284488662131-tenejqlcidhcnll0h8kp92lo7k3el0i2.apps.googleusercontent.com',
                iosClientId:
                    "284488662131-i03goqep4lcr0cnikah5rro2tih9cqkt.apps.googleusercontent.com",
                scopes: ["profile", "email"],
                offlineAccess: false,
            }),
        []
    );

    const continueGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userDetails = await GoogleSignin.signIn();
            const { idToken } = await GoogleSignin.getTokens();

            if (userDetails && idToken) {
                console.log("id token:", idToken, userDetails);
                navigation.navigate(Routes.Welcome);
            }
        } catch (error) {
            console.log("some other error happened", error);
        }
    };

    const handleNextPress = () => {
        if (validateEmail() && validatePassword()) {
            navigation.navigate(Routes.Welcome);
        }
    };

    const validateEmail = () => {
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (!emailRegex.test(email)) {
        //     setEmailError('Invalid email address');
        //     return false;
        // }
        if ("admin" != email) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = () => {
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!passwordRegex.test(password)) {
        //     setPasswordError('Password enter atleast 8 characters');
        //     return false;
        // }
        if ("password123" != password) {
            setPasswordError('Password enter atleast 8 characters');
            return false;
        }
        setPasswordError('');
        return true;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enter your Email and Password
            </Text>
            <View style={styles.phone}>
                <Text style={styles.textemail}>Email:</Text>
                <TextInput style={styles.emailtextInput}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Enter your email"
                    placeholderTextColor="#e9e9e9"
                />
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                <Text style={styles.textpass}>Password:</Text>
                <TextInput style={styles.inputpass}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Enter your password"
                    placeholderTextColor="#e9e9e9"
                    secureTextEntry={true}
                />
                {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
            </View>
            <Pressable style={styles.button} onPress={handleNextPress}>
                <FontAwesomeIcon style={styles.arrow1} icon={faArrowRightLong} size={width * 0.07} />
                <Text style={styles.buttonText}>Next</Text>
                <FontAwesomeIcon style={styles.arrow} icon={faArrowRightLong} size={width * 0.07} />
            </Pressable>
            <Text style={styles.information}>
                By proceeding, you consent to get calls, Whatsapp or SMS messages,
                including by automated means, from Uber and its affiliates to the number provided.
            </Text>
            <View style={styles.mainView}>
                <View style={styles.line1} />
                <View>
                    <Text style={styles.or}>or</Text>
                </View>
                <View style={styles.line2} />
            </View>
            <Pressable style={styles.touch} onPress={() => continueGoogle()}>
                <Image
                    source={require('../../assets/images/logo/google1.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.touch2}>Continue with Google</Text>
            </Pressable>
        </View>
    );
};

export default Login;

