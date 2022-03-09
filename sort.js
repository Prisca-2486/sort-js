// 1. Reverse and Sorting an Array:-

// Reverse:- 'a complete change of direction or action.'

// numbers:

const numbers = [1,2,3,4,5];

const reversedNumbers = numbers.reverse();

console.log(reversedNumbers);

// strings:

const names = ['Apple', 'Ball', 'Cat', 'Dog'];

const reversedNames = names.reverse();

console.log(reversedNames);



// Sort():-
//sort means:-to resolve or the arrangement of data in a prescribed sequence.
//by default, the sort() function sorts values as strings. 
//The default order is ascending.

// strings:-

const names1 = ['sindhu', 'indu', 'bindu', 'lima'];

const sortedNames = names1.sort();

console.log(sortedNames);



//numbers:-

const num = [1,6,5,4,2];

const sortedNum = num.sort();

console.log(sortedNum);


//when there is double digit number in an array, then we have to use comparator function as follows:-

const num1 = [10,6,50,4,25]; // because it's not sorted  in the order as we want.



//COMPARATOR FUNCTION :- It allows us to take  control of javascript sort() function.
//To do things beyond just sorting strings in ascending order.

//Comparator function does three way comparision:-(comparision between number 'a' and number 'b') (a-b)
//1. <0  === a will be sorted before b
//2. >0  === b will be sorted before a
//3. =0  === no change will be done to their positions.

//Example:- ASCENDING ORDER

const nbr = [10, 6, 4, 50, 25];

const sortedNbr = nbr.sort(function (a, b){
  return a-b
})

console.log(sortedNbr);



// a-b : a = 10, b = 6 ;          10-6 = 4 > 0    ===  6 will be sorted before 10.
//       a = 6; b  = 4;           6-4 = 2 > 0     === 4 before 6.
//       a = 6 ; b = 50 ;         6-50 = -44 < 0  === 6 before 50.

//Example:- DESCENDING ORDER

const nbr1 = [10, 6, 4, 50, 25];

const sortedNbr1 = nbr.sort(function (a, b){
  return b-a
})

console.log(sortedNbr1);





//Array reduce:-

// reduces all elements in an array into a single value. 
// CALL BACK ---> arrow function.
// two parameters:- ACCUMULATOR & CURRENTVALUE.
// ACCUMULATOR-----> INITIAL VALUE

// Eg.
// number:

const number = [1,2,3,4,5];   // AIM:- REUDCE BY ADDING ALL ELEMENTS (SUM)

const sum = number.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
});

console.log(sum);




// ACCUMULATOR         +         CURRENTVALUE     =      RESULT
//   1                               2                    3
//   3                               3                    6
//   6                               4                    10
//   10                              5                    15

// strings:

const strings = ['abcd', 'efgh', 'ijkl', 'mnop'];

const oneString = strings.reduce((acc, curr)=>{
  return acc + curr 
});

console.log(oneString);

