import './App.css'
import Display from './components/Display'
import Team from './components/Team'
import Footer from './components/Footer'
import axios from 'axios'
import { GlobalProvider, useGlobal } from './contexts/GlobalContext'

function AppContent() {
  const { setStage, setPlayer, setEnemy } = useGlobal()

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

      const enemyRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${generateRandomId()}`)
      const clone2 = initializePokemon(enemyRes.data)
      setEnemy([clone2])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <Display gameHandler={gameHandler} />
      <Team />
      <Footer />
    </div>
  )
}

function initializePokemon(pokemon){
  const myPokemon =  structuredClone(pokemon);
  myPokemon.currentHealth = 100;
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
