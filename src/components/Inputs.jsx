import { useGlobal } from "../contexts/GlobalContext"
import Bag from "./Bag"


export default function Inputs() {

    const { player } = useGlobal();

    return (
        <div className="inputs">
            <div className="moves-box">
                <h4>Mosse</h4>
                <p>{player[0].moveSet}</p>
                <p>Fuga (5 di 5)</p>
            </div>
            <Bag />
            <div className="pokedex">
                <h4>Pokedex</h4>
            </div>
        </div>

    )
}