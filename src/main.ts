import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyA71ebuJR4ejU1BWAOuqxDBsZjGJT2HNXk",
  authDomain: "devicemotion.firebaseapp.com",
  databaseURL: "https://devicemotion.firebaseio.com",
  storageBucket: "devicemotion.appspot.com",
};


bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(firebaseConfig)]
);
