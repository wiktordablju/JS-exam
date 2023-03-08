function count() {
	let data = document.getElementById("data").value;

	if (document.getElementById("20x20").checked == true) {
		document.getElementById(
			"output"
		).innerHTML = `Koszt malowania ${data}m2, wyniesie ${data * (35 * 2)}zł `;
	} else if (document.getElementById("25x12").checked == true) {
		document.getElementById(
			"output"
		).innerHTML = `Koszt malowania ${data}m2 wyniesie ${data * (40 * 2)} zł`;
	} else {
		document.getElementById("output").innerHTML = "WYBIERZ ROZMIAR PLYTKI!!!";
	}
}
