// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = ['david', 'gordon', 'sahil'];
console.log(`1. The 'names' array is`, names)// ${names}`);

// 2. Log the value of the third element in `names` to the console
console.log(`2. The third element is`, names[2]);

// 3. Log the value of the `names` array's `length` property to the console
console.log('3.', names.length);


// 4. Set the value of the `length` property to `1`
names.length = 1;


// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log('6. The value of the length property has been changed to', names.length);

// 7. Log the entire `names` array to the console again
console.log('7. The new array becomes', names)

// 8. Add a few more elements to the array using `push`
names.push('element1');
names.push('element2');
names.push('element3');

// 9. Log the last element of the array to the console
console.log('9. The last element is',names[names.length - 1]);

// 10. Log the second last element of the array to the console
console.log('10. The second last element is',names[names.length - 2]);

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
const pElements = document.querySelectorAll('p');
pElements[1].textContent = "JavaScript was here!";
// console.log(pElements);

// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const namesString = names.join("<br>");
// console.log(namesString);

// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
pElements[0].innerHTML = namesString;
// pElements[0].textContent = namesString;
console.log('13. Using textContent will print the html code onto the screen.')
