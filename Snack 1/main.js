/* 
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


// Creare un array di oggetti

const bici = [
    {
        nome: "bianchi",
        peso: 35,
    },
    {
        nome: "cannondale",
        peso: 43,
    },
    {
        nome: "santaCruz",
        peso: 21,
    }
]

let leggera = bici[0]

for (let i = 0; i < bici.length; i++) {
    const singolaBici = bici[i];
    console.log(singolaBici);
    // se le bici successive sono inferiori a bianchi seleziono la minore
    // salvo la minore 
    if (leggera.peso > singolaBici.peso){
        leggera = singolaBici

    }
}

console.log(leggera);


