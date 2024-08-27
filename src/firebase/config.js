/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAqy3pH2I6IA5a64VjQmCTQT19klxOPttw',
    authDomain: 'ubereats-f75ce.firebaseapp.com',
    databaseURL: 'https://console.firebase.google.com/project/ubereats-f75ce/firestore/databases/-default-/data/~2F',
    projectId: 'ubereats-f75ce',
    storageBucket: 'ubereats-f75ce.appspot.com',
    messagingSenderId: '12345-insert-yourse',
    appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
