import { useGlobal } from "../contexts/GlobalContext"
import StageBox from "./StageBox"

export default function FightMode() {

    const { stage, setStage, player, enemy } = useGlobal();

    return (
        <>
            <div className="fight-box">
                {/* Render dei Pokémon del player */}
                    {player.map((poke, idx) => (
                        <div key={`player-${idx}`} className="pokemon-box player">
                            <h2>{poke.name}</h2>
                            <img src={poke.sprites?.back_default} alt={poke.name} />
                        </div>
                    ))}

                    {/* Render dei Pokémon del nemico */}
                    {enemy.map((poke, idx) => (
                        <div key={`enemy-${idx}`} className="pokemon-box enemy">
                            <h2>{poke.name}</h2>
                            <img src={poke.sprites?.front_default} alt={poke.name} />
                        </div>
                    ))}
                <div className="moves-box">
                    <p>mossa 1</p>
                    <p>mossa 2</p>
                </div>
                <StageBox />
            </div>
        </>
    )
}