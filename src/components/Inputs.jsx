import Bag from "./Bag"
import MovesBox from "./MovesBox"


export default function Inputs() {

    return (
        <div className="inputs">
            <MovesBox />
            <Bag />
            <div className="pokedex">
                <h4>Pokedex</h4>
            </div>
        </div>

    )
}