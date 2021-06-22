import { Navbar, Container, Nav, Button } from "react-bootstrap";

function TopBar() {
  return (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={styles.navbar}>
    <Container>
      <Navbar.Brand href="/">FlameChat</Navbar.Brand>
      <Nav>
        <Button variant="secondary" onClick={()=>console.log("login")}>Login</Button>
      </Nav>
    </Container>
  </Navbar>
  )
}

const styles = {
  navbar: {
    height: "4rem",
  }
}

export default TopBar;
