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

function dalyba(a, b) {

}

console.log(dalyba(2, 7));
console.log(dalyba(8, 2));
console.log(dalyba(-3, 8));
console.log(dalyba(6, -2));
console.log(dalyba(3.4, -4));
console.log(dalyba(3.4, 6));
console.log(dalyba('9', 6));
console.log(dalyba(Infinity, 6));
console.log(dalyba(2, -Infinity));
console.log(dalyba(7, []));
console.log(dalyba(4, [2]));
console.log(dalyba(6, [-4]));
console.log(dalyba(6, [8, -4]));