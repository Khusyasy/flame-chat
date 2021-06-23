import { useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

import { UserContext } from '../App';
import { FireStoreContext } from '../App';
import { SendContext } from '../App';

import BottomBar from './BottomBar';
import ChatRoom from './ChatRoom';
import ChatLists from './ChatLists';

function sortTimeNewest(arr) {
  return arr?.sort((a,b)=>{
    if(!b.time) return 1;
    if(!a.time) return -1;
    return b.time-a.time;
  });
}

function Chat() {
  const [send, setSend] = useContext(SendContext);

  const user = useContext(UserContext);
  const firestore = useContext(FireStoreContext);

  const messageRef = firestore.collection("messages");
  const query = messageRef.where("semail", "in", [[user?.email || "", send].sort()]).limit(100);
  const messages = useCollectionData(query, {idField: "id"});
  let orderedMessages = sortTimeNewest(messages[0]);

  const chatsRef = firestore.collection("messages");
  const chatQuery = chatsRef.where("semail", "array-contains-any", [user?.email || ""]).limit(100);
  const chats = useCollectionData(chatQuery, {idField: "id"});

  function getSenderEmail(semail) {
    return semail.filter((e,i,a)=>i!==a.indexOf(user.email))[0];
  }

  let groupedChats = chats[0];
  groupedChats = sortTimeNewest(groupedChats);
  if(groupedChats){
    let chatSet = new Set();
    groupedChats = groupedChats.filter(e => {
      if(e.email === user?.email){
        let sender = getSenderEmail(e.semail);
        if(!chatSet.has(sender)){
          chatSet.add(sender);
          return true;
        }
        return false;
      }
      if(!chatSet.has(e.email)){
        chatSet.add(e.email);
        return true;
      };
      return false;
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
      semail: [send, user.email].sort(),
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
    send ?
      <ChatRoom messages={orderedMessages} />
    : <ChatLists chats={groupedChats} setSend={setSend} />
    }
    <BottomBar handleSend={handleSend} />
    </>
  )
}

export default Chat;
