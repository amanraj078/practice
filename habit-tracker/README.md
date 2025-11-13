# 🔹 Core React & State Management

I worked with multiple pieces of state (`habits`, `habitText`, `doneToday`, etc.) and learned how they interact with each other.

I structured state as arrays of objects, and updated them immutably with `map`, `filter`, and spread syntax.

I passed down props cleanly and lifted state to a parent when multiple components depended on the same data.

# 🔹 Persistence & Data Flow

I stored and synced data in localStorage with `useEffect`.

I avoided infinite loops by carefully setting dependencies in `useEffect`.

I managed derived state (like streaks) without saving it redundantly in storage.

# 🔹 Business Logic

I built toggle functionality that mutates nested state safely.

I designed a daily reset mechanism with `lastUpdatedDate`.

I implemented a streak calculation algorithm to detect consecutive days accurately.

# 🔹 Component Design

I broke my UI into small reusable components:
* `HabitTracker` – logic & state holder
* `HabitInput` – controlled input
* `HabitList` – list rendering
* `HabitItem` – individual habit logic & display
* `HabitSummary` – data visualization

# 🔹 Data Visualization (Recharts)

I used Recharts to visualize data dynamically from state.

I mapped custom datasets (like last 7 days) to chart input format.

I handled responsive layout with `<ResponsiveContainer>`.

# 🔹 Clean Coding & Problem Solving

I incrementally developed and tested small parts.

I debugged prop-passing and state sync issues.

I refactored into readable, maintainable code instead of piling logic in one place.