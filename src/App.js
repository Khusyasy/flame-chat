import { createContext } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import ChatRoom from './components/ChatRoom';

export const UserContext = createContext({});

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

  function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  function SignOut() {
    if(auth.currentUser){
      auth.signOut();
    }
  }

  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("time", "desc").limit(100);
  const messages = useCollectionData(query, {idField: "id"});

  async function sendMessage(val) {
    const { uid, displayName } = auth.currentUser;

    await messageRef.add({
      text: val,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
    });
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <TopBar
          SignInWithGoogle={SignInWithGoogle}
          SignOut={SignOut}
        />
        <ChatRoom messages={messages[0]} />
        <BottomBar sendMessage={sendMessage} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
