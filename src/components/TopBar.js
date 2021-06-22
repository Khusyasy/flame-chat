import { useContext } from "react";
import { UserContext } from "../App";
import { SendContext } from '../App';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import BackToLists from './BackToLists';

function TopBar({ SignInWithGoogle, SignOut }) {
  const user = useContext(UserContext);
  const [send,] = useContext(SendContext);
  
  return (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={styles.navbar} className="shadow-lg">
    <Container>
      {
      send ?
        <>
        <BackToLists />
        <Navbar.Brand>{send}</Navbar.Brand>
        </>
      :
      <Navbar.Brand>FlameChat</Navbar.Brand>
      }
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
