function calculateMinCost() {
  //your code here
  let string = document.getElementById("rope-lengths").value;

	let arr = string.split(",");
	let finalValue =0;
	while(arr.length > 1){
		arr.sort((a,b) =>{return(a-b)});
		let value = parseInt (arr.shift());    // converts to int and holds first element in the array.
		let value1 = parseInt(arr.shift());    // hold 2nd element.
		let mainValue = value + value1;
		finalValue = finalValue + mainValue;
		arr.push(mainValue);

	}
  let result = document.getElementById("result");
	result.innerText = finalValue;
	return finalValue;

}

// function calculateMinCost() {
//     let ropeLengthList = document.querySelector("#rope-lengths").value;
//     ropeLengthList = ropeLengthList.split(',').map(Number);

//     if (ropeLengthList.length < 2) {
//         // Handle cases with less than two ropes
//         const resultDiv = document.getElementById('result');
//         resultDiv.innerText = "Minimum Cost: 0";
//         return;
//     }

//     // Sort the array in ascending order
//     ropeLengthList = ropeLengthList.sort((a, b) => a - b);

//     let minCost = 0;

//     while (ropeLengthList.length > 1) {
//         // Get the two smallest rope lengths
//         const smallest1 = ropeLengthList.shift();
//         const smallest2 = ropeLengthList.shift();

//         // Calculate the cost and update the list
//         minCost += smallest1 + smallest2;
//         ropeLengthList.push(smallest1 + smallest2);
//         // Re-sort the array (you can use binary heap for optimization)
//         ropeLengthList = ropeLengthList.sort((a, b) => a - b);
//     }

//     const resultDiv = document.getElementById('result');
//     resultDiv.innerText = minCost;
// }






