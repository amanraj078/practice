const TaskCard = ({
    task,
    onEdit,
    onDelete,
    onMove,
    onDragStart,
    isEditing,
    editingText,
    setEditingText,
    onSave,
    onCancel,
}) => {
    return (
        <div
            draggable
            onDragStart={() => onDragStart(task.id)}
            className="border p-2 my-2 cursor-move"
        >
            {isEditing ? (
                <>
                    <input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button onClick={onSave}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span
                        onDoubleClick={() => onEdit(task.id)}
                        className="cursor-pointer"
                    >
                        {task.text}
                    </span>

                    <button onClick={() => onMove(task.id, "left")}>
                        {"<-"}
                    </button>
                    <button onClick={() => onMove(task.id, "right")}>
                        {"->"}
                    </button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TaskCard;
