import React from "react";

const HabitInput = ({ habitText, setHabitText, handleAddHabit }) => {
    return (
        <div className="flex items-center gap-3 mb-6">
            <input
                type="text"
                placeholder="Add a new habit..."
                value={habitText}
                onChange={(e) => setHabitText(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all duration-150"
            />
            <button
                onClick={handleAddHabit}
                className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-150"
            >
                Add
            </button>
        </div>
    );
};

export default HabitInput;
