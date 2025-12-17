import { useGlobal } from "../contexts/GlobalContext";
import HealthBar from "./HealthBar";

export default function FightMode() {
    const { player, enemy, playerHP, enemyHP } = useGlobal();

    return (
        <div className="fight-box-big">
            <div className="fight-box-small">
                {player.map((poke, idx) => (
                    <div key={`player-${idx}`} className="pokemon-box player">
                        <h2>{poke.name.toUpperCase()}</h2>
                        <HealthBar
                            currentHp={playerHP[idx]}
                            maxHp={(Math.floor(((2 * poke.stats[0].base_stat) * poke.level) / 100) + poke.level + 10)}
                            level={poke.level}
                        />
                        <img src={poke.sprites?.back_default} alt={poke.name} />
                    </div>
                ))}
                {enemy.map((poke, idx) => (
                    <div key={`enemy-${idx}`} className="pokemon-box enemy">
                        <h2>{poke.name.toUpperCase()}</h2>
                        <HealthBar
                            currentHp={enemyHP[idx]}
                            maxHp={(Math.floor(((2 * poke.stats[0].base_stat) * poke.level) / 100) + poke.level + 10)}
                            level={poke.level}
                        />
                        <img src={poke.sprites?.front_default} alt={poke.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}