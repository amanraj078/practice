const input = document.getElementById("title");
const addBtn = document.getElementById("add");
const notes = document.getElementById("notesContainer");

addBtn.addEventListener("click", () => {
    const value = input.value.trim();

    const note = document.createElement("div");
    note.textContent = value;
    notes.appendChild(note);

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "X";
    dltBtn.addEventListener("click", () => {
        note.remove();
    });
    note.appendChild(dltBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    note.appendChild(editBtn);
    editBtn.addEventListener("click", editItem);

    input.value = "";
});

function editItem(event) {
    let item = event.target.innerHTML; //capture initial value of item
    let itemInput = document.createElement("input"); //input to replace the item
    itemInput.type = "text";
    itemInput.value = item; //sets the input value equal to initial value to edit
    itemInput.addEventListener("keypress", saveItem);
    event.target.parentNode.prepend(itemInput); //adds input to dom
    event.target.remove(); //remove the initial item from the dom
}
