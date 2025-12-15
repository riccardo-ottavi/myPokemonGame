import './App.css'
import Display from './components/Display'
import Team from './components/Team'
import Footer from './components/Footer'
import { useState } from 'react'
import axios from 'axios'

function App() {

    const [ stage, setStage ] = useState(0);
    const [ player, setPlayer ] = useState({})
    const [ enemy, setEnemy ] = useState({})

    function getPokemon(id){
      const pokeFetch = new Promise((resolve, reject) => 
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.data)
      .then(poke => resolve(poke))
      
      )
      return pokeFetch
    }

  getPokemon(10)
  .then(pokemon => console.log("il risultato è:", pokemon))
  .catch(error => console.log(error))


  return (
    <>
    <div className="container">
      <Display 
        player={player}
        setPlayer={setPlayer}
      />
      <Team 
        player={player}
        setPlayer={setPlayer}
      />
      <Footer />
    </div> 
    </>
  )
}

export default App
