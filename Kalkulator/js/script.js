function count() {
	let firstNumber = Number(document.getElementById("firstNumber").value);
	let secondNumber = Number(document.getElementById("secondNumber").value);
	let result;
	let resultOutput = document.getElementById("result");
	let operation = document.getElementById("operation").value;

	switch (operation) {
		case "+":
			result = firstNumber + secondNumber;
			resultOutput.innerHTML = result;
			break;

		case "-":
			result = firstNumber - secondNumber;
			resultOutput.innerHTML = result;
			break;

		case "*":
			result = firstNumber * secondNumber;
			resultOutput.innerHTML = result;
			break;

		case "/":
			result = firstNumber / secondNumber;
			resultOutput.innerHTML = result;
			break;

		case "^":
			result = firstNumber ** secondNumber;
			resultOutput.innerHTML = result;
			break;

		case "%":
			result = firstNumber % secondNumber;
			switch (result) {
				case 0:
					resultOutput.innerHTML = `${result} liczba ${firstNumber} jest podzielna przez ${secondNumber}`;
					break;
				default:
					resultOutput.innerHTML = `${result}, liczba ${firstNumber} nie jest podzielna przez ${secondNumber}`;
					break;
			}
			break;
		case "v":
			result = secondNumber ** (1 / firstNumber);
			resultOutput.innerHTML = result;
			break;
	}
}
