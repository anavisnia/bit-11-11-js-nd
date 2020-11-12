/* *******************
*Kintamųjų palyginimas
******************* */

// * Tarpusavyje palyginti skaičiaus tipo kintamuosius:
const num1 = 5;
const num2 = 12;

if (num1 > num2) {
    console.log('True');
} else {
    console.log(`${num1} > ${num2}`);
    console.log('False');
};

if (num1 < num2) {
    console.log(`${num1} < ${num2}`);
    console.log('True');
} else {
    console.log('False');
};

if (num1 === num2) {
    console.log(`${num1} === ${num2}`);
    console.log('True');
} else {
    console.log(`${num1} === ${num2}`);
    console.log('False');
};

if (num1 !== num2) {
    console.log(`${num1} !== ${num2}`);
    console.log('True');
} else {
    console.log(`${num1} !== ${num2}`);
    console.log('False');
};

if (num1 >= num2) {
    console.log(`${num1} >= ${num2}`);
    console.log('True');
} else {
    console.log(`${num1} >= ${num2}`);
    console.log('False');
};

if (num1 <= num2) {
    console.log(`${num1} <= ${num2}`);
    console.log('True');
} else {
    console.log(`${num1} <= ${num2}`);
    console.log('False');
};
console.log('------------------------------------');
// * Išvesti teksto tipo kintamųjų ilgius
const myText = 'You will do it!';
const myText2 = 'Do not overthink, you are doing well';
console.log(myText.length);
console.log(myText2.length);
console.log('------------------------------------');
// * Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
const textLeng1 = myText.length;
console.log(textLeng1);
const textLeng2 = myText2.length;
console.log(textLeng2);

if (textLeng1 > textLeng2) {
    console.log(`${textLeng1} > ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} > ${textLeng2}`);
    console.log('False');
};

if (textLeng1 < textLeng2) {
    console.log(`${textLeng1} < ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} < ${textLeng2}`);
    console.log('False');
};

if (textLeng1 === textLeng2) {
    console.log(`${textLeng1} === ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} === ${textLeng2}`);
    console.log('False');
};

if (textLeng1 !== textLeng2) {
    console.log(`${textLeng1} !== ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} !== ${textLeng2}`);
    console.log('False');
};

if (textLeng1 >= textLeng2) {
    console.log(`${textLeng1} >= ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} >= ${textLeng2}`);
    console.log('False');
};

if (textLeng1 <= textLeng2) {
    console.log(`${textLeng1} <= ${textLeng2}`);
    console.log('True');
} else {
    console.log(`${textLeng1} <= ${textLeng2}`);
    console.log('False');
};
console.log('------------------------------------');
// * Išvesti sąrašo tipo kintamųjų ilgius
const favSongs = ['Deja vu', 'Jazz Bar', 'Colours', 'Truth', 'Graveyard', 'Criminal'];
const favSingers = ['DreamCatcher', 'JB', 'TS', 'AL', 'Nightly'];

const favSongsLeng = favSongs.length;
console.log(favSongsLeng);
const favSingersLeng = favSingers.length;
console.log(favSingersLeng);
console.log('------------------------------------');
// * Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
if (favSongsLeng > favSingersLeng) {
    console.log(`${favSongsLeng} > ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} > ${favSingersLeng}`);
    console.log('False');
};

if (favSongsLeng < favSingersLeng) {
    console.log(`${favSongsLeng} < ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} < ${favSingersLeng}`);
    console.log('False');
};

if (favSongsLeng === favSingersLeng) {
    console.log(`${favSongsLeng} === ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} === ${favSingersLeng}`);
    console.log('False');
};

if (favSongsLeng !== favSingersLeng) {
    console.log(`${favSongsLeng} !== ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} !== ${favSingersLeng}`);
    console.log('False');
};

if (favSongsLeng >= favSingersLeng) {
    console.log(`${favSongsLeng} >= ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} >= ${favSingersLeng}`);
    console.log('False');
};

if (favSongsLeng <= favSingersLeng) {
    console.log(`${favSongsLeng} <= ${favSingersLeng}`);
    console.log('True');
} else {
    console.log(`${favSongsLeng} <= ${favSingersLeng}`);
    console.log('False');
};

console.clear();
/* *******************
* Ciklo for panaudojimas
******************* */

// * Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a. 0 - 0
// b. 0 - 4
// c. 0 - 100
// d. 574 - 815
// e. -50 - 50
// f. -70 - 30

// * panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

// * Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a. 0 - 11
// b. 8 - 31
// c. -18 - 18
// d.  rezultatą pateikti tokiu formatu:
// 1. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// 2. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// 3. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.