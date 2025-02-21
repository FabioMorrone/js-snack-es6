/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creare un array di oggetti di squadre di calcio.

const squadre = [
    {
        'nome' : "Milan", 
        'punti_fatti' : 0, 
        'falli_subiti' : 0, 
    }, 
    {
        'nome' : "Barcellona", 
        'punti_fatti' : 0, 
        'falli_subiti' : 0, 
    }, 
    {
        'nome' : "Cagliari", 
        'punti_fatti' : 0, 
        'falli_subiti' : 0, 
    }
]
let punti_fatti = squadre[0]
let falli_subiti = squadre[0]
let tabellone = []

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < squadre.length; i++) {
    const questeSquadre = squadre[i];
    let punti_fatti = Math.floor(Math.random() * 3)
    console.log(punti_fatti);
    let falli_subiti = Math.floor(Math.random() * 50)
    console.log(falli_subiti);
}


// creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.