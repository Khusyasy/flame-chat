import { Alert } from "react-bootstrap";

function ChatBubble({ text, sender, displayName, time }) {
  return (
    <div style={{...styles.main, ...(sender ? styles.sender : styles.receive)}}>
      <Alert variant={sender ? "primary" : "success"} style={styles.bubble}>
        { !sender && <div style={styles.name}>
          { displayName }
        </div>}
        { text }
        <div className="text-muted text-right small">
          { time  && (" " + new Date(time).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})) }
        </div>
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
    padding: "0.2rem 0.4rem",
    wordBreak: "break-all",
    maxWidth: "90%",
  },
  name: {
    margin: 0,
    marginBottom: "0.2em",
    padding: 0,
    fontWeight: "700",
  },
}

export default ChatBubble;
