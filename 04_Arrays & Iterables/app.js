const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Creates an array with length of 5
const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2, 3, 4, 5);
console.log(yetMoreNumbers);

// Creates an array with an iterable on an array like object
const moreMoreNumbers = Array.from('Hi!');
console.log(moreMoreNumbers);

const listItems = document.querySelectorAll('li');
const listItemsToArray = Array.from(listItems);
console.log(listItems);
console.log(listItemsToArray);

// We can store mixed data types in arrays
const hobbies = ['Sports', 'Music', 'Cooking'];
const personalData = [30, 'Max', { moreDetail: [] }];
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
