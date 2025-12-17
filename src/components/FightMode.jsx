import { useGlobal } from "../contexts/GlobalContext"
import HealthBar from "./HealthBar";
import StageBox from "./StageBox"
import Inputs from "./Inputs";
import { useState } from "react";

export default function FightMode() {

    const { stage, setStage, player, enemy, inventory, setInventory } = useGlobal();
    const [playerHP, setPlayerHP] = useState([]);
    const [enemyHP, setEnemyHP] = useState([]);

    return (
        <>
            <div className="fight-box-big">
                <div className="fight-box-small">
                    {/* Render dei Pokémon del player */}
                        {player.map((poke, idx) => (
                            <div key={`player-${idx}`} className="pokemon-box player">
                                <h2>{poke.name.toUpperCase()}</h2>
                                <HealthBar
                                    currentHp={playerHP[idx]}
                                    maxHp={player[idx].currentHealth}
                                    level={player[idx].level}
                                    />
                                <img src={poke.sprites?.back_default} alt={poke.name} />
                                
                            </div>
                        ))}

                        {/* Render dei Pokémon del nemico */}
                        {enemy.map((poke, idx) => (
                            <div key={`enemy-${idx}`} className="pokemon-box enemy">
                                <h2>{poke.name.toUpperCase()}</h2>
                                <HealthBar
                                    currentHp={enemyHP[idx]}
                                    maxHp={enemy[idx].currentHealth}
                                    level={enemy[idx].level}
                                />
                                <img className="enemy" src={poke.sprites?.front_default} alt={poke.name} />
                                
                            </div>
                        ))}
                    <StageBox /> 
                </div>
                
                
            </div>
        </>
    )
}