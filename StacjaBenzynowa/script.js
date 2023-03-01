function obliczcenepaliwa() {
	let rodzaj = document.getElementById("rodzajPaliwa").value;
	rodzaj = parseFloat(rodzaj);
	let ilosc = document.getElementById("litry").value;
	ilosc = parseFloat(ilosc);
	let koszt = 0;
	switch (rodzaj) {
		case 1:
			koszt = ilosc * 4;
			break;
		case 2:
			koszt = ilosc * 3.5;
			break;
		case 3:
			koszt = ilosc * 2;
			break;
	}
	document.getElementById("koncowacenapaliwa").innerHTML =
		"Koszt paliwa " + koszt + " zł";
}
