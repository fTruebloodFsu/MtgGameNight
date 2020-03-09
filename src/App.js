import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'reactstrap';

const diceStyle = {
  borderRadius: 5,
  borderColor: 'black',
  backgroundColor: 'lightgreen',
  color: 'black',
  padding: 5,
  margin: 5,
};

function NumPlayers(target){
  ReactDOM.render(<NumPlayersPage />, document.getElementById('root'));
}

function goBackToHomePage(target){
  ReactDOM.render(<App />, document.getElementById('root'));
}

function NumPlayersPage(){
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col xs = {3} style={diceStyle}>1</Col>
            <Col xs = {3} style={diceStyle}>2</Col>
          </Row>
          <Row>
            <Col xs = {3} style={diceStyle}>3</Col>
            <Col xs = {3} style={diceStyle}>4</Col>
          </Row>
          <Row>
          <Col xs = {2}></Col>
            <Col xs = {2}>
              <Button color="danger" onClick={goBackToHomePage}> Back To Home </Button>
            </Col>
            <Col xs = {2}></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="BlackLotusBG.jpg" className="App-logo" alt="Black Lotus" style={{borderRadius: 10}} />
        <p>Welcome to MTG Game Night</p>
        <button type="submit" class="btn btn-primary" onClick={NumPlayers}>Start a game!</button>
      </header>
    </div>
  );
}





export default App;
