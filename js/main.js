console.log('Veikia');

/* **********************
 * Kintamųjų inicijavimas:
********************** */

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const num1 = 52;
console.log(num1);

const num2 = 9.14;
console.log(num2);

const num3 = 1997;
console.log(num3);

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const myText1 = 'Hi there!';
console.log(myText1);

const myText2 = 'Glad to see you here.';
console.log(myText2);

const myText3 = 'You will do it!';
console.log(myText3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const myInts = [3, 5, 0, 4, 8];
console.log(myInts);

const myDecimals = [3.13, 3.45, 7.54, 6.55, 1.23];
console.log(myDecimals);

const myNumbers = [-8, -10, -97, -8, -15];
console.log(myNumbers);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const favSongs = ['Deja Vu', 'Criminal', 'Colours', 'Graveyard', 'Gravity'];
console.log(favSongs);

const progLang = ['HTML', 'CSS', 'JavaScript', 'PHP', 'JAVA'];
console.log(progLang);

const deskSetup = ['laptop', 'monitor', 'keyboard', 'mouse', 'headphones'];
console.log(deskSetup);

/* **********************
Veiksmai su kintamaisiais:
********************** */

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

let sum = 0;
sum = num1 + num2 + num3;
console.log(sum);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
const myGreet = `${myText1} ${myText2} ${myText3}`;
console.log(myGreet);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console

const verte1 = myInts[0] - myInts[1] + myInts[2] - myInts[3] + myInts[4];
console.log(verte1);

const verte2 = myDecimals[0] - myDecimals [1] + myDecimals[2] - myDecimals[3] + myDecimals[4];
console.log(verte2);

const verte3 = myNumbers[0] - myNumbers[1] + myNumbers[2] - myNumbers[3] + myNumbers[4];
console.log(verte3);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
const favSongsText = `${favSongs[4]}, ${favSongs[3]}, ${favSongs[2]}, ${favSongs[1]}, ${favSongs[0]}`;
console.log(favSongsText);

const progLangText = `${progLang[4]}, ${progLang[3]}, ${progLang[2]}, ${progLang[1]}, ${progLang[0]}`;
console.log(progLangText);

const deskSetupText = `${deskSetup[4]}, ${deskSetup[3]}, ${deskSetup[2]}, ${deskSetup[1]}, ${deskSetup[0]}`;
console.log(deskSetupText);

// Kitaip *************************************************************************************************
// array.reverse() !changes the original array
favSongs.reverse();
// console.log(favSongs);
console.log(favSongs);
const favSongsJ = favSongs.join(", ");
const favSongsStr = favSongsJ.toString();
console.log(favSongsStr);

progLang.reverse();
console.log(progLang);
const progLangJ = progLang.join(", ");
const progLangStr = progLangJ.toString();
console.log(progLangStr);

deskSetup.reverse();
console.log(deskSetup);
const deskSetupJ = deskSetup.join(", ");
const deskSetupStr = deskSetupJ.toString();
console.log(deskSetupStr);

// array.concat join two or more arrays
// let comboArr = deskSetup.concat(progLang,favSongs);

// console.log(comboArr);
// let comboArrJ = comboArr.join(", ");
// const comboArrStr = comboArrJ.toString();
// console.log(comboArrStr);
const comboArr = deskSetupStr.concat(progLangStr,favSongsStr);
console.log(comboArr);
