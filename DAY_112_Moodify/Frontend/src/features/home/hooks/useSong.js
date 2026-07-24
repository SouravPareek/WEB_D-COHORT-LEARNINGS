import { getSong } from "../service/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";

export const useSong = () => {
    const context = useContext(SongContext);

    if (!context) {
        return {
            loading: false,
            song: null,
            handleGetSong: async () => null,
            setSong: () => {},
        };
    }

    const { loading, song, setSong, setLoading } = context;

    async function handleGetSong(moodOrPayload) {
        const mood = typeof moodOrPayload === "string"
            ? moodOrPayload
            : moodOrPayload?.mood;

        if (!mood) {
            return null;
        }

        setLoading(true);

        try {
            const response = await getSong({ mood });
            const payload = response?.song ?? response;
            const nextSong = Array.isArray(payload)
                ? payload[Math.floor(Math.random() * payload.length)]
                : payload;

            if (nextSong?.url) {
                setSong(nextSong);
                return nextSong;
            }

            if (song?.url) {
                return song;
            }

            setSong({
                url: "",
                posterUrl: "",
                title: "No song found",
                mood,
            });
            return null;
        } catch (error) {
            console.error("Failed to fetch song:", error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { loading, song, handleGetSong, setSong };
};