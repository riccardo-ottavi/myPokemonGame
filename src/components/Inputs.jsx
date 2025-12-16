import Bag from "./Bag"

export default function Inputs() {
    return (
        <div className="inputs">
            <div className="moves-box">
                <h4>Mosse</h4>
                <p>mossa 1</p>
                <p>mossa 2</p>
                <p>Fuga (5 di 5)</p>
            </div>
            <Bag />
            <div className="pokedex">
                <h4>Pokedex</h4>
            </div>
        </div>

    )
}