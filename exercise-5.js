// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['1. milk', '2. bread', '3. cheese'];

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(item => console.log(item));

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
shoppingList.forEach(item => {
    let elementLi = document.createElement('li');
    // Method 1: Edit textContent before appending the child because if the textContent is changed after appending the child, the DOM will be rendered first, then after the textContent is changed, the DOM will be re-rendered again, which affects performance.
    elementLi.textContent = item;
    document.querySelector('ul').appendChild(elementLi);


    // Method 2: Not as preferable as unsure if it works for all browsers and can be dangerous when it receives info from other sources which may contain malicious html scripts.
    // elementLi.innerHTML = item;
    // document.querySelector('ul').appendChild(elementLi);
});

// 4. Create a new array `numbers` with a few numeric elements
const numbers = [0, 1, 2, 3, 4];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);
