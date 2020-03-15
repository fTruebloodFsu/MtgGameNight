import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'reactstrap';

var PLAYERS = 0;
var LIFETOTAL = 0;

//Styles set up
const diceStyle = {
  borderRadius: 5,
  borderColor: 'black',
  backgroundColor: 'lightgreen',
  color: 'black',
  padding: 10,
  margin: 10,
};

const utilityBar = {
  height: '10vh',
  width: '100vw',
  backgroundColor: 'black',
  borderRadius: 10,
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
};

const diceDisplay = {
  height: '10vh',
  width: '5vw',
  backgroundColor: 'black',
  color: 'white',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
}

//various functions
function d6DieRoller(){
  const randomNum = Math.floor(Math.random() * 6) + 1;
  document.getElementById('d6Display').innerHTML = randomNum;
  return randomNum;
}

function d8DieRoller(){
  const randomNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('d8Display').innerHTML = randomNum;
  return randomNum;
}

function d10DieRoller(){
  const randomNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById('d10Display').innerHTML = randomNum;
  return randomNum;
}

function d20DieRoller(){
  const randomNum = Math.floor(Math.random() * 20) + 1;
  document.getElementById('d20Display').innerHTML = randomNum;
  return randomNum;
}

function UtilityBar(target){
  return(
    <div className="utilityBar" id="utilityBar" style={utilityBar}><Button color="danger" onClick={goBackToHomePage} style={{marginRight: 15}}>Start Over</Button>
                                                     <Button color="info" onClick={d6DieRoller}>D6 </Button>
                                                     <div ClassName="d6Container" id="d6Display" style={diceDisplay}>0</div>
                                                     <Button color="info" onClick={d8DieRoller}>D8 </Button>
                                                     <div ClassName="d8Container" id="d8Display" style={diceDisplay}>0</div>
                                                     <Button color="info" onClick={d10DieRoller}>D10</Button>
                                                     <div ClassName="d10Container" id="d10Display" style={diceDisplay}>0</div>
                                                     <Button color="info" onClick={d20DieRoller}>D20</Button>
                                                     <div ClassName="d20Container" id="d20Display" style={diceDisplay}>0</div>
                                                     </div>
  );
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
  if(PLAYERS === 2) ReactDOM.render(<GameTime2Player />, document.getElementById('root'));
  if(PLAYERS === 3) ReactDOM.render(<GameTime3Player />, document.getElementById('root'));
}

