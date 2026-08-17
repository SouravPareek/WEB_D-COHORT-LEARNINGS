import { createContext, useState } from "react"

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({
        url: "https://ik.imagekit.io/gifeihpvy/cohort-2/moodify/songs/Khat_-_PagalNew__8-0KQD3az.mp3",
        posterUrl:
            "https://ik.imagekit.io/gifeihpvy/cohort-2/moodify/posters/Khat_-_PagalNew__FPKILziTT.jpeg",
        title: "Khat - PagalNew ",
        mood: "happy",
    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )
};
