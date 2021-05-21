function convertFahrtoCelsius() {
    let convertTemp = celsius;
    let convertFTempVal = parseFloat(document.getElementById("fTemp").Value);
    let convertCTempVal = (fTempVal - 32) * 5 / 9;
    convertCTempVal.toFixed(4);
    return false;
    console.log(convertFahrtoCelsius(0))
}

function checkYuGiOh() {
    for (let n = 1; n <= 100; n++) {
        if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
            console.log("YuGiOh");
        } else if (n % 2 === 0) {
            console.log("Yu");
        } else if (n % 3 === 0) {
            console.log("Gi");
        } else if (n % 5 === 0) {
            console.log("Oh");
        } else {
            console.log(n);
        }
    }
}