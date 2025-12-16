export default function Display({ gameHandler }){

    return (
        <div className="display">
            <button onClick={gameHandler}>Comincia la tua avventura!</button>
            <img src="./oak.png" alt="" />
            <div className="dialogue-box">
                <h1>Qua si stamperanno dinamicamente i dialoghi</h1>
            </div>
            
        </div>
    )
}