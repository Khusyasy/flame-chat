import { useContext } from "react";
import { SendContext } from '../App';
import { Button } from "react-bootstrap";

function BackToLists() {
  const [send, setSend] = useContext(SendContext);
  
  return send && (
    <Button variant="dark" onClick={()=>setSend("")}>
      <svg xmlns="http://www.w3.org/2000/svg" style={styles.icon} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </Button>
  )
}

const styles = {
  icon: {
    height: "1.5rem",
    width: "1.5rem",
  }
}

export default BackToLists;
