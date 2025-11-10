import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

function App() {
    const CATEGORIES = {
        ALL: "ALL",
        WORK: "WORK",
        PERSONAL: "PERSONAL",
        OTHER: "OTHER",
    };
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState(
        () => JSON.parse(localStorage.getItem("todos")) || []
    );
    const [inputCategory, setInputCategory] = useState(CATEGORIES.WORK);
    const [filterCategory, setFilterCategory] = useState(CATEGORIES.ALL);
    const [searchText, setSearchText] = useState("");
    const [editedText, setEditedText] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleCategoryChange = (event) => {
        setInputCategory(event.target.value);
    };

    const handleAdd = () => {
        if (!todoText.trim()) return;
        setTodos((prev) => [
            ...prev,
            {
                id: uuid(),
                text: todoText,
                category: inputCategory,
                done: false,
            },
        ]);
        setTodoText("");
    };

    const handleCheckedChange = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    };

    const handleFilterCategory = (event) => {
        setFilterCategory(event.target.value);
    };

    const visibleTodos = todos.filter((todo) => {
        const matchesCategory =
            filterCategory === CATEGORIES.ALL ||
            todo.category === filterCategory;

        const matchesSearch = todo.text
            .toLowerCase()
            .includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id) => {
        setEditingId(id);
        const found = todos.find((todo) => todo.id === id);
        setEditedText(found.text);
    };

    const handleSave = () => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === editingId ? { ...todo, text: editedText } : todo
            )
        );
        setEditingId(null);
        setEditedText("");
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Add todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <label>
                    Pick a category:
                    <select
                        name="category"
                        value={inputCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value={CATEGORIES.WORK}>Work</option>
                        <option value={CATEGORIES.PERSONAL}>Personal</option>
                        <option value={CATEGORIES.OTHER}>Other</option>
                    </select>
                </label>
                <button onClick={handleAdd}>ADD</button>
            </div>
            {/* -------FILTER CODE-------- */}
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <label>
                    Filter:
                    <select
                        name="categoty filter"
                        value={filterCategory}
                        onChange={handleFilterCategory}
                    >
                        <option value={CATEGORIES.ALL}>All</option>
                        <option value={CATEGORIES.WORK}>Work</option>
                        <option value={CATEGORIES.PERSONAL}>Personal</option>
                        <option value={CATEGORIES.OTHER}>Other</option>
                    </select>
                </label>
            </div>
            <ul>
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) =>
                                        setEditedText(e.target.value)
                                    }
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && handleSave()
                                    }
                                />
                                <button onClick={handleSave}>Save</button>
                            </>
                        ) : (
                            <>
                                <span
                                    className={todo.done ? "done" : ""}
                                    onDoubleClick={() => handleEdit(todo.id)}
                                >
                                    {todo.text} {todo.category}
                                </span>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() =>
                                        handleCheckedChange(todo.id)
                                    }
                                />
                                <button onClick={() => handleDelete(todo.id)}>
                                    X
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
