import {initializeApp} from 'firebase/app';
// import 'firebase/auth';
const config = {
  apiKey: "AIzaSyCjc0YHoYorYS2TBUUiyQDW90IvgW6xZCY",
  authDomain: "redwire-ece75.firebaseapp.com",
  projectId: "redwire-ece75",
  storageBucket: "redwire-ece75.appspot.com",
  messagingSenderId: "1035343697105",
  appId: "1:1035343697105:web:6a97ca2c119726513ee1f0",
  measurementId: "G-7KPSP86TNT"
};

// Initialize Firebase
const app = initializeApp(config);


export {app};
