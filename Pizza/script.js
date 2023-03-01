function obliczanie() {
	let liczba = document.getElementById("num").value;
	let suma = liczba * 2;
	if (document.getElementById("check").checked == true) {
		document.getElementById("wynik").innerHTML =
			"Dowieziemy twoja pizze za darmo";
	} else if (document.getElementById("check").checked == false) {
		document.getElementById("wynik").innerHTML =
			"Dowoz bedzie cie kosztowal " + suma + " złotych";
	}
}
