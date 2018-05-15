//Even or odd
//O(1) or constant order because algorithm is used for arithmetic operations

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

//Are you here?
//O(n^2) - Polynomial time because one loop inside of the other
function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//Doubler
//O(n) - Linear time size of data will inpact the time
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//Naive Search
//O(n) - Linear time size of data will inpact the time
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Creating pairs:
//O(n^2) - Polynomial time because one loop inside of the other
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//O(n) - Linear time. Larger numbers will loop logner
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

//An Efficient Search
//O(log(n)) - Logarithmic Time
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}


//Random element
//O(1) or constant order because we not looping/manipulating an array, so regardless the size of the data we doing same action
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Is it prime?
//O(n) - Linear time larger n will increase for loop time 
function isPrime(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
