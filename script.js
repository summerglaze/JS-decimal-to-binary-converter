const inputNumber = document.getElementById("decimal-input");
const convertButton = document.getElementById("btn-convert");
const resultDiv = document.getElementById("result");

const convertToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
            binary = (input % 2) + binary;
            input = Math.floor(input / 2);
        }
        
    resultDiv.innerText = binary;
}

const checkInput = () => {
    if (
        !inputNumber.value || isNaN(parseInt(inputNumber.value)) || parseInt(inputNumber.value) < 0
      ) {
        alert("Podaj liczbę większą lub równą 0");
        return;
      }
    
    convertToBinary(parseInt(inputNumber.value));
    inputNumber.value = "";
}

convertButton.addEventListener("click", checkInput);

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
