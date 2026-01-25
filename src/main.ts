import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp } from 'firebase/app';
import { App } from './app/app';

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

initializeApp(firebaseConfig);

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
