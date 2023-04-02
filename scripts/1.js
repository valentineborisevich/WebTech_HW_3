function tempConvert(tempC) {
    var tempF = ((9 / 5) * tempC + 32);
    tempF.toFixed(1);
    alert(`Celsius temperature is ${tempC} degrees. Fahrenheit temperature is ${tempF}.`);
}

alert('I will convert Celsius degrees into Fahrenheit degrees.');
const celsius = Number.parseFloat(prompt("Please enter temperature in Celsius degrees."));
tempConvert(celsius);