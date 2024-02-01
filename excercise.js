// JAVASCRIPT REVIEW
// excercise 1
    let a = 1;
    const b = 2;
    console.log(a,b);
    let fruits = ['manggo', 'apple', 'grapes', 'banana', 'melon'];
    fruits.push('dragon fruits'); console.log(fruits);
    fruits.splice(0, 1, 'mangosteen'); console.log(fruits);
    fruits.pop(); console.log(fruits);
// excercise 2
    let human = {
        'first_name': 'Rosa',
        'last_name': 'Cahyahadi',
        'hobbies': ['traveling', 'reading', 'singing'],
        'favorite_number': '9',
        'wear_glasses': false
    };
    console.log('Nama lengkap: '+human.first_name+' '+human.last_name);
    human.favorite_number = '2000'; console.log(human.favorite_number);
    human.hobbies.push('coding'); console.log(human.hobbies);
    human['lulusan'] = 'Hacktive8'; console.log(human.lulusan);
    human.hobbies.map((hobby) => {console.log(hobby)});
    console.log(Object.keys(human), Object.values(human));
    for (const [key, value] of Object.entries(human)) {
        console.log(key,': ',value);
    }
// excercise 3
    function getCurrentDate(){
        const currentDate = new Date();
        const dateFormatter = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
        const date = dateFormatter.format(currentDate);
        return date;
    }
    console.log(getCurrentDate());
// excercise 4
    function checkNumber(number){
        if(typeof number != "number") return "Invalid data";
        return number%2==0? "genap" : "ganjil";
    }
    console.log(checkNumber("3"));

// JAVASCRIPT LOGIC EXCERCISE
// excercise 1 halaman 9
function compareNumbers(firstNumber, secondNumber){
    if(firstNumber<secondNumber) return true;
    else if(firstNumber==secondNumber) return -1;
    else return false;
}
console.log(compareNumbers(1,2));
// excercise 2 
function reverseString(sentence){
    let letters = sentence.split("");
    let reversed = letters.reduce((result, letter) => {
        return result = letter + result;
    }, "");
    console.log(reversed);
    if(sentence.toLowerCase() == reversed.toLowerCase()) {console.log("Palindrom")}
    else{console.log("Bukan palindrom")};
}
reverseString("abaa");
// excercise 3 
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
function sortArray(arr, low, high){
    if (low < high) {
        let pi = partition(arr, low, high);
        sortArray(arr, low, pi - 1);
        sortArray(arr, pi + 1, high);
    }
}
function sortAlphabet(text){
    let letters = text.split("");
    sortArray(letters, 0, letters.length - 1);
    console.log(letters.join(''));
}
sortAlphabet("halo");
// excercise 4
    function isArithmatic(numbers){
        let result = true;
        let difference = numbers[0]-numbers[1];
        for (let index = 1; index < numbers.length-1; index++) {
            if(numbers[index] - numbers[index+1] != difference){result=false; break;};
        }
        console.log(result);
    }
    isArithmatic([5,2,1]);
// excercise 5
    function threeStepsAB(text){
        let status = false;
        text = text.replace(/\s+/g, '').toLowerCase();
        let letters = text.split("");
        for (let index = 0; index < letters.length-3; index++) {
            status = letters[index] == "a"? (letters[index+3] == "b"? true: false) : (letters[index] == "b"? (letters[index+3] == "a"? true : false) : false);
            if(status) break;
        }
        return status;
    }
    console.log(threeStepsAB("bacon and meat"));
// excercise 6
    function findGreatestCommonDivisor(firstNumber, secondNumber) {
        firstNumber = Math.abs(firstNumber);
        secondNumber = Math.abs(secondNumber);
        while(secondNumber) {
          let temp = secondNumber;
          secondNumber = firstNumber % secondNumber;
          firstNumber = temp;
        }
        return firstNumber;
      }
      
      console.log(findGreatestCommonDivisor(12, 16));
// excercise 7
    function isPrime(number){
        let prime = true;
        let half = Math.floor(number/2);
        for (let i = 2; i <= half; i++) {
            if(number%i==0) prime = false;
        }
        return prime;
    }
    console.log(isPrime(100000003));
// excercise 8
    function listPrimeNumber(firstNumber, secondNumber){
        let primeNumbers = [];
        for (let num = firstNumber+1; num < secondNumber; num++) {
            if(isPrime(num)) primeNumbers.push(num);
        }
        return primeNumbers;
    }
    console.log(listPrimeNumber(10,50));

// JAVASCRIPT CALLBACK AND PROMISE PRACTICE