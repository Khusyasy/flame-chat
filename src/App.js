import { useState, createContext } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import TopBar from './components/TopBar';
import Chat from './components/Chat';

export const UserContext = createContext({});
export const FireStoreContext = createContext({});
export const SendContext = createContext([]);

firebase.initializeApp({
  apiKey: "AIzaSyAY3zWrxmykgEeg7xgaktLQaPVnajtH-ao",
  authDomain: "flame-chat-1c46e.firebaseapp.com",
  projectId: "flame-chat-1c46e",
  storageBucket: "flame-chat-1c46e.appspot.com",
  messagingSenderId: "1075463695727",
  appId: "1:1075463695727:web:ab3369fc5a74f4c4380c9a",
  measurementId: "G-2XM651RWNQ"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const [send, setSend] = useState("");

  function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  function SignOut() {
    if(auth.currentUser){
      auth.signOut();
      setSend("");
    }
  }

  return (
    <UserContext.Provider value={user}>
    <FireStoreContext.Provider value={firestore}>
    <SendContext.Provider value={[send, setSend]}>
      <div className="App">
        <TopBar
          SignInWithGoogle={SignInWithGoogle}
          SignOut={SignOut}
        />
        <Chat />
      </div>
    </SendContext.Provider>
    </FireStoreContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
