function order() {
	let shape = Number(document.getElementById("shapeNumber").value);
	let shapeOutput = document.getElementById("shape");

	shapeOutput.innerHTML = "Zamowiles zelka: ";
	switch (shape) {
		case 1:
			shapeOutput.innerHTML += "miś";
			break;
		case 2:
			shapeOutput.innerHTML += "zabka";
			break;
		case 3:
			shapeOutput.innerHTML += "serce";
			break;
		default:
			shapeOutput.innerHTML += "inny";
	}
	let color = [
		document.getElementById("red").value,
		document.getElementById("green").value,
		document.getElementById("blue").value,
	];

	let buttonColor = document.getElementById("color");
	buttonColor.style.backgroundColor =
		"rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}
