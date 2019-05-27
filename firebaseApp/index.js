// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBQVONfetZx8VSdZ6npVjZWsf2zEc1v9NQ',
  databaseURL: 'https://pomodoro-656da.firebaseio.com',
  authDomain: 'pomodoro-656da.firebaseapp.com',
  storageBucket: 'gs://pomodoro-656da.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
