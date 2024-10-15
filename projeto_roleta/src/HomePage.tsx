import { useState } from "react";
import './App.css'

export default function HomePage() {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);


    interface Segment {
        label: string;
        color: string;
    }

    const segments: Segment[] = [
        { label: '1', color: '#ff4e50' },
        { label: '2', color: '#0a3740' },
        { label: '3', color: '#a33c75' },
        { label: '4', color: '#9de0ad' },
        { label: '5', color: '#582bf7' },
        { label: '6', color: '#0094b3' },
    ];

    const spinRoulette = () => {
        if (spinning) return;

        const newRotation = rotation + Math.floor(360 + Math.random() * 8000);
        setRotation(newRotation);
        setSpinning(true);

        setTimeout(() => setSpinning(false), 1000);
    };

    return (
        <div className="roulette-container">
            <div
                className="roulette"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className="segment"
                        style={{
                            backgroundColor: segment.color,
                            transform: `rotate(${(360 / segments.length) * index}deg)`,
                        }}
                    >
                        {segment.label}
                    </div>
                ))}
                
                <div className="point">
                </div>

            </div>


            <div className="pointer-box">
                <img className="pointer" src="./pointer.png" alt="Pointer" />
            </div>

            <button onClick={spinRoulette} disabled={spinning}>
                Spin
            </button>
        </div>
    )
}
