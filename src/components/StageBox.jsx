import { useGlobal } from "../contexts/GlobalContext"

export default function StageBox() {

     const { stage } = useGlobal();

    return (
        <div className="stage-box">
            <h2>Stage {stage}</h2>
        </div>
    )
}