function GameTime3Player(){

  const styleFor3PlayerContainer = {
    height: '100vh',
    width: '100vw',
    borderRadius: 10,
    borderColor: 'black',
    color: 'black',
    backgroundColor: 'black',
    display: "contents",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }

  const styleForPlayer1 = {
    height: '17vh',
    width: '100vw',
    borderRadius: 10,
    borderColor: 'black',
    color: 'black',
    backgroundColor: 'lightgreen',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }

  const lifeTotalStyle1 = {
    height: '5vh',
    width: '100vw',
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  };

  const bottom2Players = {
    height: '50vh',
    width: '100vw',
    borderRadius: 10,
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }

  const bottomPlayerContainer = {
    height: '50vh',
    width: '50vw',
    borderRadius: 10,
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }

  const styleForPlayer2 = {
    height: '50vh',
    width: '20vw',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'mediumvioletred',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }

  const lifeTotalStyle2 = {
    height: '50vh',
    width: '10vw',
    borderRadius: 10,
    backgroundColor: 'mediumvioletred',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  };

  const styleForPlayer3 = {
    height: '50vh',
    width: '20vw',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }

  const lifeTotalStyle3 = {
    height: '50vh',
    width: '10vw',
    borderRadius: 10,
    backgroundColor: 'yellow',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  };

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave1(ele){
    ele.target.style.background = 'lightgreen';
  }

  function onHoverLeave2(ele){
    ele.target.style.background = 'mediumvioletred';
  }

  function onHoverLeave3(ele){
    ele.target.style.background = 'yellow';
  }

  function incLife1(){
    let currLife = parseInt(document.getElementById("P1Life").innerHTML);
    currLife = currLife + 1;
    document.getElementById("P1Life").innerHTML = currLife;
   }
   
  function decLife1(){
     let currLife = parseInt(document.getElementById("P1Life").innerHTML);
     currLife = currLife - 1;
     document.getElementById("P1Life").innerHTML = currLife;
    }

    function incLife2(){
      let currLife = parseInt(document.getElementById("P2Life").innerHTML);
      currLife = currLife + 1;
      document.getElementById("P2Life").innerHTML = currLife;
     }
     
  function decLife2(){
       let currLife = parseInt(document.getElementById("P2Life").innerHTML);
       currLife = currLife - 1;
       document.getElementById("P2Life").innerHTML = currLife;
      }

  function incLife3(){
      let currLife = parseInt(document.getElementById("P3Life").innerHTML);
      currLife = currLife + 1;
      document.getElementById("P3Life").innerHTML = currLife;
  }
       
  function decLife3(){
      let currLife = parseInt(document.getElementById("P3Life").innerHTML);
      currLife = currLife - 1;
      document.getElementById("P3Life").innerHTML = currLife;
  }

  return (
    <div className="3PlayerContainer" id="3PlayerContainer" style={styleFor3PlayerContainer}>
      <UtilityBar />
      <div className="player1Top" id="player1Top" style={styleForPlayer1} onMouseEnter={onHoverEnter}
                                                                          onMouseLeave={onHoverLeave1}
                                                                          onClick={incLife1}></div>
      <div className="P1Life" id="P1Life" style={lifeTotalStyle1}>{LIFETOTAL}</div>
      <div className="player1bottom" id="player1bottom" style={styleForPlayer1}onMouseEnter={onHoverEnter}
                                                                          onMouseLeave={onHoverLeave1}
                                                                          onClick={decLife1}></div>
      <div className="bottom2players" id="bottom2players" style={bottom2Players}>
        <div className="player2container" id="player2container" style={bottomPlayerContainer}>
          <div className="player2top" id="player2top" style={styleForPlayer2} onMouseEnter={onHoverEnter}
                                                                              onMouseLeave={onHoverLeave2}
                                                                              onClick={decLife2}></div>
          <div className="P2Life" id="P2Life" style={lifeTotalStyle2}>{LIFETOTAL}</div>
          <div className="player2bottom" id="player2bottom" style={styleForPlayer2} onMouseEnter={onHoverEnter}
                                                                                    onMouseLeave={onHoverLeave2}
                                                                                    onClick={incLife2}></div>
        </div>
        <div className="player3container" id="plaer3container" style={bottomPlayerContainer}>
          <div className="player3top" id="player3top" style={styleForPlayer3} onMouseEnter={onHoverEnter}
                                                                              onMouseLeave={onHoverLeave3}
                                                                              onClick={incLife3}></div>
          <div className="P3Life" id="P3Life" style={lifeTotalStyle3}>{LIFETOTAL}</div>
          <div className="player3bottom" id="player3bottom" style={styleForPlayer3} onMouseEnter={onHoverEnter}
                                                                                    onMouseLeave={onHoverLeave3}
                                                                                    onClick={decLife3}></div>
        </div>
      </div>
    </div>
  );

}

