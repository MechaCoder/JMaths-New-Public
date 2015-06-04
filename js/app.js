//console.log("m.p. > start");
var CanvasIDs = ['number1units', 'number1tens', 'number1ten' ,'number2units']

var canvasData = { //one place to customeion useig
	Context: "2d", 
	lineWidth: 8, 
	lineColors: ['red','black','blue','pink'],
	canvasSize: []
};
//write a fuction that captures the canvase size
function canvasDataGet(){
	var x = document.getElementById( CanvasIDs[0] );
	canvasData['canvasSize'][0] = x.width;
	canvasData['canvasSize'][1] = x.height;
}
function renderTest(ren, intv){
	var can1u = document.getElementById(ren);
	can1u = can1u.getContext( canvasData['Context'] );
	can1u.beginPath();
	can1u.moveTo(0,0);
	can1u.lineTo( parseInt(canvasData['canvasSize'][0]), parseInt(canvasData['canvasSize'][1]) ) ;
	can1u.lineWidth = canvasData['lineWidth'];
	can1u.strokeStyle = canvasData['lineColors'][0];
	can1u.stroke();
	//console.log("intv - " + intv);
}
function ClearCanvas(CanvasID){
	var CanID = document.getElementById(CanvasID);
	var CanC  = CanID.getContext('2d');
	CanC.clearRect(0,0,CanC.width,CanC.height);
}

function clearAllCanvas(){
	var canAmount = CanvasIDs.length;
	//console.log('var - canAmount = ' + canAmount);

}

function FullRender(int1, int2, int3, int4){
	var canvasObject1 = CanvasIDs[0];
	canvasObject1 = getContext( canvasData[Context] );
	canvasObject1.beginPath();
}	


$(document).ready(function() {
	clearAllCanvas();
	canvasDataGet();
	renderTest(CanvasIDs[0], 1);
	
	//console.log( canvasData['canvasSize'] );

	//console.log("m.p. > finshed");
})
//console.log("m.p. > loaded");