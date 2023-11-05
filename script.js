function calculateMinCost() {
    let ropeLengthList = document.querySelector("#rope-lengths").value;
    ropeLengthList = ropeLengthList.split(',').map(Number);

    if (ropeLengthList.length < 2) {
        // Handle cases with less than two ropes
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = "Minimum Cost: 0";
        return;
    }

    // Sort the array in ascending order
    ropeLengthList = ropeLengthList.sort((a, b) => a - b);

    let minCost = 0;

    while (ropeLengthList.length > 1) {
        // Get the two smallest rope lengths
        const smallest1 = ropeLengthList.shift();
        const smallest2 = ropeLengthList.shift();

        // Calculate the cost and update the list
        minCost += smallest1 + smallest2;
        ropeLengthList.push(smallest1 + smallest2);
        // Re-sort the array (you can use binary heap for optimization)
        ropeLengthList = ropeLengthList.sort((a, b) => a - b);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "Minimum Cost: " + minCost;
}





