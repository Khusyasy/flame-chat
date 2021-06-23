import { Button } from "react-bootstrap";

function ChatList({ email, setSend }) {
  return (
    <Button style={styles.main} variant="dark" onClick={()=>setSend(email)}>
      <h3 className="text-light text-truncate">{ email }</h3>
    </Button>
  );
}

const styles = {
  main: {
    margin: 0,
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
  },
}

export default ChatList;
