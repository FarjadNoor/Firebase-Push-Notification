importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyD6jFr0krfitbP18Ha8IdtHH5kPhf0cNjE",
    authDomain: "notificationapp-a7b85.firebaseapp.com",
    projectId: "notificationapp-a7b85",
    storageBucket: "notificationapp-a7b85.appspot.com",
    messagingSenderId: "897632666217",
    appId: "1:897632666217:web:1fbe348ceb3508398098f8"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.messaging();
