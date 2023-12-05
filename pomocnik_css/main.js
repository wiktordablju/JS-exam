const btn = document.querySelector("#generate")
const first = document.querySelector("#first")
const second = document.querySelector("#second")
const third = document.querySelector("#third")
const fourth = document.querySelector("#fourth")
const fifth = document.querySelector("#fifth")

function changeColors() {
	const color = Number(document.querySelector("#color").value)
	first.style = `background-color: hsl(${color}, 100%, 50%)`
	second.style = `background-color: hsl(${color}, 80%, 59%)`
	third.style = `background-color: hsl(${color}, 60%, 50%)`
	fourth.style = `background-color: hsl(${color}, 40%, 50%)`
	fifth.style = `background-color: hsl(${color}, 20%, 50%)`
}

btn.addEventListener("click", changeColors)
