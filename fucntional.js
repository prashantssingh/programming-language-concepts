// Prashant Singh
// 1001773374
// 03/03/2021

// Q1. An array with numbers 1-10:
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Q1. Inputtable array:", inputtable);

function returnMultiples(index, length, multiplier, baseArray, result) {
    // do the multiplication till the length of inputtable
    if (index > length)
        return result;
    
    // for each element in inputtable, mutliple the number with multiplier and
    // push it into the result-array
    result.push(baseArray[index] * multiplier);
    return returnMultiples(index + 1, length, multiplier, baseArray, result)
}


// Q2.a. Set of multiples of 5 between 1 and 51:
let fiveTable = [];
console.log("Q2a. Numbers in fiveTable array:", returnMultiples(0, inputtable.length-1, 5, inputtable, fiveTable));


// Q2.b. Set of multiples of 13 between 1 and 51:
let thirteenTable = [];
console.log("Q2b. Numbers in thirteenTable array:", returnMultiples(0, inputtable.length-1, 13, inputtable, thirteenTable));

// Q2.c. Set of squares of the numbers in inputtable:
function returnSquares(index, length, baseArray, result) {
    // make squares of each number till the length of inputtable
    if (index > length)
        return result;
    
    // for each number in inputtable, multiple the number with its own value
    // and push it into the result array
    result.push(baseArray[index] * baseArray[index]); 
    return returnSquares(index + 1, length, baseArray, result)
}

let squaresTable = [];
console.log("Q2c. Numbers in thirteenTable array:", returnSquares(0, inputtable.length-1, inputtable, squaresTable));


// Note that Q3 and Q4 has been merged to form a generic function that is 
// Q3. Get the odd multiples of 5 between 1 and 100.
function returnCustomMultiples(start, end, multiple, odd, result) {
    // do below operation till the value of end
    if (start > end)
        return result;
    
    // for the current element, if odd is set, then check if it is divisible by the
    // multiple and not divisible by 2 (not odd) 
    // else -- it is even and needs to be included only in even multiples
    if (odd){
        if ((start % multiple == 0 && start % 2 != 0))
            result.push(start);
    } else {
        if ((start % multiple == 0 && start % 2 == 0))
            result.push(start);
    }
    
    return returnCustomMultiples(start + 1, end, multiple, odd, result)
}

let oddMultiples0f5 = [];
console.log("Q3. Odd multiples of 5 between 1 and 100:", returnCustomMultiples(1, 100, 5, true, oddMultiples0f5));


// Q4. Get the sum of even multiples of 7 between 1 and 100.
let evenMultiples0f7 = [];
console.log("Q4a. Even multiples of 7 between 1 and 100:", returnCustomMultiples(1, 100, 7, false, evenMultiples0f7));

function returnSumOfEvenMultiples0f7(startIndex, endIndex, arr, result) {
    if (startIndex > endIndex)
        return result;
    
    // recursively add each element in arr to the result and return the final value
    result += arr[startIndex];
    
    return returnSumOfEvenMultiples0f7(startIndex + 1, endIndex, arr, result)
}

let sumOfEvenMultiples0f7 = 0;
console.log("Q4b. Sum of even multiples of 7 between 1 and 100:", returnSumOfEvenMultiples0f7(0, evenMultiples0f7.length-1, evenMultiples0f7, sumOfEvenMultiples0f7));



// Q5. Use currying to rewrite the function below: 
//       function cylinder_volume(r, h){
//           var volume = 0.0;
//           volume = 3.14 * r * r * h;
//           return volume;
//       }
function cylinderVolumeWithR(r){
    return function cylinderVolumeWithH(h) {
        var volume = 0.0;
        volume = 3.14 * r * r * h;
        return volume;
    }
}

console.log("Q5. Cylinder volume using curried function: ", cylinderVolumeWithR(5)(10));

makeTag = function(beginTag, endTag){
    return function(textcontent){
        return beginTag +textcontent +endTag;
    }
}


// Generate tags for each table-tags with indentation
const tableTag = makeTag("<table>", "\n</table>"); 
const tableRowTag = makeTag("\n\t<tr>", "\n\t</tr>");
const tableDataTag = makeTag("\n\t\t<td>", "</td>");

// form table with two different table-data inside
const row = tableRowTag(tableDataTag("Noah Jone") + tableDataTag("27")) + tableRowTag(tableDataTag("Nora Jone") + tableDataTag("26"));

console.log("Q6. HTML wrapped using closure:");
console.log(tableTag(row));