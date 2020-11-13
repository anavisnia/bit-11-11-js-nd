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
    for (i = 0; i <= 0; i++) {
        console.log(i);
    };
// b. 0 - 4
    let numS = 0;
    for (i = 0; i <= 4; i++) {
       numS = numS + i;
    };
    console.log(numS);
// c. 0 - 100
    let numS1 = 0;
    for (i = 0; i <=100; i++) {
        numS1 = numS1 + i;
    };
    console.log(numS1);
// d. 574 - 815
    let numS2 = 0;
    for (i = 574; i <= 815; i++) {
        numS2 = numS2 + i;
    }
    console.log(numS2);
// e. -50 - 50
    let numS3 = 0;
    for (i = -50; i <= 50; i++) {
        numS3 = numS3 + i;
    }
    console.log(numS3);
// f. -70 - 30
    let numS4 = 0;
    for (i = -70; i <= 30; i++) {
        numS4 = numS4 + i;
    };
    console.log(numS4);
    console.log('------------------------------------');
// * panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
    const abcd = 'abcdef';
    let fed = '';
    // for (let i = 0; i <= abcd.length - 1; i++) {
    //     vienaR = abcd[i];
    //     console.log(vienaR);
    //     fed = fed + vienaR;
    // };
    // console.log(fed);
    let vienaR = '';
    for (i = abcd.length - 1; i >= 0; i--) {
        vienaR = abcd[i];
        console.log(vienaR);
        fed = fed + vienaR;
    };
    console.log(fed);
    console.log('------------------------------------');
// * Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a. 0 - 11
    numMod3 = 0;
    atsMod3 = '';

    for (i = 0; i <= 11; i++) {
        if (i%3 === 0) {
            numMod3 = i;
            console.log(numMod3);
            atsMod3 = atsMod3 + i;
        }
    };
    console.log(atsMod3);
    console.log(atsMod3.length);
    console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${atsMod3.length} vienetai.`);
    // bet ar tiks string metodas kitiems? 🤔
    console.log('------------------------------------');
    numMod5 = 0;
    for (i = 0; i <= 11; i++) {
        if  (i%5 === 0) {
            numMod5 = i;
            console.log(numMod5);
        };
    };
    console.log('------------------------------------');
    numMod7 = 0;
    for (i = 0; i<= 11; i++) {
        if (i%7 === 0) {
            numMod7 = i;
            console.log(numMod7);
        };
    };
// b. 8 - 31
// c. -18 - 18
// d.  rezultatą pateikti tokiu formatu:
// 1. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// 2. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// 3. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.