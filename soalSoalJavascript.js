// segitiga
function cetakBintang(){
    let n = 6;
    for (let index = 1; index <= n; index++) {
        let spasi, bintang;
        let line = "";
        if(index < n){
            spasi = n-index;
            bintang = index
        } else if(index == n) {
            spasi = 0;
            bintang = n;
        }
        if(spasi != 0){
            while(spasi>0){line+=" "; spasi--;};
        }
        if(bintang != 0){
            while(bintang>0){
                if(bintang%2==1){line+="*"; }
                else{line+="#";}
                bintang--;
            };
        }
        console.log(line);
        console.log("\n");
    }
}
cetakBintang();

// sorting
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] > pivot) {
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
arr = [30,32,24,26,19,17,81];
sortArray(arr, 0, arr.length-1);
arr.forEach(function(element){
    console.log(element);
});

// balik string
function reverseString(sentence){
    var reversed = "";
    var letter = sentence.split("");
    for(var i = letter.length-1; i >= 0; i--) {
        reversed+=letter[i];
    }
    console.log(reversed);
    if(sentence.toLowerCase() == reversed.toLowerCase()) {console.log("Palindrom")}
    else{console.log("Bukan palindrom")};
}
reverseString("Rosa");

// cari kemungkinan hasil kali terbesar dari 3 bilangan array
function findMaxProduct(arr){
    if(arr.length < 3) {console.log("error, array length less than 3"); return;}
    let maxProduct = 1;
    let uniqueArr = arr.filter(function (v, i, self) {
        return i == self.indexOf(v);
    });
    uniqueArr.sort(); uniqueArr.reverse();
    for (let index = 0; index < 3; index++) {
        if(index > uniqueArr.length-1) break;
        maxProduct *=  uniqueArr[index];
    }
}
arr = [1];
findMaxProduct(arr);