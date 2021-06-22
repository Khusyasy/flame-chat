import { useContext } from "react";
import { SendContext } from '../App';
import { Button } from "react-bootstrap";

function BackToLists() {
  const [send, setSend] = useContext(SendContext);
  
  return send && (
    <Button variant="danger" onClick={()=>setSend("")}>&lt;</Button>
  )
}

export default BackToLists;
