/* eslint-disable prettier/prettier */
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '509861100744-16u8cpjak6n6hv5lhh80qv09mm9vl2r2.apps.googleusercontent.com',
            scopes: ['name', 'email'],
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const { idToken } = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredentials);
        return userInfo;
    } catch (error) {
        console.log('=> Google Sign In', error);
        return null;
    }
};
