# Core Concepts I Learned From the Todo App

## 1. Controlled Inputs
I learned how to bind form fields to state and control their values instead of letting the DOM handle them on its own.

## 2. Managing Lists in State
I learned to store arrays in state, add items, remove items, and update items without mutating the original array.

## 3. Immutability in State Updates
I used `map`, `filter`, and the functional form of `setState` to avoid mutating state directly, which is required for React to re-render correctly.

## 4. Derived / Computed State
I didn't store filtered results separately. Instead, I computed them when needed, preventing data duplication and sync problems.

## 5. State Persistence with useEffect
I used `useEffect` to sync `todos` to `localStorage` only when todos changed, instead of sprinkling localStorage logic everywhere.

## 6. Conditional Rendering
I toggled between "view mode" and "edit mode" based on `editingId`, proving I understand UI state branching.

## 7. Input Validation
I prevented invalid input (e.g., adding empty tasks). Basic, but it shows my awareness of proper validation.

## 8. Multiple State Pieces Working Together
I managed:
* The full todo list
* Search filter
* Category filter
* Edit mode state
* Text being edited

This proves I can maintain state relationships, not just single variables.

## 9. Single Source of Truth
I stored only what must be stored (e.g., `editingId` instead of storing an entire duplicate todo object), avoiding unnecessary state duplication.

## 10. Basic UI/UX Interaction Patterns
I implemented:
* Double-click to edit
* Checkbox toggles done state
* Delete button removes item

This is real app behavior, not toy output.