function obliczanie() {
	let x = document.getElementById("num").value;
	let suma = x * 2 - 0.1 * 2 * x;
	let suma2 = x * 1 - 0.2 * 1 * x;

	if (x >= 1 && x <= 50 && document.getElementById("check").checked == false) {
		document.getElementById("wynik").innerHTML =
			"Koszt ogłoszen: " + x * 2 + " PLN";
	} else if (
		x >= 1 &&
		x <= 50 &&
		document.getElementById("check").checked == true
	) {
		document.getElementById("wynik").innerHTML =
			"Koszt ogloszen: " + suma + " PLN";
	} else if (x >= 51 && document.getElementById("check").checked == false) {
		document.getElementById("wynik").innerHTML =
			"Koszt zgloszen: " + x * 1 + " PLN";
	} else if (x >= 51 && document.getElementById("check").checked == true) {
		document.getElementById("wynik").innerHTML =
			"Koszt ogloszen: " + suma2 + " PLN";
	} else {
		document.getElementById("wynik").innerHTML = "Wprowadz dane";
	}
}
