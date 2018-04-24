//Object destructruing

// const person = {
//   name: 'Tuomas',
//   age: 26,
//   location: {
//     city: 'Helsinki',
//     temp: 7
//   }
// };
//
// const {name, age} = person;
// console.log(`${name} is ${age}`)
//
// const {city, temp: temperature} = person.location
// if (city && temperature) {
//   console.log('löytyy')
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };


// const {name: publisherName = 'self-published'} = book.publisher;
//
// console.log(publisherName);


//ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Penssylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2,50', '$2.75'];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
