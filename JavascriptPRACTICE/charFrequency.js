
// frequency count 
let str ="Hello Good Morning";
import { useNavigate } from 'react-router-dom';

let frequency= {};

for (let char of str){
    frequency[char]=(frequency[char]  ||0) + 1;
    }
    console.log(frequency);

 // remove duplicate array 
let arr=[2, 3, 4, 5, 6, 7, 8 ,9, 0, 2, 5, 8,  1];

 let uniqueArr = arr.filter((item, index)=>
arr.indexOf(item)=== index);

 console.log(uniqueArr);

 // arry second largest number

 let arry = [5, 10, 15, 20, 25, 30];

let first =-Infinity;
let second =-Infinity;
let third =-Infinity;

for(let num of arry){
    if(num>first){
    third = second;
    second=first
    first=num;
     } else if ( num >second && num < first){
          third=second
          second=num
     
    } else if (num> third && num<second){
        third=num;
    }
}

console.log("third largest nuber is :", third);

// ryming words

function  Anagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const freq={};

    for(let ch of str1){
        freq[ch] = (freq[ch] || 0) +1;
    }
    for(let ch of str2){
    if(!freq[ch]){

    }
    freq[ch]--;
    }
    return true;
}

console.log(Anagrams("listen", "slient"));
console.log(Anagrams("slow ", "fast"));
console.log(Anagrams("dog", "cat"));
console.log(Anagrams("call", "tall"));
console.log(Anagrams("male  ", "female"));
console.log(Anagrams("up ", "down"));

// 2D arrys

function sum2DArrys(arrys){
    let sum=0;

    for(let i=0 ; i<arrys.length; i++){
        for(let j=0; j<arrys[i].length; j++){
            sum += Number(arrys[i][j]);
        }
    }
    return sum;

}

const matrix =[
    ["3", "2", "1"],
    ["6", "4", "5"],
    ["9", "8", "7"]
];
console.log(sum2DArrys(matrix));

// find missing number

function missing(arr2,n){
 
     let expectedsum = (n *( n + 1 ))/ 2;

     let actualsum =0;

    

        for(let i =0; i< arr2.length; i++){
            actualsum += arr2[i];
        }
        return expectedsum - actualsum;
     }


const arr2=[ 1 , 2, 3, 5, 6, 7, 8,];
const n= 8;

console.log(missing(arr2,n));

// move zeroto end place

function Movezeroend(){

    let pos =0;

    for(let i =0; i< arr5.length; i++ ){
        if(arr5[i] !==0){
            arr5[pos]= arr5[i];
            pos++;

        }
    }
    for(let i= pos;i<arr5.length; i++){
        arr5[i]=0;
    }
    return arr5;
}

let arr5 = [0, 1 , 0, 2, 4,  5, 0 , 7, 8 ,9];
console.log(Movezeroend(arr5));


// reverse words 

function Reverseworld(){
    let words =Sentence.split(" ");


    for(let i= 0; i< words.length; i++){
    words[i]= words[i].split("").reverse().join("");

}

return words.join(" ");

}

let Sentence = "hello good eveing ";

console.log(Reverseworld(Sentence))


// factorial 


function factorial(n){
    n = Number(n);

if( ! Number.isInteger(n)){
    return "error : input must be an integerr.";

}

if(n < 0 ){
    return "error: factorial is not defined for negative number.";

}
if(n===0 ||n===1){
    return 1;
}

return n * factorial(n-1);

}

console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(-2));
console.log(factorial(2.5));
console.log(factorial("5"))

