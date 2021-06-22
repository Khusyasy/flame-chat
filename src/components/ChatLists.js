import { useContext } from "react";
import { UserContext } from "../App";
import { Container } from "react-bootstrap";
import ChatList from "./ChatList";
import ChatAppBubble from "./ChatAppBubble";

function ChatLists({ chats, setSend }) {
  const user = useContext(UserContext);
  
  return (
  <Container fluid className="bg-secondary" style={styles.main}>
    {
    user ?
      chats ?
        chats.map((chat)=>(
          <ChatList
            key={chat.id}
            displayName={chat.displayName}
            email={chat.email}
            setSend={setSend}
          />
        ))
      : <ChatAppBubble text="Loading chats..." />
    : <ChatAppBubble text="Login to use chat" />
    }
  </Container>
  )
}

const styles = {
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: "4rem",
    marginBottom: "4rem",
    padding: "1rem",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflowY: "scroll",
  }
}

export default ChatLists;
