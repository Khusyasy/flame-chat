import { Container } from "react-bootstrap";
import ChatBubble from "./ChatBubble";

function ChatRoom({ user, messages }) {
  return (
  <Container fluid className="bg-secondary" style={styles.main}>
    {user ? messages ? messages.map((msg)=>(
      <ChatBubble
        key={msg.id}
        text={msg.text}
        sender={msg.uid === user.uid}
        displayName={msg.displayName}
        time={msg.time?.toDate()}
      />
    )) : <p className="text-light text-center">Loading messages...</p> : <h1 className="h-100 text-light">Login to use chat</h1>}
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
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    overflowY: "scroll",
  }
}

export default ChatRoom;
