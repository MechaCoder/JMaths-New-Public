
function makeRend() {
	var number1 = document.getElementById('number1').value;
	console.log(number1);
	var number2 = document.getElementById('number2').value;
	console.log(number2);

	var num1_1 = number1.slice(0,1);
	var num1_2 = number1.slice(1,2);
	//
	var num2_1 = number2.slice(0,1);
	var num2_2 = number2.slice(1,2);
	rendFullCanvas(num1_1,num1_2,num2_1,num2_2);
};
