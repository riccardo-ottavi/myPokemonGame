import './App.css'
import Display from './components/Display'
import Team from './components/Team'
import Footer from './components/Footer'



function App() {


  //genera annunci per il player
  function createGreeter(greeting){
    return function(name){
      console.log(`${greeting}${name}`)
    }
  }

  //moltiplicatore
  function createMultiplier(multiplier){
    return function(number){
      return number * multiplier;
    }
  }

  //create event
  function createEvent(operations, interval){
      operations.forEach((operation, index) => {
        setTimeout(() => {
          operation()
        },interval * index)
      })
  }
  //crezione evento di benvenuto
  createEvent([
    () => console.log("Benvenuto!"),
    () => console.log("Sono il professor Oak"),
    () => console.log("Sarò la tua guida!")
  ],2000)

  return (
    <>
      <div className="container">
        <Display />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default App
