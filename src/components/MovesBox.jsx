import { useGlobal } from "../contexts/GlobalContext"

export default function MovesBox() {

    const { player } = useGlobal();

    return (
        <div className="moves-box">
            <div className="move-label">
               <p>{player[0].moveSet.toUpperCase()}</p>
            </div>
            <div className="move-label">
               <p>{player[0].moveSet.toUpperCase()}</p>
            </div>
            <div className="move-label">
               <p>{player[0].moveSet.toUpperCase()}</p>
            </div>
            <div className="move-label">
               <p>{player[0].moveSet.toUpperCase()}</p>
            </div>
            <div className="move-label">
               <p>Fuga (5 di 5)</p>
            </div>
        
        </div>
    )
}