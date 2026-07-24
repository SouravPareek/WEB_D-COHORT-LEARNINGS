import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";

const Home = () => {
    const {handleGetSong} = useSong()
    
    return (
        <div style={{ padding: "24px 0 40px" }}>
            <FaceExpression onClick={(expression) => handleGetSong({ mood: expression })} />
            <Player />
        </div>
    );
};

export default Home;