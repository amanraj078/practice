import React from "react";
import HabitSummary from "./HabitSummary";

const HabitItem = ({ habit, onDelete, handleCheckedToday, currentStreak }) => {
    const { currentStreak: curr, maxStreak: max } = currentStreak(habit.id);

    return (
        <div
            className={`flex flex-col w-full bg-white rounded-2xl shadow-md p-5 mb-5 border transition-all duration-200 ${
                habit.doneToday ? "border-green-400" : "border-gray-200"
            }`}
        >
            {/* Top Section: Habit name + actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                {/* Habit Info */}
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                    <input
                        type="checkbox"
                        checked={habit.doneToday}
                        onChange={() => handleCheckedToday(habit.id)}
                        className="w-5 h-5 accent-green-500 cursor-pointer"
                    />
                    <span
                        className={`text-lg font-medium ${
                            habit.doneToday
                                ? "text-green-600 line-through"
                                : "text-gray-800"
                        }`}
                    >
                        {habit.name}
                    </span>
                </div>

                {/* Delete Button */}
                <button
                    onClick={() => onDelete(habit.id)}
                    className="text-sm px-3 py-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-150 self-start sm:self-auto"
                >
                    Delete
                </button>
            </div>

            {/* Streak Info */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <span>
                    🔥 <strong>Current:</strong> {curr}
                </span>
                <span>
                    🏆 <strong>Max:</strong> {max}
                </span>
            </div>

            {/* Chart Below */}
            <div className="w-full mt-4">
                <HabitSummary habit={habit} />
            </div>
        </div>
    );
};

export default HabitItem;
