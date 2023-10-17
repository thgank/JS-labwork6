let arr = [];
while (true) {
    let input = prompt("Enter a value or press enter to stop: ");
    if (input === null || input === "") {
        break;
    }
    arr.push(Number(input)); // Convert input to a number before pushing it to the array
}

if (arr.length < 2) {
    alert("Provide at least two values");
} else {
    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = "Original array: " + arr.join(", ");

    let largest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    for (let i = 1; i < arr.length - 1; i++) { 
        arr[i] = largest;
    }

    let secResultContainer = document.getElementById("updatedArr");

    secResultContainer.innerHTML = "Updated array: " + arr.join(", ");
}
