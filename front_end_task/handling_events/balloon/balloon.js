'use-strict';

const balloon = document.querySelector('p');
let initialballoonSize = 10;
let balloonSize = initialballoonSize;
let balloonSizeInPX;

window.addEventListener('keyup', (event) => {
	if (event.key == 'ArrowUp') {
		if (balloonSize <= 100) {
			balloonSize += balloonSize * 0.1;
			balloonSizeInPX = balloonSize + 'px';
			if (balloonSize >= 100) {
				document.getElementById('p').innerHTML = '💥';
				removeEventListener('ArrowUp');
			} else {
				balloonSizeFunc();
			}
		}
	}
	if (event.key == 'ArrowDown') {
		if (balloonSize <= 100) {
			balloonSize -= balloonSize * 0.1;
			balloonSizeInPX = balloonSize + 'px';
			if (balloonSize >= 100) {
				removeEventListener('ArrowDown');
			} else {
				balloonSizeFunc();
			}
		}
	}
});

function balloonSizeFunc() {
	balloon.style.fontSize = balloonSizeInPX;
}
