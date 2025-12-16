import { useGlobal } from "../contexts/GlobalContext"
import TeamCard from "./TeamCard"

export default function Team(){

    const { player } = useGlobal()

    return (
        <div className="team">
            { player.map((pokemon, index) => (
                <TeamCard 
                    key={index}
                    pokemon={pokemon}
                />
            )) }
        </div>
    )
}