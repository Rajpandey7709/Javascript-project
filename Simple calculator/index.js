
function addNumber() {
    const input1 = Number(document.getElementById("num1").value);
    const input2 = Number(document.getElementById("num2").value);
    const result = input1 + input2
    document.getElementById("result").textContent = "Result:"+result;
    
}
function subtractNumber() {
    const input1 = Number(document.getElementById("num1").value);
    const input2 = Number(document.getElementById("num2").value);
    const result = input1 - input2
    document.getElementById("result").textContent = "Result:"+result;
    
}
function multiplyNumber() {
    const input1 = Number(document.getElementById("num1").value);
    const input2 = Number(document.getElementById("num2").value);
    const result = input1 * input2
    document.getElementById("result").textContent = "Result:"+result;
    
}
function divideNumber() {
    const input1 = Number(document.getElementById("num1").value);
    const input2 = Number(document.getElementById("num2").value);
    const result = input1 / input2;
    document.getElementById("result").textContent = "Result: " + result;
}
