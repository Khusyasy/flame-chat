import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default App;
