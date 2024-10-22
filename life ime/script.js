function Calculate() {
    // Get the input values
    let favoriteSnack = document.getElementById("favoriteSnack").value;
    let currentAge = document.getElementById("currentAge").value;
    let maximumAge = document.getElementById("maximumAge").value;
    let estimatedAmountPerDay = document.getElementById("estimatedAmountPerDay").value;

    // Validate that all values are provided
    if (!favoriteSnack || !currentAge || !maximumAge || !estimatedAmountPerDay) {
        // Show an error message if any field is empty
        document.getElementById("result").innerHTML = "Please fill all the fields.";
        return;
    }

    // Convert values to numbers for the calculation
    currentAge = parseInt(currentAge);
    maximumAge = parseInt(maximumAge);
    estimatedAmountPerDay = parseInt(estimatedAmountPerDay);

    // Additional validation: Ensure age and amount values are numbers
    if (isNaN(currentAge) || isNaN(maximumAge) || isNaN(estimatedAmountPerDay)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Check for logical errors: current age should be less than maximum age
    if (currentAge >= maximumAge) {
        document.getElementById("result").innerHTML = "Current age must be less than maximum age.";
        return;
    }

    // Calculate the remaining years and total amount needed
    let remainingYears = maximumAge - currentAge;
    let total = remainingYears * 365 * estimatedAmountPerDay;

    // Display the result
    document.getElementById(
        "result"
    ).innerHTML = `You will need ${total} ${favoriteSnack} to last until the old age of ${maximumAge}.`;
}
