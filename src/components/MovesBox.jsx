import { useGlobal } from "../contexts/GlobalContext";

export default function MovesBox({ selectMoveHandler, playerSelectedMove }) {
    const { player } = useGlobal();

    const moves = player[0].moveSet; // alias per leggibilità

    return (
        <div className="moves-box">

            <div
                className={`move-label ${playerSelectedMove === moves[0] ? "selected" : ""}`}
                onClick={() => selectMoveHandler(moves[0])}
            >
                <p>{moves[0].toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === moves[1] ? "selected" : ""}`}
                onClick={() => selectMoveHandler(moves[1])}
            >
                <p>{moves[1].toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === moves[2] ? "selected" : ""}`}
                onClick={() => selectMoveHandler(moves[2])}
            >
                <p>{moves[2].toUpperCase()}</p>
            </div>

            <div
                className={`move-label ${playerSelectedMove === moves[3] ? "selected" : ""}`}
                onClick={() => selectMoveHandler(moves[3])}
            >
                <p>{moves[3].toUpperCase()}</p>
            </div>

            <div className="move-label">
                <p>Fuga (5 di 5)</p>
            </div>
        </div>
    );
}