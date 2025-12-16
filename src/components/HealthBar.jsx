import { useGlobal } from "../contexts/GlobalContext";
import { useState, useEffect } from "react";

export default function HealthBar() {
    const { player } = useGlobal();
    const [actualHp, setActualHp] = useState(0);
    const [maxHp, setMaxHp] = useState(1);

    useEffect(() => {
        if (player[0]) {
            setActualHp(player[0].currentHealth);
            setMaxHp(player[0].currentHealth); 
        }
    }, [player]);

    if (!player[0]) return null; 

    
    const takeDamage = (amount) => {
        setActualHp((prev) => Math.max(prev - amount, 0));
    };

    const hpPercent = (actualHp / maxHp) * 100;

    return (
        <div>
            <div className="healthbar-container-big">
                <div className="healthbar-container-small">
                    <div className="gray-bar">
                        <div className="green-bar" style={{ width: `${hpPercent}%` }}></div>
                    </div>
                </div>
                <div className="decoration"><span>Hp {actualHp}/{maxHp}</span></div>
            </div>

        </div>
    );
}
