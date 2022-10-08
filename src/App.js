import './index.css';
import './App.css';
import { useState } from 'react';

const App = () => {
const [diceNumber, setDiceNumber] = useState(6)
const refreshDice = () =>{
const ranno = Math.floor(Math.random()* 6)+1
setDiceNumber(ranno)
}
  return (
    <div>
      <center>
      <img height={200} width={200} src={require(`./assets/${diceNumber}.png`)}></img><br></br>
      <button onClick={()=> refreshDice()} className='button' >Roll</button>
      </center>
    </div>
  );
}

export default App;
