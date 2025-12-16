import { useGlobal } from "../contexts/GlobalContext"


export default function Bag() {

    const { inventory } = useGlobal();

    return (
        <div className="bag">
            {inventory.map(item => (
                <div className="bag-carusel">
                    <p>{item.name}</p>
                    <img src={`../public/${item.name}.png`} alt="" />
                </div>
            ))}
        </div>
             
    )
}