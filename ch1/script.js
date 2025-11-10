// document.getElementById("btn").addEventListener("click", function () {
//     document.body.style.backgroundColor = getRandomColor();
// });

// function getRandomColor() {
//     var letter = "0123456789ABCDEF";
//     var color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letter[Math.floor(Math.random() * letter.length)];
//     }
//     console.log(color);

//     return color;
// }

// method 1
// let count = 0;

// document.getElementById("add").addEventListener("click", function () {
//     count += 1;
//     document.getElementById("num").textContent = count;
// });
// document.getElementById("sub").addEventListener("click", function () {
//     if (count > 0) {
//         count -= 1;
//     }
//     document.getElementById("num").textContent = count;
// });

// method 2
// const numEl = document.getElementById("num");

// const updateCounter = (change) => {
//     count = Math.max(0, count + change);
//     numEl.textContent = count;
// };

// document.getElementById("add").addEventListener("click", () => updateCounter(1));
// document.getElementById("sub").addEventListener("click", () => updateCounter(-1));
