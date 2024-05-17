//             Q1


// const str = prompt('Enter a string to check it"s number of vowels !').toLowerCase();
// let vowels = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//         vowels += 1;
//     }
// }
// console.log(vowels);







//             Q2


// let array = [];

// let arrayLength = +prompt('How many numbers do you want to add?');

// for (let i = 0; i < arrayLength; i++) {
//     array[i] = +prompt(`Enter the number at index ${i}`);
// }

// let biggestNum = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > biggestNum) {
//         biggestNum = array[i];
//     }
// }

// console.log(biggestNum);




//             Q3


// const str = prompt(`Enter a word and I'll tell you if it's a palindrome or not!`);

// let reverseStr = '';

// for (let i = str.length-1; i >= 0; i--) {
//     reverseStr += `${str[i]}`
// }

// if (str === reverseStr) {
//     console.log('the given word is a palindrome');
// }else{
//     console.log('the given word is not a palindrome');
// }




//             Q4



// let array = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

// let div = document.querySelector('.div');

// for (let i = 0; i < array.length; i++) {
//     div.innerHTML += `
//     <div style='width:100px;height:100px;background-color: ${array[i]};'>${array[i]}</div>
//     `
// }