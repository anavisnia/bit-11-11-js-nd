console.log('Hello from nd-functions.js');

/*
Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

function tusciaFunkcija() {
    return false;
};
console.log(tusciaFunkcija());
console.log('-----------------------------------');
/*
Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/

function daugyba(num1, num2) {    
    if (typeof num1 !== 'number') {
        console.log(`ERROR: pirmasis skaicius (${num1}) yra netinkamas`);
        return false;
    };
    if ('' + num1 === 'NaN') {
       console.log(`ERROR: pirmasis skaicius yra ne skaiciaus tipo.`);
       return false;
    }
    // bet panauduota == 
    if ( num1 == 'Infinity') {
        console.log(`ERROR: pirmasis skaicius negalibuti Infinity.`);
        return false;
    }
    
    if (typeof num2 !== 'number') {
        console.log(`ERROR: antrasis skaicius (${num2}) yra netinkamas`);
        return false;
    };
    if ('' + num2 === 'NaN') {
        console.log(`ERROR: antrasis skaicius yra ne skaiciaus tipo.`);
        return false;
    }
    if ( num2 == 'Infinity') {
        console.log(`ERROR: antrasis skaicius negalibuti Infinity.`);
        return false;
    }


    const sum = num1 * num2;
    return sum;
};

const daugWrong1 = daugyba(6, 'hello');
console.log(daugWrong1);
const daugWrong2 = daugyba('4', 4);
console.log(daugWrong2);
const daugWrong3 = daugyba([3], 54);
console.log(daugWrong3);
const daugWrong4 = daugyba([], '3');
console.log(daugWrong4);
const daugWrong5 = daugyba(NaN, 8);
console.log(daugWrong5); // NaN
const daugWrong6 = daugyba(Infinity, 3);
console.log(daugWrong6); // Infinity


console.log('Teisiklingi skaiciavimai:');
// Teisiklingi skaiciavimai
const daug1 = daugyba(2, 5);
const daug2 = daugyba(6, 1);
const daug3 = daugyba(5, -13);
const daug4 = daugyba(4, 3);
const daug5 = daugyba(2, 3.1);
console.log(daug1);
console.log(daug2);
console.log(daug3);
console.log(daug4);
console.log(daug5);
console.log('-----------------------------------');

console.clear();
let skintString = '';
function skaitmenuKiekisSkaiciuje(kintamas) {

    if (typeof kintamas !== 'number') {
        console.log('Pateikta netinkamo tipo reikšmė.');
    };
    if ('' + kintamas === 'NaN') {
        console.log('Pateikta netinkamo tipo reikšmė.');
    };
    // irasyti salyga, kuri grazintu kintomuju kieki
        
    return kintamas; 
};

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log('Not done');
console.log('-----------------------------------');

function didziausiasSkaiciusSarase(manoKintamasis) {
    // jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    if (typeof manoKintamasis !== 'object') {
        console.log('Pateikta netinkamo tipo reikšmė.');
        return false;
    }
    // jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”

    // let emptyAr = [];
    // if ((Array.isArray(emptyAr)) && emptyAr.length) {
    //     console.log('Pateiktas sąrašas negali būti tuščias.');
    //     return false;
    // }
    // if (Array && Array.constructor === Array && Array.length === 0) {
    //     console.log('Pateiktas sąrašas negali būti tuščias.');
    //     return false;
    // } else {
    //     return manoKintamasis;
    // }
    if (manoKintamasis.length === 0) {
        console.log('Pateiktas sąrašas negali būti tuščias.');
        return false;
    }

    return manoKintamasis;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1,2,3]));
console.log(didziausiasSkaiciusSarase([-5,78,14,0,18]));
console.log(didziausiasSkaiciusSarase([69,69,69,69,66]));
console.log(didziausiasSkaiciusSarase([-1,-2,-3,-4,-5,-6,-7,-8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log( didziausiasSkaiciusSarase([]));
// console.log( didziausiasSkaiciusSarase(['7']));


/* ************************
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
gražinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*************************** */
console.clear();

