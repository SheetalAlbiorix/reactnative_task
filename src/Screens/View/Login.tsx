import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, Dimensions, TouchableOpacity, FlatList, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import { _signInWithGoogle } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const countries = [
    { image: require('../../../src/assets/images/flags/GB.png'), code: 'GB', name: 'United Kingdom', dialCode: '+44' },
    
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigation = useNavigation();


    async function signInWithGoogle() {
        _signInWithGoogle().then(scopes => {
            console.log('user data=>', scopes);
            navigation.navigate('Welcome');
        });
    }

    const handleNextPress = () => {
        if (validateEmail() && validatePassword()) {
            navigation.navigate('Welcome');
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
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
            <Pressable style={styles.touch} onPress={() => signInWithGoogle()}>
                <Image
                    source={require('../../../src/assets/images/logo/google1.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.touch2}>Continue with Google</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    text: {
        alignItems: 'flex-start',
        fontSize: width * 0.070,
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        marginTop: height * 0.04,
    },
    textemail: {
        fontSize: 20,
        color: '#000',
        marginHorizontal: 0,
        width: 50,
        height: 40
    },
    textpass: {
        marginTop: 10,
        fontSize: 20,
        color: '#000',
        marginHorizontal: 0,
        width: 90,
        height: 40
    },
    inputpass: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'UberMoveText',
        fontSize: 24,
        color: '#000',
        marginLeft: 0,
        width: 380,
        height: 50
    },
    error: {
        marginHorizontal: 0,
        color: 'red',
    },
    button: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.05,
        borderRadius: 5,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'UberMoveTextMedium',
        fontSize: width * 0.05,
    },
    arrow: {
        color: '#fff',
    },
    arrow1: {
        color: '#000',
    },
    information: {
        color: 'gray',
        marginHorizontal: 7,
        marginTop: 15,
        fontSize: width * 0.04,
        fontFamily: 'UberMoveTextMedium',
        textAlign: 'center',
        zIndex: 1,
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        marginHorizontal: 20,
        zIndex: 1,
    },
    line1: {
        flex: 1,
        height: 1,
        backgroundColor: '#a4a4a4',
    },
    or: {
        width: 50,
        fontSize: 18,
        textAlign: 'center',
        color: '#888888',
        fontFamily: 'UberMoveTextMedium',
    },
    line2: {
        flex: 1,
        height: 1,
        backgroundColor: '#a4a4a4',
    },
    image: {
        height: 40,
        width: 40,
    },
    touch: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * 0.05,
        borderRadius: 5,
        zIndex: 1,
    },
    touch2: {
        color: '#000',
        fontFamily: 'UberMoveTextMedium',
        fontSize: width * 0.05,
    },
    phone: {
        color: '#000',
        width: '100%',
        height: 60,
        marginTop: 30,
        marginVertical: 130,
        zIndex: 1,
    },
    emailtextInput: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'UberMoveText',
        fontSize: 25,
        color: '#000000',
        marginLeft: 0,
        width: 380,
        height: 50
    },
    phoneInput: {
        fontFamily: 'UberMoveTextMedium',
        backgroundColor: '#f5f5f5',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        fontSize: 18,
    },
    modalContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        zIndex: 2,
    },
    modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 22,
        width: '100%',
        height: '70%',
        justifyContent: 'flex-start',
    },
    searchInput: {
        fontFamily: 'UberMoveTextMedium',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 12,
        height: 46,
        marginBottom: 10,
    },
    countryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    countryName: {
        fontFamily: 'UberMoveTextMedium',
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
    flag: {
        width: 30,
        height: 20,
    },
});

export default Login;

