const Column = ({ title, status, onDrop, children }) => {
    return (
        <div
            className="w-full h-screen p-3"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(status)}
        >
            <h2 className="font-bold mb-2">{title}</h2>
            {children}
        </div>
    );
};

export default Column;
