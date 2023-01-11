import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCP3nVhJUVuEPfq_J8POVxu2uHxtVe7fPE",
  authDomain: "dpm-6d7d4.firebaseapp.com",
  projectId: "dpm-6d7d4",
  storageBucket: "dpm-6d7d4.appspot.com",
  messagingSenderId: "1041019255873",
  appId: "1:1041019255873:web:c945463cc3dfce448b1ac0",
  measurementId: "G-DGDHY6FCY7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}