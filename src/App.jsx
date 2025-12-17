import './App.css'
import Display from './components/Display'
import axios from 'axios'
import { GlobalProvider, useGlobal } from './contexts/GlobalContext'
import { useState } from 'react'

function AppContent() {
  const { setStage, setPlayer, setEnemy, player, inventory, setInventory } = useGlobal()
  const [playerSelectedMove, setPlayerSelectedMove] = useState()
  const [enemySelectedMove, setEnemySelectedMove] = useState()
  const [log, setLog] = useState()


  //logica combattimento
  function selectMoveHandler(move) {
    setPlayerSelectedMove(move);
    setLog(`Mossa selezionata:${move}`);
  }

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
        { name: "potion", quantity: 3 },
      ]
      )

      const enemyRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${generateRandomId()}`)
      const clone2 = initializePokemon(enemyRes.data)
      setEnemy([clone2])
    } catch (err) {
      console.error(err)
    }

    //gestisce progressione 
    //generateLevelProgression()

  }


  return (
    <div className="container">
      <Display
        gameHandler={gameHandler}
        selectMoveHandler={selectMoveHandler}
        playerSelectedMove={playerSelectedMove}
        log={log}
        setLog={setLog}
      />
    </div>
  )
}

console.log(fetchMoveData("cut"));

function generateLevels() {

}

function handleFight() {
  while (!isGameOver) {
    handleTurn();
  }
}

function handleTurn() {
  checkSpeed()
  //mossa nemico
  //valuta chi è più veloce
  //applica danni/controlla se vivi
}

async function fetchMoveData(name){
  const moveData = await axios.get(`https://pokeapi.co/api/v2/move/${name}`)
  return moveData
}

function checkSpeed(player, enemy){
  const playerSpeed = calculateSpeed()
}

function calculateSpeed(baseStat, level) {
    return Math.floor((2 * baseStat * level) / 100) + 5;
}

function enemyTurn(){

}

function dealDamage(){

}

function calcolaHP(baseStat, level) {
  return Math.floor(((2 * baseStat) * level) / 100) + level + 10;
}

function initializePokemon(pokemon) {
  const myPokemon = structuredClone(pokemon);

  myPokemon.currentHealth = calcolaHP(pokemon.stats[0].base_stat, 5);
  myPokemon.level = 5;

  myPokemon.moveSet = pokemon.moves
    //hardcodate le mosse prese (dopo mettilo dinamico)
    .slice(0, 4)
    .map(m => m.move.name);

  return myPokemon;
}

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  )
}

export default App
