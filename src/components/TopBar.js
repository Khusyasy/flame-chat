import { Navbar, Container, Nav, Button } from "react-bootstrap";

function TopBar({ user, SignInWithGoogle, SignOut }) {
  return (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={styles.navbar} className="shadow-lg">
    <Container>
      <Navbar.Brand href="/">FlameChat</Navbar.Brand>
      <Nav>
        {user ? (
          <Button variant="danger" onClick={SignOut}>Logout</Button>
        ) : (
          <Button variant="secondary" onClick={SignInWithGoogle}>Login</Button>
        )}
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
