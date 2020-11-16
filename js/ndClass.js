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