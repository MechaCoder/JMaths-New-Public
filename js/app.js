//console.log("m.p. > start");
var CanvasIDs = ['number1units', 'number1tens', 'number2units' ,'number2tens']

var canvasData = { //one place to customeion useig
	Context: "2d", 
	lineWidth: 8, 
	lineColors: ['#7A942E','#FB8136','#48929B','blue'],
	canvasSize: [],
	lineSpaceing: 50,
};
// canvasData['lineSpaceing']

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

function renderCanvas1(int1){
	var Cmax = [1000,1000];
	var Cmin = [0,0];
	var loopVal = 0
	console.log(int1);
	while(loopVal != int1){
		Cmin[1] = Cmin[1] + canvasData['lineSpaceing']; console.log(Cmax[1]);
		Cmax[0] = Cmax[0] - canvasData['lineSpaceing']; console.log(Cmax[0]);
		lineDraw(0, Cmin, Cmax, 0 );
		loopVal = loopVal + 1;
	}
}

function renderCanvas2(int1){
	var Cmax = [1000,1000];
	var Cmin = [0,0];
	var loopVal = 0
	console.log(int1);
	while(loopVal != int1){
		Cmin[0] = Cmin[0] + canvasData['lineSpaceing']; console.log(Cmax);
		Cmax[1] = Cmax[1] - canvasData['lineSpaceing']; console.log(Cmax);
		lineDraw(1, Cmin, Cmax, 1 );
		loopVal = loopVal + 1;
		console.log( 'Cmin: ' + Cmin + ", Cmax: " +  Cmax );
	}}
	function renderCanvas3(int1){
	var Cmax = [1000,0];
	var Cmin = [0,1000];
	var loopVal = 0
	console.log(int1);
	while(loopVal != int1){
		Cmin[0] = Cmin[0] + canvasData['lineSpaceing']; console.log(Cmax);
		Cmax[1] = Cmax[1] + canvasData['lineSpaceing']; console.log(Cmax);
		lineDraw(2, Cmin, Cmax, 2 );
		loopVal = loopVal + 1;
		console.log( 'Cmin: ' + Cmin + ", Cmax: " +  Cmax );
	}
}

function renderCanvas4(int1){
	var Cmax = [0,1000];
	var Cmin = [1000,0];
	var loopVal = 0
	console.log(int1);
	while(loopVal != int1){
		Cmin[1] = Cmin[1] - canvasData['lineSpaceing']; console.log(Cmax);
		Cmax[0] = Cmax[0] - canvasData['lineSpaceing']; console.log(Cmax);
		lineDraw(3 , Cmin, Cmax, 3 );
		loopVal = loopVal + 1;
		console.log( 'Cmin: ' + Cmin + ", Cmax: " +  Cmax );
	}}
function rendFullCanvas(int0, int1, int2, int3){
	if(int0 < 9){
		renderCanvas1(int0)
	}
	if(int1 < 9){
		renderCanvas2(int1)
	}
	if(int2 < 9){
		renderCanvas3(int2)
	}
	if(int3 < 9){
		renderCanvas4(int3);
	}
}
$(document).ready(function() {
	clearAllCanvas();
	canvasDataGet();
	rendFullCanvas(1,2,3,4);
	//console.log("m.p. > finshed");
})

//console.log("m.p. > loaded");