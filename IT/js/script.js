function test() {
	const button = document.querySelector('button[type="submit"]');
	const output = document.getElementById("output");

	button.onclick = () => {
		const checkbox = document.querySelector('input[type="checkbox"]');
		if (!checkbox.checked) {
			return (output.innerHTML = `<span style="color: red">Musisz zapoznac sie z regulaminem </span>`);
		} else {
			const [name, surname] = document.querySelectorAll('input[type="text"]');
			const service = document.querySelector("textarea");
			output.innerHTML = `${name.value.toUpperCase()} ${surname.value.toUpperCase()}<br>Treść twojej sprawy: ${
				service.value
			}<br>Na podany email zostanie wyslana oferta`;
		}
	};
}
