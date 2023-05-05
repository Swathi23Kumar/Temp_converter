const calculatetemp = () =>{

	const numbertemp = document.getElementById('temp').value;
	//console.log(numbertemp);
	const tempSelected = document.getElementById('temp_diff');
	const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

const celToFah = (cel) => {
	let fahrenheit =Math.round((cel* 9/5) +32);
	return fahrenheit;
}


const fehToCel = (fah) => {
	let celcius =Math.round((fah -32) * 5/9);
	return celcius;
}

	let result;

	if(valueTemp == 'cel'){
		result= celToFah(numbertemp);
		document.getElementById('resultcontainer').innerHTML = `= ${result}°Fahrenheit`;
	}
	else{
		result= fehToCel(numbertemp);
		document.getElementById('resultcontainer').innerHTML = `= ${result}°Celsius`;
	}



}
