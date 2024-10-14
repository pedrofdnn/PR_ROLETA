import { useState } from "react";
import './App.css'

export default function HomePage() {

    interface Segment {
        label: string;
        color: string;
    }

    const segments: Segment[] = [
        { label: '1', color: '#FF0000' },
        { label: '2', color: '#00FF00' },
        { label: '3', color: '#0000FF' },
        { label: '4', color: '#FFFF00' },
        { label: '5', color: '#FF00FF' },
        { label: '6', color: '#00FFFF' },
    ];


    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);

    // função para rolar
    const spinRoulette = () => {
        if (spinning) return;

        const newRotation = rotation + Math.floor(360 + Math.random() * 1000);
        setRotation(newRotation);
        setSpinning(true);

        setTimeout(() => setSpinning(false), 3000);
    };


    return (
        <div>
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
                </div>
                <button onClick={spinRoulette} disabled={spinning}>
                    Spin
                </button>
            </div>

        </div>
    )
}
