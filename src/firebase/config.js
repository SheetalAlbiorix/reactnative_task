/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9A94m8eSuaIRAYaXFueM1sBQkhhQLVig",
    authDomain: "react-native-task-2c2f4.firebaseapp.com",
    projectId: "react-native-task-2c2f4",
    storageBucket: "react-native-task-2c2f4.appspot.com",
    messagingSenderId: "284488662131",
    appId: "1:284488662131:web:574e5bae4b5dc2a97b7e06",
    measurementId: "G-JMG4GKP339"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
