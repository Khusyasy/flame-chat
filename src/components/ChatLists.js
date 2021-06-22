import { Container } from "react-bootstrap";
import ChatList from "./ChatList";

function ChatLists({ chats }) {

  return (
  <Container fluid className="bg-secondary" style={styles.main}>
    {
    chats ?
      chats.map((chat)=>(
        <ChatList
          key={chat.id}
          displayName={chat.displayName}
          email={chat.email}
        />
      ))
    : "Loading messages..."
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
