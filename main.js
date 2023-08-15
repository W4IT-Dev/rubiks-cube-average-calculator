function calcAvg(averageOf, calculateOneAverage, index) {
    // The function calculates the average of time values in an array called 'times'.
    // 'averageOf' is the number of time values to include in the average calculation.
    // 'calculateOneAverage' is a boolean indicating whether to calculate just one average or multiple averages.
    // 'index' is the starting index for calculating a single average when 'calculateOneAverage' is true.

    if (times.length < averageOf)
        return "Not enough time entries to calculate average of " + averageOf;

    if (!calculateOneAverage) {
        // If 'calculateOneAverage' is false, calculate and return multiple averages.
        let averages = [];
        for (let i = 0; i < times.length; i++) {
            if (i >= averageOf - 1) {
                // Calculate the average of 'averageOf' values starting from the current index.
                // 'timesForAvg' holds the time values for the current average calculation.
                let timesForAvg = times
                    .slice(i - averageOf + 1, i + 1)
                    .map((timeObj) => timeObj.time);

                // Sort the times in ascending order and remove the smallest and largest times.
                timesForAvg.sort((a, b) => a - b);
                timesForAvg = timesForAvg.slice(1, timesForAvg.length - 1);

                if (timesForAvg.length === 0) {
                    averages.unshift("No valid times");
                } else {
                    // Calculate and store the average in the 'averages' array.
                    averages.unshift(
                        parseInt(
                            timesForAvg.reduce((sum, currentValue) => sum + currentValue, 0) /
                            timesForAvg.length
                        )
                    );
                }
            }
        }
        return averages; // Return an array of calculated averages.
    }

    // If 'calculateOneAverage' is true, calculate and return a single average.
    let timesForAvg = times
        .slice(index, index + averageOf)
        .map((timeObj) => timeObj.time);

    timesForAvg.sort((a, b) => a - b);
    timesForAvg = timesForAvg.slice(1, timesForAvg.length - 1);

    return parseInt(timesForAvg.reduce((sum, currentValue) => sum + currentValue, 0) / timesForAvg.length);
}

//Usage:
console.log(calcAvg(5, true, 2)
