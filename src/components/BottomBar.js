import { useState, useContext } from "react";
import { UserContext } from "../App";
import { Navbar, Container, Button, Form } from "react-bootstrap";

function BottomBar({ handleSend }) {
  const [input, setInput] = useState("");
  const user = useContext(UserContext);

  function buttonSend() {
    handleSend(input);
    setInput("");
  }

  function handleInputEnter(e) {
    if(e.keyCode === 13){
      e.preventDefault();
      buttonSend()
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
          onClick={buttonSend}
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
