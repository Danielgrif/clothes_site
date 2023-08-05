// task 1

let letter = 'aaa@bbb@ccc';
letter = letter.split('@').join('!');
console.log(letter); // Output: 'aaa!bbb!ccc'

// task 2

let sentence = 'HELLOWORLD';
sentence = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
console.log(sentence); // Output: '

// task 3
let str = 'Hello, it is HTML';
console.log(str.split('HTML').join('not JS'));

// task 4
let person = 'alex';
person = person.charAt(0).toUpperCase() + person.slice(1);
console.log(person); // Output: 'Alex'

// task 5
let randomNumber = Math.random();
console.log(randomNumber.toFixed());

//task 6
let text = `Lex Luter has a big suit`
text = text.split('Lex Luter has a big suit').join('ALex')
console.log(text)


