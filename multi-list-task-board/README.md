# 🧠 React Core Concepts

## 1. State Management (`useState`)
I managed multiple layers of state: tasks, editing state, drag state, etc.

## 2. Side Effects (`useEffect`)
I used this to sync state with `localStorage` — essential for persistence logic.

## 3. Conditional Rendering
I displayed different UI (edit mode vs. view mode) based on state.

## 4. Component Re-render Triggers
I saw how React re-renders only on state change, not variable change.

# 🧩 Data Handling Logic

## 1. Dynamic Data Structures
I managed an array of objects (`tasks`) and updated it immutably using `map`, `filter`.

## 2. Persistent Storage (LocalStorage)
I saved and loaded state between sessions — simple but critical for front-end apps.

## 3. Status-based Filtering
I rendered columns dynamically by filtering tasks by `status`.

# 🖱️ User Interaction / DOM Skills

## 1. Drag-and-Drop API
I implemented `onDragStart`, `onDragOver`, `onDrop` to move items between lists.

## 2. Editable Inline Forms
I learned how to temporarily swap content for inputs when editing.

## 3. Event Handling
I used click, double-click, and drag events correctly in React context.

# 🎨 UI & UX Concepts

## 1. Column-based Layout (Flex/Grid)
I organized multiple lists side-by-side, a common UI pattern.

## 2. Visual Feedback
I'm aware of the need for highlighting and visual cues for better UX (working on implementing this next).

# ⚙️ Code Architecture

## 1. Refactoring for Reusability
I realized the repetition problem and learned about componentization.

## 2. Component Isolation
My project is ready to be split into `Task`, `Column`, and `Board` components — a big real-world step I'll apply next.

## 3. Functional Thinking
I wrote most of my logic as pure, composable functions — that's how React code scales.