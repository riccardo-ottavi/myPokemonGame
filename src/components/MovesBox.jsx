import { useGlobal } from "../contexts/GlobalContext"
import { useState } from "react";

export default function MovesBox({ selectMoveHandler, playerSelectedMove }) {

    const { player } = useGlobal();

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