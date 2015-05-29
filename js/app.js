console.log("m.p. > start");

function render(ren, intv){
	var can1u = document.getElementById(ren);
	can1u = can1u.getContext('2d');
	can1u.beginPath();
	can1u.moveTo(0,0);
	can1u.lineTo(1000,1000);
	can1u.lineWidth = 4;
	can1u.strokeStyle = '#FB8136';
	can1u.stroke();
	console.log(intv);
}

$(document).ready(function() {
	render('number1units', 1);
	render('number1tens')
})

console.log("m.p. > finished");