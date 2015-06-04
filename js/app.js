console.log("m.p. > start");

var mat_stuff = ()

var CanvasIDs = ['number1units', 'number1tens', 'number1ten' ,'number2units']

function renderTest(ren, intv){
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



function ClearCanvas(CanvasID){
	var CanID = document.getElementById(CanvasID);
	var CanC  = CanID.getContext('2d');
	CanC.clearRect(0,0,CanC.width,CanC.height);
}

function clearAllCanvas(){
	var canAmount = CanvasIDs.length;
	console.log('var - canAmount = ' + canAmount);

}

$(document).ready(function() {
	clearAllCanvas();
	render(CanvasIDs[0], 1);
	

	console.log("m.p. > finshed");
})

console.log("m.p. > loaded");