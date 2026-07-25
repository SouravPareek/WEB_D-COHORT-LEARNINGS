import "../expression.scss"
import { useEffect, useRef, useState } from "react"
import { detect, init } from "../utils/utils"


export default function FaceExpression({onClick = ()=>{}}) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        const landmarker = landmarkerRef.current;
        const videoElement = videoRef.current;

        init({landmarkerRef, videoRef, streamRef, setExpression});
        return () => {
            if (landmarker) {
                landmarker.close();
            }
            if (videoElement?.srcObject) {
                videoElement.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick(){
        const detectedExpression = await detect({landmarkerRef, videoRef, setExpression})
        const expression = detectedExpression || "neutral";
        setExpression(expression);
        onClick(expression);
    }
    return (
        <div className="expression-card" style={{ textAlign: "center" }}>
            <div className="expression-card__videoWrap">
                <video
                    ref={videoRef}
                    style={{ width: "100%", maxWidth: "420px", borderRadius: "16px", background: "#111" }}
                    playsInline
                />
            </div>
            <div className="expression-card__info">
                <p className="expression-card__label">Current mood</p>
                <h2 className="expression-card__expression">{expression.toUpperCase()}</h2>
                <p className="expression-card__hint">Tap the button below to detect your expression and start the soundtrack.</p>
                <button onClick={handleClick} className="expressionbutton">
                    Detect Expression
                </button>
            </div>
        </div>
    );
}
