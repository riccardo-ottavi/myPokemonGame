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
      setPlayer(playerRes.data)

      const enemyRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${generateRandomId()}`)
      setEnemy(enemyRes.data)
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

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  )
}

export default App
