import { useGlobal } from "../contexts/GlobalContext"
import { useState } from "react";

export default function MovesBox() {

    const { player } = useGlobal();

    const [playerSelectedMove, setPlayerSelectedMove] = useState()
    const [enemySelectedMove, setEnemySelectedMove] = useState()

    function selectMoveHandler(move) {
        setPlayerSelectedMove(move);
        console.log("Mossa selezionata:", move);
    }

    return (
        <div className="moves-box">
            <div
                className={`move-label ${playerSelectedMove === player[0].moveSet ? "selected" : ""
                    }`}
                onClick={() => selectMoveHandler(player[0].moveSet)}
            >
                <p>{player[0].moveSet.toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === player[0].moveSet ? "selected" : ""
                    }`}
                onClick={() => selectMoveHandler(player[0].moveSet)}
            >
                <p>{player[0].moveSet.toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === player[0].moveSet ? "selected" : ""
                    }`}
                onClick={() => selectMoveHandler(player[0].moveSet)}
            >
                <p>{player[0].moveSet.toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === player[0].moveSet ? "selected" : ""
                    }`}
                onClick={() => selectMoveHandler(player[0].moveSet)}
            >
                <p>{player[0].moveSet.toUpperCase()}</p>
            </div>

            <div className="move-label">
                <p>Fuga (5 di 5)</p>
            </div>
        </div>
    );
}