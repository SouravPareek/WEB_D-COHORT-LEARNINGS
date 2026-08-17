import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";
import "../home.scss";

const Home = () => {
    const {handleGetSong} = useSong()

    return (
        <div className="home">
            <section className="home__hero">
                <div className="home__titleBlock">
                    <p className="home__eyebrow">Mood-based music</p>
                    <h1 className="home__title">Let your face pick the vibe</h1>
                    <p className="home__description">
                        Detect your expression, discover a matching soundtrack, and enjoy a smoother listening experience.
                    </p>
                </div>
                <div className="home__pill">Try a fresh mood</div>
            </section>

            <div className="home__content">
                <FaceExpression onClick={(expression) => handleGetSong({ mood: expression })} />
                <Player />
            </div>
        </div>
    );
};

export default Home;