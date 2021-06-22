import { useState } from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";

function BottomBar({ user, sendMessage }) {
  const [input, setInput] = useState("");

  function handleSend() {
    sendMessage(input);
    setInput("");
  }

  function handleInputEnter(e) {
    if(e.keyCode === 13){
      e.preventDefault();
      handleSend()
    }
  }

  return (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom" style={styles.navbar}className="shadow-lg">
    <Container className="py-1">
      {user && <>
        <Form.Control
          type="text"
          placeholder="Enter Message..."
          className="w-75"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyUp={handleInputEnter}
        />
        <Button
          variant="secondary"
          type="button"
          className="w-25"
          onClick={handleSend}
        >
        Send
        </Button>
      </>}
    </Container>
  </Navbar>
  );
}

const styles = {
  navbar: {
    height: "4rem",
  }
}

export default BottomBar;
