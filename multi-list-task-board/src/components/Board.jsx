import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Column from "./Column";
import TaskCard from "./TaskCard";

const COLUMN_ORDER = ["BACKLOG", "IN_PROGRESS", "DONE"];

const Board = () => {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState(
        () => JSON.parse(localStorage.getItem("tasks")) || []
    );
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [draggedId, setDraggedId] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleAdd = () => {
        if (taskText.trim() === "") return;
        setTasks((prev) => [
            ...prev,
            {
                id: uuid(),
                text: taskText,
                status: "BACKLOG",
            },
        ]);
        setTaskText("");
    };

    const moveDirection = (id, direction) => {
        setTasks((prev) =>
            prev.map((task) => {
                if (task.id !== id) return task;

                const currentIndex = COLUMN_ORDER.indexOf(task.status);

                const newIndex =
                    direction === "left"
                        ? Math.max(0, currentIndex - 1)
                        : Math.min(COLUMN_ORDER.length - 1, currentIndex + 1);

                return { ...task, status: COLUMN_ORDER[newIndex] };
            })
        );
    };

    const handleEdit = (id) => {
        setEditingId(id);
        const found = tasks.find((task) => task.id === id);
        setEditingText(found.text);
    };

    const handleSave = () => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === editingId ? { ...task, text: editingText } : task
            )
        );
        setEditingId(null);
        setEditingText("");
    };

    const handleDelete = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const handleDrag = (endStatus) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === draggedId ? { ...task, status: endStatus } : task
            )
        );
        setDraggedId(null);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className="flex justify-between">
                <Column title={"Backlog"} onDrop={handleDrag} status="BACKLOG">
                    {tasks
                        .filter((t) => t.status === "BACKLOG")
                        .map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onMove={moveDirection}
                                onDragStart={setDraggedId}
                                isEditing={editingId === task.id}
                                editingText={editingText}
                                setEditingText={setEditingText}
                                onSave={handleSave}
                                onCancel={() => setEditingId(null)}
                            />
                        ))}
                </Column>
                <Column
                    title={"In Progress"}
                    onDrop={handleDrag}
                    status="IN_PROGRESS"
                >
                    {tasks
                        .filter((t) => t.status === "IN_PROGRESS")
                        .map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onMove={moveDirection}
                                onDragStart={setDraggedId}
                                isEditing={editingId === task.id}
                                editingText={editingText}
                                setEditingText={setEditingText}
                                onSave={handleSave}
                                onCancel={() => setEditingId(null)}
                            />
                        ))}
                </Column>
                <Column title={"DONE"} onDrop={handleDrag} status="DONE">
                    {tasks
                        .filter((t) => t.status === "DONE")
                        .map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onMove={moveDirection}
                                onDragStart={setDraggedId}
                                isEditing={editingId === task.id}
                                editingText={editingText}
                                setEditingText={setEditingText}
                                onSave={handleSave}
                                onCancel={() => setEditingId(null)}
                            />
                        ))}
                </Column>
            </div>
        </>
    );
};

export default Board;
