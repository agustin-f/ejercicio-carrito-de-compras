// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBI4Ung1Wh4ppgA6IqpVYrnIetNvks5M6E',
  authDomain: 'codesign-f526f.firebaseapp.com',
  databaseURL: 'https://codesign-f526f-default-rtdb.firebaseio.com',
  projectId: 'codesign-f526f',
  storageBucket: 'codesign-f526f.firebasestorage.app',
  messagingSenderId: '477747341782',
  appId: '1:477747341782:web:1942ef19fc12b736859c77',
  measurementId: 'G-Q1FNGR1QMC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
