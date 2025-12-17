import Bag from "./Bag"
import MovesBox from "./MovesBox"


export default function Inputs({ selectMoveHandler, playerSelectedMove }) {

    return (
        <div className="inputs">
            <MovesBox 
                selectMoveHandler={selectMoveHandler}
                selectedMove={playerSelectedMove}
            />
            <Bag />
            <div className="pokedex">
                <h4>Pokedex</h4>
            </div>
        </div>

    )
}