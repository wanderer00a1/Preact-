
import './App.css'
import './Pokemon.css';
import Pokemon from './Pokemon';
import ReloadButton from './ReloadButton';

function App() {
  const gameNum = Math.floor(Math.random() * 9)+1;
  const gameNum2 = Math.floor(Math.random() * 9)+1;
  const gameNum3 = Math.floor(Math.random() *9)+1;
  const isEqual = gameNum === gameNum2 && gameNum2 === gameNum3;
  const styles = {color: isEqual ? "green":"red"}
  return (
    <div>
      <h1 style={styles}>{isEqual ? "YOU WON!":"YOU LOSE :("}</h1>
      {isEqual ? <h2>Congrats🥂</h2>:""}
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Pokemon pokeball={gameNum}/>
      <Pokemon pokeball={gameNum2}/>
      <Pokemon pokeball={gameNum3}/>
      </div>
      <ReloadButton/>
    </div>
  )
}

export default App
