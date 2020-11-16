const wordList = ['labas', 'rytas', 'ana'];
/*
Einame per zodziu sarasa
    Pasiimu viena konkretu zodi
        pasiruosiu kintamieji naujam atvirkstiniam zodziui
        Einu per to zodzio raides
            pasiimu to zodzio raide
            pasidedu is prekiu atvirkstiniam zodziui 
        atspausdinu atvr. zodi
*/

for (let w = 0; w < wordList.length; w++) {
    const word = wordList[w];
    let backward = '';

    for (let r = 0; r < word.length; r++) {
        const letter = word[r];
        backward = letter + backward;
    }
    console.log(backward);
}