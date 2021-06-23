import { useState, useContext } from "react";
import { UserContext } from "../App";
import { SendContext } from '../App';
import { Navbar, Container, Button, Form } from "react-bootstrap";

function BottomBar({ handleSend }) {
  const [input, setInput] = useState("");
  const user = useContext(UserContext);
  const [send,] = useContext(SendContext);

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
  <Navbar bg="dark" variant="dark" fixed="bottom" style={styles.navbar}className="shadow-lg">
    <Container className="py-1 d-flex">
      {user && <>
        <Form.Control
          type="text"
          placeholder={ send ? "Message..." : "Email Address..." }
          className="w-100 flex-grow-1"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyUp={handleInputEnter}
        />
        <Button
          variant="secondary"
          type="button"
          onClick={buttonSend}
        >
        {
        send ?
          <svg xmlns="http://www.w3.org/2000/svg" style={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" style={styles.icon} viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
        </svg>
        }
        </Button>
      </>}
    </Container>
  </Navbar>
  );
}

const styles = {
  navbar: {
    height: "4rem",
    position: "absolute",
  },
  icon: {
    height: "1.5rem",
    width: "1.5rem",
  },
}

export default BottomBar;
