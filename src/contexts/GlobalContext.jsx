import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [ stage, setStage ] = useState(0);
    const [ player, setPlayer ] = useState([])
    const [ enemy, setEnemy ] = useState([])

    return(
        <GlobalContext.Provider
            value={{
                stage,
                setStage,
                player,
                setPlayer,
                enemy,
                setEnemy
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