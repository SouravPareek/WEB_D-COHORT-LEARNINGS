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
        <div style={{ textAlign: "center" }}>
            <video
                ref={videoRef}
                style={{ width: "400px", borderRadius: "12px" }}
                playsInline
            />
            <h2>{expression.toUpperCase()}</h2>
            <button onClick={handleClick} className="expressionbutton">
                Detect Expression
            </button>
        </div>
    );
}
