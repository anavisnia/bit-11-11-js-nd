// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const nuo = 10;
const iki = 10;

let sum = 0;
// jeigu:
// nuo > iki
// nuo < iki
if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
        sum = sum + i;
    };
} else {
    for (let i = iki; i <= nuo; i++) {
        sum = sum + i;
    };
};
// galima vietoj ciklu nauduoti formules integralai(?)


console.log(`Skaičių intervale tarp ${nuo} ir ${iki} yra ${sum}`);

// backward

const text = 'abcdef';
let back = '';

// for (let i = text.length - 1; i >= 0; i--) {
//     const letter = text[i];
//     console.log(i, letter);
//     back = back + letter;
// };

// for (let i = 1; i <= text.length; i++) {
//     const letter = text[text.length - i];
//     back = back + letter;
// };

// for (let i = 0; i < text.length; i++) {
//     const letter = text[text.length - i - 1];
//     back = back + letter;
// };

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    back = letter + back;
};

console.log(text, '->', back);