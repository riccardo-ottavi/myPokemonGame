import { useGlobal } from "../contexts/GlobalContext"

export default function StageBox() {

     const { stage } = useGlobal();

    return (
        <div className="stage-box">
            <h1>{stage}</h1>
        </div>
    )
}