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

function lineDraw(ren, start, end, lineColor){
	var can1u = document.getElementById( CanvasIDs[ren] ); console.log('m.p. >> ' + CanvasIDs[ren]);
	can1u = can1u.getContext( canvasData['Context'] );
	can1u.beginPath();
	can1u.moveTo(start[0], start[1]);
	can1u.lineTo( end[0], end[1] ) ;
	can1u.lineWidth = canvasData['lineWidth'];
	can1u.strokeStyle = canvasData['lineColors'][parseInt(lineColor)];
	can1u.stroke();
}

function renderCanvas(int1, int2){
	var Cmax = canvasData['canvasSize'];
	var Cmin = [0,0];
	var loopVal = 0
	console.log(int1);
	while(loopVal != int1){
		Cmin[1] = Cmin[1] + 100; console.log(Cmax[1]);
		Cmax[0] = Cmax[0] - 100; console.log(Cmax[0]);
		lineDraw(0, Cmin, Cmax, 0 );
		loopVal = loopVal + 1;
	}
}

$(document).ready(function() {
	clearAllCanvas();
	canvasDataGet();
	//lineDraw(0,[0,100],[900,1000]);

	renderCanvas(2);
	
	//console.log( canvasData['canvasSize'] );

	//console.log("m.p. > finshed");
})
//console.log("m.p. > loaded");