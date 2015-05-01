function changeWidth() {
	var column1 = document.getElementById('column1');
	column1.style.width = "50%";
}

function randomMove() {
	var button1 = document.getElementById('x');
	button1.style.position = "fixed";
	button1.style.top = Math.random() * 800 + 'px';
	button1.style.left = Math.random() * 1500 + 'px';
}