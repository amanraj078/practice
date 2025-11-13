import React from "react";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const HabitSummary = ({ habit }) => {
    const today = new Date();
    const last7days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(today.getDate() - (6 - i));
        return d.toDateString();
    });

    const data = last7days.map((date) => ({
        day: date.split(" ").slice(1, 3).join(" "),
        done: habit.history.includes(date) ? 1 : 0,
    }));

    return (
        <div className="bg-white rounded-xl shadow-md mt-3 p-3 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">
                Last 7 Days
            </h3>
            <div className="w-full h-32">
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="day"
                            tick={{ fontSize: 10 }}
                            stroke="#888"
                        />
                        <YAxis domain={[0, 1]} hide />
                        <Tooltip
                            cursor={{ fill: "rgba(0,0,0,0.05)" }}
                            contentStyle={{
                                fontSize: "12px",
                                borderRadius: "8px",
                            }}
                        />
                        <Bar
                            dataKey="done"
                            radius={[6, 6, 0, 0]}
                            fill="#4ade80"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HabitSummary;