function GameTime2Player(){

  const styleFor2PlayerContainer = {
    height: '100vh',
    width: '100vw',
    borderRadius: 10,
    borderColor: 'black',
    color: 'black',
    display: "contents",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }

  const playerStyle1 = {
    height: '20vh',
    width: '100vw',
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'lightgreen',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  };

  const lifeTotalStyle1 = {
    height: '5vh',
    width: '100vw',
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  };

  const playerStyle2 = {
    height: '20vh',
    width: '100vw',
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'mediumvioletred',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  };

  const lifeTotalStyle2 = {
    height: '5vh',
    width: '100vw',
    borderRadius: 10,
    backgroundColor: 'mediumvioletred',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  };

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave1(ele){
    ele.target.style.background = 'lightgreen';
  }

  function onHoverLeave2(ele){
    ele.target.style.background = 'mediumvioletred';
  }

  function incLife1(){
    let currLife = parseInt(document.getElementById("P1Life").innerHTML);
    currLife = currLife + 1;
    document.getElementById("P1Life").innerHTML = currLife;
   }
   
  function decLife1(){
     let currLife = parseInt(document.getElementById("P1Life").innerHTML);
     currLife = currLife - 1;
     document.getElementById("P1Life").innerHTML = currLife;
    }

  function incLife2(){
      let currLife = parseInt(document.getElementById("P2Life").innerHTML);
      currLife = currLife + 1;
      document.getElementById("P2Life").innerHTML = currLife;
     }
     
  function decLife2(){
       let currLife = parseInt(document.getElementById("P2Life").innerHTML);
       currLife = currLife - 1;
       document.getElementById("P2Life").innerHTML = currLife;
      }

  return (
    <div className="2PlayerContainer" id="2PlayerContainer" style={styleFor2PlayerContainer}>
      <UtilityBar />
      <div className="Player1top" id="Player1top" style={playerStyle1} onMouseOver={onHoverEnter}
                                                                       onMouseLeave={onHoverLeave1}
                                                                       onClick={incLife1}></div>
      <div ClassName="P1Life" id="P1Life" style={lifeTotalStyle1}>{LIFETOTAL}</div>
      <div className="Player1bottom" id="Player1bottom" style={playerStyle1} onMouseOver={onHoverEnter}
                                                                       onMouseLeave={onHoverLeave1}
                                                                       onClick={decLife1}></div>

      <div className="Player2top" id="Player2top" style={playerStyle2} onMouseOver={onHoverEnter}
                                                                       onMouseLeave={onHoverLeave2}
                                                                       onClick={incLife2}></div>
      <div ClassName="P2Life" id="P2Life" style={lifeTotalStyle2}>{LIFETOTAL}</div>
      <div className="Player2bottom" id="Player2bottom" style={playerStyle2} onMouseOver={onHoverEnter}
                                                                       onMouseLeave={onHoverLeave2}
                                                                       onClick={decLife2}></div>                
    </div>
  );

}
/*Single player life tracker set up*/
function GameTime1Player(){

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave(ele){
    ele.target.style.background = 'lightgreen';
  }

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

    const styleForSinglePlayerContainer = {
      height: '100vh',
      width: '100vw',
      borderRadius: 10,
      borderColor: 'black',
      color: 'black',
      display: "contents",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40
    }

    const innerLifeContainer = {
      height: '40vh',
      width: '100vw',
      backgroundColor: 'lightgreen',
      borderRadius: 10,
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    }

    const lifeTotalStyle = {
      height: '10vh',
      width: '100vw',
      borderRadius: 10,
      backgroundColor: 'lightgreen',
      color: 'black',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40
    }

  return (
    <div className="singlePlayercontainer" style={styleForSinglePlayerContainer}>
      <div className="UtilityBar" id="UtilityBar"></div>
      <UtilityBar />
      <div ClassName="topHalfSinglePlayer" style={innerLifeContainer} onClick={incLife}
                                                                      onMouseOver={onHoverEnter}
                                                                      onMouseLeave={onHoverLeave}></div>
      <div className="lifeTotalDisplay" id="P1Life" style={lifeTotalStyle}>{LIFETOTAL}</div>
      <div ClassName="bottomHalfSinglePlayer" style={innerLifeContainer} onClick={decLife}
                                                                         onMouseOver={onHoverEnter}
                                                                         onMouseLeave={onHoverLeave}></div>
    </div>
  );
}

function LifeTotalPage(){

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave(ele){
    ele.target.style.background = 'lightgreen';
  }

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

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave(ele){
    ele.target.style.background = 'lightgreen';
  }
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
