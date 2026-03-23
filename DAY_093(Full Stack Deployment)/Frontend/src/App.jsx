import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const [notes, setnotes] = useState([]);

    function fetchNotes() {
        axios.get("http://localhost:3000/api/notes").then((res) => {
            setnotes(res.data.notes);
        });
    }

    //normally app function will render again and again whenever any state variable is changes, so it will call api again and again, to overcone this we use useEffect so it will be called once only
    useEffect(() => {
        fetchNotes()
    }, []);

    return (
        <>
            <div className="notes">
                {notes.map((note) => {
                    return (
                        <div className="note">
                            <h1>{note.title}</h1>
                            <p>{note.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
