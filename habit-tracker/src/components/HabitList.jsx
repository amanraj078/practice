import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onDeleteHabit, toggleDone, currentStreak }) => {
    return (
        <div className="w-full max-w-2xl mx-auto mt-6">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Your Habits
            </h2>

            {/* Empty state */}
            {habits.length === 0 ? (
                <div className="text-center text-gray-500 bg-gray-50 p-6 rounded-xl shadow-sm">
                    No habits yet. Add one above to get started.
                </div>
            ) : (
                <ul className="space-y-3 max-h-[70vh] overflow-y-auto px-1">
                    {habits.map((habit) => (
                        <li key={habit.id}>
                            <HabitItem
                                habit={habit}
                                onDelete={() => onDeleteHabit(habit.id)}
                                handleCheckedToday={() => toggleDone(habit.id)}
                                currentStreak={currentStreak}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HabitList;
