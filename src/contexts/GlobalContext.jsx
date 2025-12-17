import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [ stage, setStage ] = useState(0);
    const [ player, setPlayer ] = useState([])
    const [ enemy, setEnemy ] = useState([])
    const [ inventory, setInventory ] = useState([])
    const [playerHP, setPlayerHP] = useState([]);
    const [enemyHP, setEnemyHP] = useState([]);


    return(
        <GlobalContext.Provider
            value={{
                stage,
                setStage,
                player,
                setPlayer,
                enemy,
                setEnemy,
                inventory,
                setInventory,
                enemyHP,
                playerHP,
                setPlayerHP,
                setEnemyHP
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobal }