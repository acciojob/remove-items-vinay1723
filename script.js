//your JS code here. If required.

let formbutton = document.querySelector('input[type]');
let select = document.getElementById('colorSelect');


formbutton.addEventListener('click',(e) => {
	e.preventDefault();
	let options = select.options;
	
	for (let i = 0;i<options.length;i++) {
		if (select.value === options[i].textContent) {
			select.remove(i);
			break;
		}
	}
	
})