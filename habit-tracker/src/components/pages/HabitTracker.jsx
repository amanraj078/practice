import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import HabitInput from "../HabitInput";
import HabitList from "../HabitList";

const HabitTracker = () => {
    const [habitText, setHabitText] = useState("");
    const [habits, setHabits] = useState(
        () => JSON.parse(localStorage.getItem("habits")) || []
    );

    // ------ Resetting habits done each day ---------
    useEffect(() => {
        let lastUpdatedDate = localStorage.getItem("lastUpdatedDate");
        let today = new Date().toDateString();
        if (lastUpdatedDate !== today) {
            setHabits((prev) =>
                prev.map((habit) => ({ ...habit, doneToday: false }))
            );
        }
        localStorage.setItem("lastUpdatedDate", today);
    }, []);

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    const handleAddHabit = () => {
        if (habitText.trim() === "") return;
        setHabits((prev) => [
            ...prev,
            {
                id: uuid(),
                name: habitText,
                doneToday: false,
                history: [],
            },
        ]);
        setHabitText("");
    };

    const handleToggleDone = (id) => {
        let today = new Date().toDateString();
        setHabits((prev) =>
            prev.map((habit) => {
                if (habit.id !== id) return habit;

                const doneToday = !habit.doneToday;
                let newHistory = habit.history;

                if (!newHistory.includes(today)) {
                    newHistory = [...newHistory, today];
                } else {
                    newHistory = newHistory.filter((date) => date !== today);
                }

                return { ...habit, doneToday, history: newHistory };
            })
        );
    };

    const handleDeleteHabit = (id) => {
        setHabits((prev) => prev.filter((habit) => habit.id !== id));
    };

    const calculateStreak = (id) => {
        const habit = habits.find((habit) => habit.id === id);
        if (!habit || habit.history.length === 0)
            return { currentStreak: 0, maxStreak: 0 };

        // Step 1: Convert to Date objects and sort
        const sortedDates = habit.history
            .map((date) => new Date(date))
            .sort((a, b) => a - b);

        let currentStreak = 1;
        let maxStreak = 1;

        // Step 2: Loop and check consecutive days
        for (let i = 1; i < sortedDates.length; i++) {
            if (
                (sortedDates[i] - sortedDates[i - 1]) /
                    (1000 * 60 * 60 * 24) ===
                1
            ) {
                currentStreak++;
            } else if (
                (sortedDates[i] - sortedDates[i - 1]) / (1000 * 60 * 60 * 24) >
                1
            ) {
                maxStreak = Math.max(maxStreak, currentStreak);
                currentStreak = 1;
            }
        }
        maxStreak = Math.max(maxStreak, currentStreak);
        return { currentStreak, maxStreak };
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                    Habit Tracker
                </h1>
                <HabitInput
                    habitText={habitText}
                    setHabitText={setHabitText}
                    handleAddHabit={handleAddHabit}
                />
                <HabitList
                    habits={habits}
                    toggleDone={handleToggleDone}
                    onDeleteHabit={handleDeleteHabit}
                    currentStreak={calculateStreak}
                />
            </div>
        </div>
    );
};

export default HabitTracker;
