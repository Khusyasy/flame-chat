import { useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

import { UserContext } from '../App';
import { FireStoreContext } from '../App';
import { SendContext } from '../App';

import BottomBar from './BottomBar';
import ChatRoom from './ChatRoom';
import ChatLists from './ChatLists';

function Chat() {
  const [send, setSend] = useContext(SendContext);

  const user = useContext(UserContext);
  const firestore = useContext(FireStoreContext);

  const messageRef = firestore.collection("messages");
  const query = messageRef.where("semail", "array-contains-any", [user?.email || ""]).limit(100);
  const messages = useCollectionData(query, {idField: "id"});
  let orderedMessages = messages[0]?.sort((a,b)=>b.time-a.time);

  const chatsRef = firestore.collection("messages");
  const chatQuery = chatsRef.where("semail", "array-contains-any", [user?.email || ""]).limit(100);
  const chats = useCollectionData(chatQuery, {idField: "id"});
  let groupedChats = chats[0];
  if(groupedChats){
    let chatSet = new Set();
    groupedChats = groupedChats.filter(e => {
      if(chatSet.has(e.email)){
        return false;
      }else if(e.email === user?.email){
        return false;
      }else{
        chatSet.add(e.email);
        return true;
      };
    });
  }

  async function sendMessage(val) {
    const { uid, email, displayName } = user;

    await messageRef.add({
      text: val,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      email,
      semail: [send, user.email],
    });
  }

  function handleSend(val) {
    if(send) {
      sendMessage(val);
    }else{
      setSend(val);
    }
  }

  return (
    <>
    {
    user ?
      send ?
        <ChatRoom messages={orderedMessages} />
      : <ChatLists chats={groupedChats} setSend={setSend} />
    : "LOADING"
    }
    <BottomBar handleSend={handleSend} />
    </>
  )
}

export default Chat;
