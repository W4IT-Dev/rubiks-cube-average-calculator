# Rubik's Cube Average Calculator
> Calculate custom averages for Rubik's Cube timing.
<br>

Easy to understand and use

## What you need
An array with times in 1/10 seconds.
Example:
```JavaScript
let times = [{
   time: 10
},
{
   time: 50
},
{
   time: 47
}];
```

## How to use
```JavaScript
calcAvg(averageOf, calculateOneAverage, index);
```

'averageOf' is the number of time values to include in the average calculation.

'calculateOneAverage' is a boolean indicating whether to calculate just one average or irritate over the whole time array.

'index' is the starting index for calculating a single average when 'calculateOneAverage' is true.

## Usage
```JavaScript
console.log(calcAvg(5, true, 2);
```
