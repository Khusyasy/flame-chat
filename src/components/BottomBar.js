import { Navbar, Container, Button, Form } from "react-bootstrap";

function BottomBar({ user }) {
  return (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom" style={styles.navbar}className="shadow-lg">
    <Container fluid className="py-1">
      {user && <>
        <Form.Control type="text" placeholder="Enter Message..." className="w-75" />
        <Button variant="secondary" type="submit" className="w-25" onClick={()=>console.log("send")}>Send</Button>
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
