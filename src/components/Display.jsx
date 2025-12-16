import { useEffect, useState } from "react"

export default function Display({ gameHandler, stage, playerTeam }) {

    //-----GESTIONE GRAFICA---------
    //create event

    const [text, setText] = useState("")

    function createEvent(operations, interval) {
        operations.forEach((operation, index) => {
            setTimeout(() => {
                operation()
            }, interval * index)
        })
    }

    useEffect(() => {
        //crezione evento di benvenuto
        createEvent([
            () => displayText("Benvenuto!"),
            () => displayText("Sono il professor Oak. Sarò la tua guida!"),
            () => displayText("Ti verrà affidato un pokemon casuale\n e sarai catapultato nella sfida,sei pronto?"),
            () => gameHandler(),
        ], 2000)
    }, [])


    function displayText(str) {
        setText(str)
    }

    return (
        <div className="display">
            <img src="./oak.png" alt="" />
            <div className="dialogue-box">
                <h1>{text}</h1>
            </div>
            <div className="stage-box">
                <h1>{stage}</h1>
            </div>
            {
            //randerizza starter
            stage === 1 && playerTeam && (
                <div className="fight-box">
                    <h2>{playerTeam.name}</h2>
                </div>
            )}
        </div>
    )
}