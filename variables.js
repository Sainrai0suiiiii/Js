let firstName = "sain";
console.log(typeof firstName);
console.log(firstName);


firstName = 100;
console.log(typeof firstName);
console.log(firstName);


firstName = true;
console.log(typeof firstName);
console.log(firstName);

const num = '133';
console.log(num);

// num = '122';
console.log(num);

// Object are nouns person place or thing/ reference type

let Midfielder = {
    Name : 'Sain Rai',
    Position: 'Attacking/defending/Center',
    Hight: 5.4,
    Weight: 60,   
    Salary: 700000
};
//  console.log(Midfielder.Name); accessing object (object.key)
console.log(Midfielder.Salary);
console.log(Midfielder.Position);
console.log(Midfielder.Hight);
console.log(Midfielder);

console.log(Midfielder['Position']); //bracket notation (object['key'])
Midfielder['Salary'] = '60098303';
console.log(Midfielder['Salary']);

let property ="Position";
console.log(Midfielder[property]);

console.log(Midfielder);