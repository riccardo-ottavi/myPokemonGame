import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";

export default function Display({ gameHandler }) {

    const [text, setText] = useState("");
    const { stage, setStage, player, enemy } = useGlobal();

    function createEvent(operations, interval) {
        operations.forEach((operation, index) => {
            setTimeout(() => {
                operation();
            }, interval * index);
        });
    }

    useEffect(() => {
        createEvent([
            () => displayText("Benvenuto!"),
            () => displayText("Sono il professor Oak. Sarò la tua guida!"),
            () => displayText("Ti verrà affidato un pokemon casuale\n e sarai catapultato nella sfida, sei pronto?"),
            () => gameHandler(), 
        ], 2000);
    }, []);

    function displayText(str) {
        setText(str);
    }

    return (
        <div className="display">
            {stage === 0 && (
                <>
                    <img src="./oak.png" alt="" />
                    <div className="dialogue-box">
                        <h1>{text}</h1>
                    </div>
                    <div className="stage-box">
                        <h1>{stage}</h1>
                    </div>
                </>
            )}

            {stage === 1 && player.name && enemy.name && (
                <div className="fight-box">
                    <h2>{player.name}</h2>
                    <img src={player?.sprites?.back_default} alt={player.name} />
                    <h2>{enemy.name}</h2>
                    <img src={enemy?.sprites?.front_default} alt={enemy.name} />
                    <div className="moves-box">
                        <p>mossa 1</p>
                        <p>mossa 2</p>
                    </div>
                </div>
            )}
        </div>
    );
}
