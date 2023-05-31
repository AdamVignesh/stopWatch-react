import React, {useState} from 'react';
import './App.css';
import WatchComponent from './Components/WatchComponent/WatchComponent';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';


// let isStartClicked = 'false';

function App() {

  const [isStartClicked, setIsStartClicked] = useState(false);
  const [isPauseClicked, setIsPauseClicked] = useState(false);
  const [pauseOrPlay, setPauseOrPlay] = useState("pause") ;
  const [isResetClicked , setIsResetClicked] = useState(false);

  function handleStartClick()
  {
    console.log("in start click");
    setIsStartClicked(true);
    // isStartClicked = 'true';
    return;
  }

  function handlePauseClick()
  {
    // console.log(pauseOrPlay);
    if(pauseOrPlay == 'pause')
    {
      console.log("pause");
      setIsPauseClicked(true);
      setPauseOrPlay("play");
    }
    else
    {
      if(isResetClicked)
      {
        setIsResetClicked(false);
      }
      console.log("play");
      setIsPauseClicked(false);
      setPauseOrPlay("pause");
    }
    return;
  }
  

  function handleStopClick()
  {
    setIsStartClicked(false);
    return;
  }
  function handleResetClick()
  {
    setIsResetClicked(true);
    setPauseOrPlay("play");
    setIsPauseClicked(true);
    return;
  }

  return (
    <div className="App">
      {isStartClicked? null :<ButtonComponent name='start' id='startBtn' clickHandler = {handleStartClick}/>}
      {isStartClicked? 
      <div>
        <WatchComponent isPauseClicked = {isPauseClicked} isResetClicked = {isResetClicked}/>
        <ButtonComponent name={pauseOrPlay} id='pauseBtn' clickHandler={handlePauseClick}/>
        <ButtonComponent name='stop' id='stopBtn' clickHandler={handleStopClick}/>
        <ButtonComponent name='reset' id='resetBtn' clickHandler={handleResetClick}/>

      </div>
      :null}      
      </div>
  );
}

export default App;
