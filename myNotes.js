/*

DECLARING VARIABLES AND ASSINGING VALUES


// =-=-=-=-=-=-=-=- //
// The Odin Project //
// -=-=-=-=-=-=-=-= //
let admin;
let name = 'John'; // name is kind of a keyword, avoid it's use
admin = name; // although, name "variable" is deprecated

console.log(admin);







// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// Udemy JavaScript Zero to Expert 2023, by Jonas Schmedtmann //
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
//ASSIGMENT - Lecture Values and Variables
let country = "Brazil";
let continent = "South America";
let population = 210000000;
console.log(country);
console.log(continent);
console.log(population);
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //


//Data types examples

let javascriptIsFun = true;
console.log(javascriptIsFun);

//type number
console.log(typeof 23);

//type string
console.log(typeof '23');
console.log(typeof "23");
console.log(typeof 'Jonas');
console.log(typeof "Jonas");

//type boolean
console.log(typeof true);
console.log(typeof javascriptIsFun);

//Dynamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//type undefined
let year;
console.log(year);//value undefined
console.log(typeof year);//type undefined

//Dynamic typing
year = 1991;
console.log(typeof year);

//type null
console.log(typeof null); //considered legacy bug. Just don't touch it


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
//ASSIGMENT - Data types lecture
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //



// LET CONST VAR examples

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
//ASSIGMENT - let, const, var lecture
let language = 'portuguese';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //


let age = 30;
console.log(age);
age = 31; //mutated the variable
console.log(age);

const birthYear = 1991; //can't be mutated
console.log(birthYear);

var job = 'programmer'; //only taught for legacy reasons
console.log(job);
job = 'teacher'
console.log(job);

lastName = 'Schmedtmann';//it works, but is pretty terrible idea
console.log(lastName);



// MATHEMATICAL OPERATORS

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //
//ASSIGMENT - LECTURE BASIC OPERATORS
let halfPopulation = population/2;
console.log(++halfPopulation); //pre-increment mandatory, or else log doesn't print right
console.log(population > 6000000);
console.log(population < 33000000);
let description = "Brazil is in South America, and its 210 million people speak portuguese.";
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //


//subtraction
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);// 2 ** 3 means 2^3

//concatenation (not mathematical, just be advised)
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//assigment
let x = 10;
let y = 5;

//addition
let z = x + y;
console.log(z);

//assigment addition (will work with any operator)
z += 10; //same as z = z + 10
console.log(z);

//increment decrement
z++;
console.log(z);
z--;
console.log(z);

//COMPARISSON OPERATORS
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageJonas <= ageSarah);
console.log(ageJonas != ageSarah);
console.log(ageJonas == ageSarah);
console.log(ageJonas === ageSarah);

//BITWISE OPERATORS



PRECEDENCE ORDER (source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

-highest
18 - grouping (parentesis, module, norm... inside out)

17 - function call
17
17
17
17

16

15 - postfix increment/decrement

14 - prefix increment/decrement
14 - logical NOT (!)
14 - bitwise NOT (~)
14 - unary plus
14 - unary negative
14 - typeof
14 - 
14 - 
14 - 

13 - exponential (inside out) (what about roots?)

12 - multiplication
12 - division
12 - remainder (%)

11 - addition
11 - subtraction

10 - bitwise left shift (<<)
10 - bitwise right shift (>>)
10 - bitwise unsigned right shift (>>>)

09 - less than
09 - less than or equal (<=)
09 - greater than
09 - greater than or equal (>=)
09
09

08 - equality (==)
08 - inequality (!=)
08 - strict equality (===)
08 - strict inequality (!==)

07 - bitwise AND (&)

06 - bitwise XOR (^)

05 - bitwise OR (|)

04 - logical AND (&&)

03 - logical OR (||)
03

02 - ternary conditional ( _ ? _ : _ , right to left)
02 - (=>, right to left)
02 - assignments (=, +=, -=, *=, /=, **=, %=, <<=, >>=, >>>=, &=, ^=, |=, &&=, ||=, ??=, right to left <-- )
02
02
02

01 - commas/sequences (,)
-lowest


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
//CODING CHALLENGE #1
const initialMassMark = 78;
const heightMark = 1.69;
let markBMI;
markBMI = initialMassMark/(heightMark**2);
console.log(markBMI);

const initialMassJohn = 92;
const heightJohn = 1.95;
let johnBMI;
johnBMI = initialMassJohn/(heightJohn**2);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

const _initialMassMark = 95;
const _heightMark = 1.88;
let _markBMI;
_markBMI = _initialMassMark/(_heightMark**2);
console.log(_markBMI);

const _initialMassJohn = 85;
const _heightJohn = 1.76;
let _johnBMI;
_johnBMI = _initialMassJohn/(_heightJohn**2);
console.log(_johnBMI);

let _markHigherBMI = _markBMI > _johnBMI;
console.log(_markHigherBMI)
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

// STRINGS AND TEMPLATE LITERALS

// ASSIGMENT
let country = "Brazil";
let continent = "South America";
let population = 210000000;
let language = 'portuguese'
let description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

const firstName = 'Traian';
const job = 'teacher';
const birthYear = 1986;
const year = 2023;

const traian = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!' //using escape char \'
const matisi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!' //using double quote + single quotes

console.log(traian);
console.log(matisi);

const traianNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // using backticks (brazilian crase), accepts escape chars
console.log(traianNew);

console.log(`Multi 
line \n
string
\n
literals`) //Each \n and ENTER are being counted nowadays, also \n\ with both backslashes was abolished as escape char



// CONDITIONALS IF
const age = 18;
const grownup = 18;

if (age > grownup)
{
    console.log(`The age is ${age}, really grownup`);
}
else if (age < grownup)
{
    console.log(`Sorry, you're a minor at age ${age}`);
}
else{
    console.log(`You're exactly ${age}.`);
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
//CODING CHALLENGE #2
const initialMassMark = 78;
const heightMark = 1.69;
let markBMI;
markBMI = initialMassMark/(heightMark**2);
console.log(markBMI);

const initialMassJohn = 92;
const heightJohn = 1.95;
let johnBMI;
johnBMI = initialMassJohn/(heightJohn**2);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
// ASSIGMENT IF ELSE STATEMENT
let country = "Brazil";
let continent = "South America";
let population = 210000000;
let averagePopulation = 33000000;
console.log(country);
console.log(continent);
console.log(population);

console.log(`The world average population per country is ${averagePopulation}`)

if (population > averagePopulation)
{
    console.log(`Brazil's population is ${population - averagePopulation} above average`);
}
else
{
    console.log(`Brazil's population is ${averagePopulation - population} below average`);
}


// CONVERTION VERSUS COERTION

// CONVERSION
const inputYear = `1986`;
console.log(typeof Number(inputYear), typeof inputYear);
console.log(inputYear + 18);

console.log(Number(`traian`));
console.log(typeof NaN);

console.log(String(23), 23);

// COERTION
console.log(`I'm ` + `23` + ` years old`), // All strings
console.log(`I'm ` + 23 + ` years old`); // Coertion to string of the number 23
console.log(`23` - `10` - 3); // Coertion to numbers of 23 and 10 results in the number 10
console.log(`23` + `10` + 3); // Coertion to string of the number 3 resultes in 23103
console.log(`23` * `2`); // results in 46
console.log(`23` / `2`); // results in 11.5

let n = `1` + 1; // coertion to string results in 11
n -= 1; //coertion to number results in 10
console.log(n); // results in 10

console.log(2 + 3 + 4 + '5'); // coertion to string because ended with string, results in 95
console.log(`10` - `4` - `3` - 2 + 5); // coertion to number because ended with numbers, results in 6
console.log(`10` - `4` - `3` - 2 + `5`); // coertion to string because ended with string, results in 15

console.log(`10` - 4 - `3` - 2 + `5`); // try to guess the result
console.log(10 - `4` - 3 - `2` + 5); // try to guess the result
console.log(5 + 6 + `4` + 9 - 4 - 2); // try to guess the result
console.log(`4` + `3`);
console.log(4 + 3);
console.log(`4` + 3);
console.log(4 + `3`);
console.log(`4` - `3`);
console.log(4 - `3`);
console.log(`4` - 3);

// ASSIGMENT - Coertion and conversion
console.log(`9` - `5`);
console.log(`19` - `13` + `17`);
console.log(`19` + `13` + `17`);
console.log(`123` < 57);
console.log(`123` > 57);
console.log(5 + 6 + `4` + 9 - 4 - 2);

// TRUTHY AND FALSY VALUES - !(TRUE AND FALSE)
console.log(Boolean(0));
console.log(Boolean(``)); //FALSE
console.log(Boolean(` `)); //TRUE
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

const money = 0;
if (money) {
    console.log(`Take it easy spending`);
}
else
{
    console.log(`Bitch, you poor`);
}

let height; //But what if height = 0  ???
if (height)
{
    console.log(`Yay, height is defined!`);
}
else
{
    console.log(`Bummer, height is undefined`);
}


// EQUALITY AND INEQUALITY OPERATORS
const age = 18;
if (age === 18)
{
    console.log(`age === 18`)
}
if (age === `18`)
{
    console.log(`age === "18"`)
}
if (age == 18)
{
    console.log(`age == 18`)
}
if (age == `18`)
{
    console.log(`age == "18" `)
}

//ASSIGMENT EQUALITY OPERATOR
const country = `Brazil`;
const numNeighbours = Number(prompt(`How many neighbours does ${country} have`));

if (numNeighbours === 1)
{
    console.log(`Only 1 border`);
}
else if (numNeighbours > 1)
{
    console.log(`${numNeighbours} borders`);
}
else
{
    console.log(`No land border exists`);
}





let favorite;
favorite = prompt(`What's your favorite number?`)
console.log(`Your favorite number is ${favorite}`)
// Be aware, all prompt are strings. To use === we need to convert manually


// LOGICAL OPERATORS
const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodVision;
console.log(shouldDrive);

if (shouldDrive)
{
    console.log(`You're able to drive!`);
}
else
{
    console.log(`Someone else should drive!`);
}

// ASSIGMENT LOGICAL OPERATORS
let country = `Brazil`;
let continent = `South America`;
let isIsland = false;
let population = 210000000;
let language = `portuguese`;

if ((language === `english`) && (population < 50000000) && (!isIsland))
{
    console.log(`You should come to Brazil!`);
}
else
{
    console.log(`Brazil it's not for amateurs!`)
}




*/

