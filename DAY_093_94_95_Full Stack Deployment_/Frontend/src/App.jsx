import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const [notes, setnotes] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    console.log("integrating ");

    function fetchNotes() {
        axios.get("https://web-d-cohort-learnings.onrender.com//api/notes").then((res) => {
            setnotes(res.data.notes);
        });
    }
    function postNote() {
        axios
            .post("https://web-d-cohort-learnings.onrender.com//api/notes", {
                title: title,
                description: desc,
            })
            .then(() => {
                fetchNotes();
            })
            .catch(() => {
                console.log("Error occured while creating note");
            });
    }
    function deleteNote(noteId) {
        axios
            .delete("https://web-d-cohort-learnings.onrender.com//api/notes/" + noteId)
            .then(() => {
                fetchNotes();
            })
            .catch(() => {
                console.log("Error occured while deleting note");
            });
    }
    function updateNote(noteId) {
        const updatedFields = {};

        if (title.trim() !== "") {
            updatedFields.title = title;
        }
        
        if (desc.trim() !== "") {
            updatedFields.description = desc;
        }
        
        axios
        .patch(`https://web-d-cohort-learnings.onrender.com//api/notes/${noteId}`, updatedFields)
        .then(() => {
            fetchNotes();
            setTitle("");
            setDesc("");
            })
            .catch(() => {
                console.log("Error occured while updating note");
            });
    }

    function submitHandler(e) {
        e.preventDefault();

        postNote();

        setTitle("");
        setDesc("");
    }

    //normally app function will render again and again whenever any state variable is changes, so it will call api again and again, to overcone this we use useEffect so it will be called once only
    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <>
            <form className="note-create-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter title here..."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter description here..."
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <button>Create Note</button>
            </form>
            <div className="notes">
                {notes.map((note) => {
                    return (
                        <div className="note">
                            <h1>{note.title}</h1>
                            <p>{note.description}</p>
                            <div className="note-buttons">
                                <button
                                    className="update"
                                    onClick={() => {
                                        updateNote(note._id);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => {
                                        deleteNote(note._id);
                                    }}
                                >
                                    <i className="ri-delete-bin-line"></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
