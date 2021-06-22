import { useState } from "react";
import { Container } from "react-bootstrap";
import ChatBubble from "./ChatBubble";

function ChatRoom({ user }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "hello", sender: true },
    { id: 2, text: "HIASDASD", sender: false },
    { id: 4, text: "hello", sender: true },
    { id: 3, text: "jkjk lmao tes sdjfk l hjd ksdlhfjkl jkjk lmao tes sdjfk l hjd ksdlhfjkl", sender: true },
    { id: 7, text: "hello", sender: true },
    { id: 5, text: "HIASDASD", sender: false },
    { id: 8, text: "HIASDASD", sender: false },
    { id: 6, text: "jkjk lmao tes sdjfk l hjd ksdlhfjkl jkjk lmao tes sdjfk l hjd ksdlhfjkl", sender: true },
    { id: 9, text: "jkjk lmao tes sdjfk l hjd ksdlhfjkl jkjk lmao tes sdjfk l hjd ksdlhfjkl", sender: true },
    { id: 10, text: "HIASDASD", sender: false },
    { id: 11, text: "HIASDASD", sender: false },
    { id: 12, text: "jkjk lmao tes sdjfk l hjd ksdlhfjkl jkjk lmao tes sdjfk l hjd ksdlhfjkl", sender: true },
    { id: 13, text: "jkjk lmao tes sdjfk l hjd ksdlhfjkl jkjk lmao tes sdjfk l hjd ksdlhfjkl", sender: true },
  ]);

  return (
  <Container fluid className="bg-secondary" style={styles.main}>
    {user ? messages.map((m)=>(
      <ChatBubble key={m.id} text={m.text} sender={m.sender} />
    )) : <h1 className="h-100 text-light">Login to use chat</h1>}
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