function dalyba(a, b) {
    // input validation
    if (typeof a !== 'number' && typeof b !== 'number') {
        return 'ERROR: Dveju skaiciaus ivesta reiksme yra ne skaiciaus tipo.'
    }
    if ('' + a === 'NaN' && '' + b === 'NaN') {
        return 'ERROR: Dveju skaiciaus ivesta reiksme yra ne normlaus tipo.'
    }
    if (a === Number.POSITIVE_INFINITY && a === Number.POSITIVE_INFINITY) {
        return 'ERROR: Dveju skaiciaus ivesta reiksme negali buti Infinity tipo.'
    }
    if (a === Number.NEGATIVE_INFINITY && a === Number.NEGATIVE_INFINITY) {
        return 'ERROR: Dveju skaiciaus ivesta reiksme negali buti -Infinity tipo.'
    }
    if (typeof a !== 'number' ) {
        return 'ERROR: Pirmojo skaiciaus ivesta reiksme yra ne skaiciaus tipo.'
    }
    if ('' + a === 'NaN') {
        return 'ERROR: Pirmojo skaiciaus ivesta reiksme yra ne normlaus tipo.'
    }
    if ('' + a === 'Infinity') {
        return 'ERROR: Pirmojo skaiciaus ivesta reiksme negali buti Infinity tipo.'
    }
    if (a === Number.NEGATIVE_INFINITY) {
        return 'ERROR: Pirmojo skaiciaus ivesta reiksme negali buti Infinity tipo. False!'
    }
    if (typeof b !== 'number' ) {
        return 'ERROR: Antrojo skaiciaus ivesta reiksme yra ne skaiciaus tipo.'
    }
    if ('' + b === 'NaN') {
        return 'ERROR: Antrojo skaiciaus ivesta reiksme yra ne normlaus tipo.'
    }
    if ('' + b === 'Infinity') {
        return 'ERROR: Antrojo skaiciaus ivesta reiksme negali buti Infinity tipo.'
    }
    if (b === Number.NEGATIVE_INFINITY) {
        return 'ERROR: Antrojo skaiciaus ivesta reiksme negali buti Infinity tipo. False!'
    }
    if (b === Number.POSITIVE_INFINITY && a === Number.POSITIVE_INFINITY) {
        return 'ERROR: Dveju skaiciaus ivesta reiksme negali buti Infinity tipo.'
    }
    if (b === Number.NEGATIVE_INFINITY && a === Number.NEGATIVE_INFINITY) {
        return 'ERROR: Dveju skaiciaus ivesta reiksme negali buti -Infinity tipo.'
    }
  

    // logic
    const ats = a / b;


    // return
    
    return ats;
}

// reikia filtruoti
// console.log('Reikia filtruoti:');

// filtruota
console.log('Filtruota:');
console.log(dalyba(2, -Infinity));
console.log(dalyba(Infinity, -Infinity));
console.log(dalyba(-Infinity, Infinity));
console.log(dalyba(Infinity, 6));
console.log(dalyba(5, NaN));
console.log(dalyba(NaN, 5));
console.log(dalyba(NaN, NaN));
console.log(dalyba('zodis', []));
console.log(dalyba('zodis', 'kitas'));
console.log(dalyba(7, []));
console.log(dalyba(6, ['-6']));
// dar galima patikrinti jeigu daugiau negu vienas skaicius - ismesti klaida
console.log(dalyba(6, [8, -4]));
console.log(dalyba('9', 6));
console.log(dalyba(4, [2]));
console.log(dalyba(6, [-4]));
console.log(dalyba([8], [-4]));

// geri atsakymai
console.log('Geri skaiciavimai:');
console.log(dalyba(2, 7));
console.log(dalyba(8, 2));
console.log(dalyba(-3, 8));
console.log(dalyba(6, -2));
console.log(dalyba(3.4, -4));
console.log(dalyba(3.4, 6));


/*
console.clear();
// funkcija, kuri priimtu du skaitmenis po kablelio
function numComma(number, position) {
    // return parseFloat(number.toFixed(position));

    let ats = number;

    // 3.1415 (apval iki 2 poziciju)
    // 314.15   * 10**2
    // 314      round
    // 3.14     /10**2 (dalyba is 10**2 )

    const power = 10**position;
    ats = number * power;
    ats - Math.floor(ats);
    ats /= power;

    return ats;
}


// input
const num = 3.1415;
// output
// const rez = 3.14;
const rez = numComma(num, 2)
console.log(rez, '->', 3.14);
*/