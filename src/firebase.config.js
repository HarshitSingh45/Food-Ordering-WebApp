import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBvncEiIdoNr4h8FIdrtFwpb13DkmgB-D4",
    authDomain: "restaurant-ca666.firebaseapp.com",
    databaseURL: "https://restaurant-ca666-default-rtdb.firebaseio.com",
    projectId: "restaurant-ca666",
    storageBucket: "restaurant-ca666.appspot.com",
    messagingSenderId: "822039829707",
    appId: "1:822039829707:web:208407cf61709adab58f4e"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore  = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage}