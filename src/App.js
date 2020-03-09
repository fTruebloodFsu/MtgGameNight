import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'reactstrap';

var PLAYERS = 0;
var LIFETOTAL = 0;

const diceStyle = {
  borderRadius: 5,
  borderColor: 'black',
  backgroundColor: 'lightgreen',
  color: 'black',
  padding: 10,
  margin: 10,
};

const lifeTracker = {
  borderRadius: 5,
  borderColor: 'black',
  backgroundColor: 'lightgreen',
  color: 'black',
  padding: 10,
  margin: 5,
};

const innerLifeTracker = {
  height: 20,
  borderRadius: 5,
  marginBottom: 15,
};

function onHoverEnter(ele){
  ele.target.style.background = 'grey';
  ele.target.style.color = 'white';
}

function onHoverLeave(ele){
  ele.target.style.background = 'lightgreen';
  ele.target.style.color = 'black';
}

function Start(target){
  ReactDOM.render(<NumPlayersPage />, document.getElementById('root'));
}

function goBackToHomePage(target){
  ReactDOM.render(<App />, document.getElementById('root'));
}

function lifeTotals(numPlayers){
  PLAYERS = numPlayers;
  ReactDOM.render(<LifeTotalPage />, document.getElementById('root'));
}

function startGame(life){
  LIFETOTAL = life;
  if(PLAYERS === 1) ReactDOM.render(<GameTime1Player />, document.getElementById('root'));
}

function GameTime1Player(){

  function incLife(){
    let currLife = parseInt(document.getElementById("P1Life").innerHTML);
    currLife = currLife + 1;
    document.getElementById("P1Life").innerHTML = currLife;
   }
   
   function decLife(){
     let currLife = parseInt(document.getElementById("P1Life").innerHTML);
     currLife = currLife - 1;
     document.getElementById("P1Life").innerHTML = currLife;
    }

  return (
    <div className="App">
      <header className="App-header">
      <img src="BlackLotusBG.jpg" className="App-logo" alt="Black Lotus" style={{borderRadius: 10, margin: 10}} />
        <Container style = {lifeTracker}>
          <Row>
            <Col xs = {1}></Col>
            <Col xs = {10} style = {innerLifeTracker} onClick={incLife}></Col>
            <Col xs = {1}></Col>
          </Row>
          <Row>
            <Col xs = {1}></Col>
            <Col  id="P1Life" xs = {10}>{LIFETOTAL}</Col>
            <Col xs = {1}></Col>
          </Row>
          <Row>
            <Col xs = {1}></Col>
            <Col xs = {10} style = {innerLifeTracker} onClick={decLife}></Col>
            <Col xs = {1}></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs = {12}>
                <Button color="danger" onClick={goBackToHomePage}>Start Over</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

function LifeTotalPage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src="BlackLotusBG.jpg" className="App-logo" alt="Black Lotus" style={{borderRadius: 10}} />
        <p>Select the starting life total.</p>
        <Container>
          <Row>
            <Col xs = {3}></Col>
            <Col xs = {6} style = {diceStyle}
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave}
                          onClick={() => startGame(20)}>20</Col>
          </Row>
          <Row>
            <Col xs = {3}></Col>
            <Col xs = {6} style = {diceStyle}
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave}
                          onClick={() => startGame(40)}>40</Col>
          </Row>
          <Col xs = {12}>
              <Button color="danger" onClick={goBackToHomePage}>Start Over</Button>
          </Col>
        </Container>
      </header>
    </div>
  );
}


function NumPlayersPage(){
  return (
    <div className="App">
      <header className="App-header">
      <img src="BlackLotusBG.jpg" className="App-logo" alt="Black Lotus" style={{borderRadius: 10}} />
        <p>Select the number of players.</p>
        <Container>
          <Row>
            <Col xs = {3}></Col>
            <Col xs = {3} style={diceStyle} 
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave} 
                          onClick={() => lifeTotals(1)}>1</Col>
            <Col xs = {3} style={diceStyle} 
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave} 
                          onClick={() => lifeTotals(2)}>2</Col>
          </Row>
          <Row>
            <Col xs = {3}></Col>
            <Col xs = {3} style={diceStyle} 
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave} 
                          onClick={() => lifeTotals(3)}>3</Col>
            <Col xs = {3} style={diceStyle} 
                          onMouseOver={onHoverEnter} 
                          onMouseLeave={onHoverLeave} 
                          onClick={() => lifeTotals(4)}>4</Col>
          </Row>
          <Row>
            <Col xs = {12}>
              <Button color="danger" onClick={goBackToHomePage}>Start Over</Button>
            </Col>
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
        <button type="submit" class="btn btn-primary" onClick={Start}>Start a game!</button>
      </header>
    </div>
  );
}





export default App;
