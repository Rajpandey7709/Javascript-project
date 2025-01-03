let input = document.getElementById("userInput")


function logMessage() {
    let message = input.value
    console.log("log:" , message)
}

function warnMessage() {
    let message = input.value
    console.warn("warn:" , message)
}
function errorMessage() {
    let message = input.value
    console.error("error:", message)
}

