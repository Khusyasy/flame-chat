import { useState } from "react";
import { Container } from "react-bootstrap";

function ChatRoom() {
  const [messages, setMessages] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

  return (
  <Container fluid className="bg-secondary" style={styles.main}>
    {messages.map((e)=>(
      <p>{e}</p>
    ))}
  </Container>
  )
}

const styles = {
  main: {
    height: "calc(100vh - 8rem)",
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
