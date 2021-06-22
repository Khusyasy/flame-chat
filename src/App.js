import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import ChatRoom from './components/ChatRoom';

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

  return (
    <div className="App">
      <TopBar
        user={user}
        SignInWithGoogle={SignInWithGoogle}
        SignOut={SignOut}
      />
      <ChatRoom user={user} />
      <BottomBar user={user} />
    </div>
  );
}

export default App;
