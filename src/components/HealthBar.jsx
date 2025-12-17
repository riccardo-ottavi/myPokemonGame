export default function HealthBar({ currentHp, maxHp, level }) {
    const hpPercent = (currentHp / maxHp) * 100;

    return (
        <div className="healthbar-container-big">
            <div className="healthbar-container-small">
                <div className="gray-bar">
                    <div className="green-bar" style={{ width: `${hpPercent}%` }}></div>
                </div>
            </div>
            <div className="decoration">
                <span>HP {currentHp}/{maxHp}</span>
            </div>
            <p>L:{level}</p>
        </div>
    );
}