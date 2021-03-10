import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6jFr0krfitbP18Ha8IdtHH5kPhf0cNjE",
    authDomain: "notificationapp-a7b85.firebaseapp.com",
    projectId: "notificationapp-a7b85",
    storageBucket: "notificationapp-a7b85.appspot.com",
    messagingSenderId: "897632666217",
    appId: "1:897632666217:web:1fbe348ceb3508398098f8"
  };

  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN => ", currentToken);
                  // Send the token to your server and update the UI if necessary
                  // ...
                } else {
                  // Show permission request UI
                  console.log('No registration token available. Request permission to generate one.');
                  // ...
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
              });
        }
    })
}