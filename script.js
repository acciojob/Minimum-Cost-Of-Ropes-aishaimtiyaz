function calculateMinCost() {
  //your code here
	let minCost=0;
let ropeLengthList = document.querySelector("#rope-lengths").value;
ropeLengthList = ropeLengthList.split(',').map(Number);
	while(ropeLengthList.length>0)
		{
			ropeLengthList = ropeLengthList.sort((a,b)=>{return a-b;});
			minCost = ropeLengthList[0]+ropeLengthList[1];
			ropeLengthList = ropeLengthList.slice(2,ropeLengthList.length);
			ropeLengthList.push(minCost);
		}  
	const resultDiv = document.getElementById('result');
            resultDiv.innerText = minCost;
}





