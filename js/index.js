// весь шпион целиком
let spy = document.getElementById(`spy`);
// сюда выводи координаты мышки
let resultClick = document.getElementById(`result-click`);
let resultType = document.getElementById(`result-type`)

document.addEventListener(`mousemove`, function(evt) {
	resultClick.innerHTML = evt.clientX + `x, ` + evt.clientY + `y`;
});

document.addEventListener(`click`, function(evt) {
	spy.style.top = evt.clientY - 70 + `px`;
	spy.style.left = evt.clientX - 60 + `px`;
});

let x = 0;
let y = 0;

document.addEventListener(`keydown`, function(evt) {
	resultType.innerHTML = evt.key;

	if (evt.key == "ArrowUp") {
		y -= 100;
	} else if (evt.key == "ArrowDown") {
		y += 100;
	} else if (evt.key == "ArrowLeft") {
		x -= 100;
	} else if (evt.key == "ArrowRight") {
		x += 100;
	}

	spy.style.top = y + `px`;
    spy.style.left  = x + `px`;
});