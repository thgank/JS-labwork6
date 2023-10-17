function sortByLength(arr) {
    arr.sort(function (a, b) {
        const lengthComparison = a.length - b.length;
        if (lengthComparison === 0) {
            return arr.indexOf(a) - arr.indexOf(b);
        }
        return lengthComparison;
    });
    return arr;
}

function display() {
    const inputString = prompt("enter comma-separarted elements:");
    if (!inputString) {
        alert("no input");
        return;
    }

    const stringArray = inputString.split(",").map(str => str.trim());
    const sortedArray = sortByLength(stringArray);

    alert("Sorted Array: " + sortedArray.join(", "));
}
