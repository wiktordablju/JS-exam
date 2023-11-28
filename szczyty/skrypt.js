let activeImage = 1
const bigImg = document.querySelector("#duzy")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const miniImg = document.querySelectorAll(".miniatura")

function prevImage() {
	if (activeImage == 1) {
		bigImg.src = `./${5}.jpg`
		activeImage = 5
	} else {
		bigImg.src = `./${activeImage - 1}.jpg`
		activeImage -= 1
	}
}

function nextImage() {
	if (activeImage == 5) {
		bigImg.src = `./${1}.jpg`
		activeImage = 1
	} else {
		bigImg.src = `./${activeImage + 1}.jpg`
		activeImage += 1
	}
}

function changeMiniImg(event) {
	const clickedId = Number(event.target.id)

	bigImg.src = `./${clickedId}.jpg`
	activeImage = clickedId
}

nextBtn.addEventListener("click", nextImage)
prevBtn.addEventListener("click", prevImage)

for (const img of miniImg) {
	img.addEventListener("click", changeMiniImg)
}
