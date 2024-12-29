// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")
console.log(countEl)// pass in arguments
let savedCountEl = document.getElementById("saved-count")
console.log(savedCountEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function save() {
    savedCountEl.innerText = count;
    console.log("saved count:",count)
}
