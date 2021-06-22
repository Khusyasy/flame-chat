import { Alert } from "react-bootstrap";

function ChatAppBubble({ text }) {
  return (
    <div style={styles.main}>
      <Alert variant="warning" style={styles.bubble}>
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
    justifyContent: "center",
  },
  bubble: {
    margin: 0,
    padding: "0.2rem 0.4rem",
    wordBreak: "break-all",
    maxWidth: "100%",
  },
}

export default ChatAppBubble;
