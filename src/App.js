import React, { useState } from 'react';
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
  fontSize: 15,
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

function UtilityBar(target){
  const [d6, setValueD6] = useState(0);
  const [d8, setValueD8] = useState(0);
  const [d10, setValueD10] = useState(0);
  const [d20, setValueD20] = useState(0);
  return(
    <div className="utilityBar" id="utilityBar" style={utilityBar}><Button color="danger" onClick={goBackToHomePage} style={{marginRight: 15}}>Home</Button>
                                                     <Button color="info" onClick={()=>setValueD6(Math.floor(Math.random() * 6) + 1)}>D6 </Button>
                                                     <div ClassName="d6Container" id="d6Display" style={diceDisplay}>{d6}</div>
                                                     <Button color="info" onClick={()=>setValueD8(Math.floor(Math.random() * 8) + 1)}>D8 </Button>
                                                     <div ClassName="d8Container" id="d8Display" style={diceDisplay}>{d8}</div>
                                                     <Button color="info" onClick={()=>setValueD10(Math.floor(Math.random() * 10) + 1)}>D10</Button>
                                                     <div ClassName="d10Container" id="d10Display" style={diceDisplay}>{d10}</div>
                                                     <Button color="info" onClick={()=>setValueD20(Math.floor(Math.random() * 20) + 1)}>D20</Button>
                                                     <div ClassName="d20Container" id="d20Display" style={diceDisplay}>{d20}</div>
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
  if(PLAYERS === 4) ReactDOM.render(<GameTime4Player />, document.getElementById('root'));
}

function GameTime4Player(){

  const styleFor4PlayerContainer = {
    height: '100vh',
    width: '100vw',
    borderColor: 'black',
    color: 'black',
    display: "contents",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }

  const styleFor2PlayersContainer ={
    height: '45vh',
    width: '100vw',
    borderColor: 'black',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }

  const styleForPlayerContainer = {
    height: '45vh',
    width: '50vw',
    borderColor: 'black',
    color: 'black',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40 
  }

  const styleForP1 ={
    height: '45vh',
    width: '20vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'lightgreen',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP1Life ={
    height: '45vh',
    width: '10vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'lightgreen',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP2 ={
    height: '45vh',
    width: '20vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'mediumvioletred',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP2Life ={
    height: '45vh',
    width: '10vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'mediumvioletred',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP3 ={
    height: '45vh',
    width: '20vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP3Life ={
    height: '45vh',
    width: '10vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'yellow',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP4 ={
    height: '45vh',
    width: '20vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'slateblue',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  }

  const styleForP4Life ={
    height: '45vh',
    width: '10vw',
    borderColor: 'black',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'slateblue',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25 
  }

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

  function onHoverLeave4(ele){
    ele.target.style.background = 'slateblue';
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

  function incLife4(){
    let currLife = parseInt(document.getElementById("P4Life").innerHTML);
    currLife = currLife + 1;
    document.getElementById("P4Life").innerHTML = currLife;
  }
       
  function decLife4(){
    let currLife = parseInt(document.getElementById("P4Life").innerHTML);
    currLife = currLife - 1;
    document.getElementById("P4Life").innerHTML = currLife;
  }

  return(
    <div className="4PlayerContainer" id="4PlayerContainer" style={styleFor4PlayerContainer}>
      <UtilityBar />
      <div className="containerForTop2" id="conatinerForTop2" style={styleFor2PlayersContainer}>
        <div className="P1container" id="P1container" style={styleForPlayerContainer}>
          <div className="P1top" id="P1top" style={styleForP1} onMouseEnter={onHoverEnter}
                                                               onMouseLeave={onHoverLeave1}
                                                               onClick={decLife1}></div>
          <div className="P1Life" id="P1Life" style={styleForP1Life}>{LIFETOTAL}</div>
          <div className="P1bottom" id="P1bottom" style={styleForP1} onMouseEnter={onHoverEnter}
                                                                     onMouseLeave={onHoverLeave1}
                                                                     onClick={incLife1}></div>
        </div>

        <div className="P2container" id="P2container" style={styleForPlayerContainer}>
          <div className="P2top" id="P2top" style={styleForP2} onMouseEnter={onHoverEnter}
                                                               onMouseLeave={onHoverLeave2}
                                                               onClick={incLife2}></div>
          <div className="P2Life" id="P2Life" style={styleForP2Life}>{LIFETOTAL}</div>
          <div className="P2bottom" id="P2bottom" style={styleForP2} onMouseEnter={onHoverEnter}
                                                                     onMouseLeave={onHoverLeave2}
                                                                     onClick={decLife2}></div>
        </div>
      </div>

      <div className="containerForBottom2" id="conatinerForBottom2" style={styleFor2PlayersContainer}>
        <div className="P3container" id="P3container" style={styleForPlayerContainer}>
          <div className="P3top" id="P3top" style={styleForP3} onMouseEnter={onHoverEnter}
                                                               onMouseLeave={onHoverLeave3}
                                                               onClick={decLife3}></div>
          <div className="P3Life" id="P3Life" style={styleForP3Life}>{LIFETOTAL}</div>
          <div className="P3bottom" id="P3bottom" style={styleForP3} onMouseEnter={onHoverEnter}
                                                                     onMouseLeave={onHoverLeave3}
                                                                     onClick={incLife3}></div>
        </div>

        <div className="P4container" id="P4container" style={styleForPlayerContainer}>
          <div className="P4top" id="P4top" style={styleForP4} onMouseEnter={onHoverEnter}
                                                               onMouseLeave={onHoverLeave4}
                                                               onClick={incLife4}></div>
          <div className="P4Life" id="P4Life" style={styleForP4Life}>{LIFETOTAL}</div>
          <div className="P4bottom" id="P4bottom" style={styleForP4} onMouseEnter={onHoverEnter}
                                                                     onMouseLeave={onHoverLeave4}
                                                                     onClick={decLife4}></div>
        </div>
      </div>
    </div>
  );
}

function GameTime3Player(){

  const styleFor3PlayerContainer = {
    height: '100vh',
    width: '100vw',
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

  const [life, setLife] = useState(LIFETOTAL);
  // const [colorTop, setColorTop] = useState(false)

  function onHoverEnter(ele){
    ele.target.style.background = 'grey';
  }
  
  function onHoverLeave(ele){
    ele.target.style.background = 'lightgreen';
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
      <UtilityBar />
      <div ClassName="topHalfSinglePlayer" style={innerLifeContainer} onClick={() => setLife(life + 1)}
                                                                      onMouseOver={onHoverEnter}
                                                                      onMouseLeave={onHoverLeave}></div>
      <div className="lifeTotalDisplay" id="P1Life" style={lifeTotalStyle}>{life}</div>
      <div ClassName="bottomHalfSinglePlayer" style={innerLifeContainer} onClick={() => setLife(life - 1)}
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
