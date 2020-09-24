// import * as firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyAuyC7Q8ZjOX9MyLAj039tCjPp1_o2PAgk",
//     authDomain: "wifimoney-22c2d.firebaseapp.com",
//     databaseURL: "https://wifimoney-22c2d.firebaseio.com",
//     projectId: "wifimoney-22c2d",
//     storageBucket: "wifimoney-22c2d.appspot.com",
//     messagingSenderId: "840583192651",
//     appId: "1:840583192651:web:64867f81e99455988c2dce",
//     measurementId: "G-DD2XWN6ZNF"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAuyC7Q8ZjOX9MyLAj039tCjPp1_o2PAgk",
    authDomain: "wifimoney-22c2d.firebaseapp.com",
    databaseURL: "https://wifimoney-22c2d.firebaseio.com",
    projectId: "wifimoney-22c2d",
    storageBucket: "wifimoney-22c2d.appspot.com",
    messagingSenderId: "840583192651",
    appId: "1:840583192651:web:64867f81e99455988c2dce",
    measurementId: "G-DD2XWN6ZNF"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;
