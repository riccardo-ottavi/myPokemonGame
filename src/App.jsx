import './App.css'
import Display from './components/Display'
import Team from './components/Team'
import Footer from './components/Footer'
import axios from 'axios'
import { useState } from 'react'



function App() {

  const [playerTeam, setPlayerTeam] = useState([])
  const [stage, setStage] = useState(0)

  //genera annunci per il player
  function createGreeter(greeting) {
    return function (name) {
      console.log(`${greeting}${name}`)
    }
  }

  //moltiplicatore
  function createMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    }
  }

  //get pokemon by id
  async function getPokemon(id) {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPlayerTeam(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }


  //random pokemon id
  function generateRandomId() {
    const random = Math.floor(
      Math.random() * 1017
    ) + 1;
    return random
  }

  function gameHandler() {
    setStage(1)
    console.log("Inizia l'avventura");
    getPokemon(generateRandomId())
  }


  return (
    <>
      <div className="container">
        <Display
          stage={stage}
          gameHandler={gameHandler}
          playerTeam={playerTeam}
        />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default App
