import { Alert } from "react-bootstrap";

function ChatBubble({ text, sender }) {
  return (
    <div style={{...styles.main, ...(sender ? styles.sender : styles.receive)}}>
      <Alert variant={sender ? "primary" : "success"} style={styles.bubble}>
        { text }
      </Alert>
    </div>
  );
}

const styles = {
  main: {
    marginTop: "1rem",
    marginBottom: 0,
    width: "100%",
    display: "flex",
  },
  sender: {
    flexDirection: "row-reverse",
  },
  receive: {
    flexDirection: "row",
  },
  bubble: {
    margin: 0,
  }
}

export default ChatBubble;
