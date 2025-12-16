import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import FightMode from "./fightMode";
import Inputs from "./Inputs";


export default function Display({ gameHandler }) {

    const [text, setText] = useState("");
    const { stage, setStage, player, enemy } = useGlobal(); // player ed enemy ora sono array

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
                    <img src="./oak.png" alt="Professor Oak" />
                    <div className="dialogue-box">
                        <h1>{text}</h1>
                    </div>
                </>
            )}

            {stage === 1 && player.length > 0 && enemy.length > 0 && (
                <>
                    <FightMode /> 
                    <Inputs />
                </>         
            )}
        </div>
    );
}