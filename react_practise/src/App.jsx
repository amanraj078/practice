import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [noteBlock, setNoteBlock] = useState({ id: 0, text: "" });
    const [notes, setNotes] = useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    );
    const [editedText, setEditedText] = useState("");
    const [editingIndex, setEdtingIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleAdd = () => {
        if (noteBlock.text.trim() === "") return;
        setNotes([
            ...notes,
            {
                id: Date.now(),
                text: noteBlock.text,
            },
        ]);
        setNoteBlock({ ...noteBlock, text: "" });
    };

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => id !== note.id));
    };

    const handleEdit = (id) => {
        setEdtingIndex(id);
        const editedNote = notes.find((n) => n.id === id);
        setEditedText(editedNote.text);
    };

    const handleSave = () => {
        setNotes(
            notes.map((note) =>
                editingIndex === note.id ? { ...note, text: editedText } : note
            )
        );
        setEdtingIndex(null);
        setEditedText("");
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={noteBlock.text}
                    placeholder="Add Text"
                    onChange={(e) =>
                        setNoteBlock({ ...noteBlock, text: e.target.value })
                    }
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {notes.map((note) => (
                    <div key={note.id}>
                        {editingIndex === note.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) =>
                                        setEditedText(e.target.value)
                                    }
                                />
                                <button onClick={handleSave}>Save</button>
                            </>
                        ) : (
                            <>
                                <li>{note.text}</li>
                                <button onClick={() => handleDelete(note.id)}>
                                    X
                                </button>
                                <button onClick={() => handleEdit(note.id)}>
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </ul>
        </>
    );
};

export default App;
