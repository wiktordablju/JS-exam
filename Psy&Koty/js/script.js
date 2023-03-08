function enter(params) {
	params.src = "./img/" + params.id + "gs.jpg";
}

function out(params) {
	params.src = "./img/" + params.id + ".jpg";
}

function preview(params) {
	document.getElementById("imageView").src = "./img/" + params.id + ".jpg";
}
