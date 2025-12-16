import './App.css'
import Display from './components/Display'
import Team from './components/Team'
import Footer from './components/Footer'
import axios from 'axios'
import { GlobalProvider, useGlobal } from './contexts/GlobalContext'

function AppContent() {
  const { setStage, setPlayer, setEnemy, player, inventory, setInventory } = useGlobal()

  //random pokemon id
  function generateRandomId() {
    return Math.floor(Math.random() * 500) + 1
  }

  async function gameHandler() {
    setStage(1)
    console.log("Inizia l'avventura");

    try {
      const playerRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${generateRandomId()}`)
      const clone = initializePokemon(playerRes.data)
      setPlayer([clone])
      setInventory([
        {name:"potion", quantity: 3},
          ]
        )

      const enemyRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${generateRandomId()}`)
      const clone2 = initializePokemon(enemyRes.data)
      setEnemy([clone2])
    } catch (err) {
      console.error(err)
    }

    //gestisce progressione 
    generateLevelProgression()

  }


  return (
    <div className="container">
      <Display gameHandler={gameHandler} />
    </div>
  )
}

function generateLevels(){

}

function handleFight(){
  while(!isGameOver){
    handleTurn();
  }
}

function handleTurn(){
  //mossa player
  //mossa nemico
  //controlla e aggiorna stati
}

function calcolaHP(baseStat, level) {
  return Math.floor(((2 * baseStat) * level) / 100) + level + 10;
}

function initializePokemon(pokemon) {
  const myPokemon = structuredClone(pokemon);
  myPokemon.currentHealth = calcolaHP(pokemon.stats[0].base_stat, 5);
  myPokemon.moveSet = pokemon.moves[0].move.name
  return myPokemon
}

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  )
}

export default App
