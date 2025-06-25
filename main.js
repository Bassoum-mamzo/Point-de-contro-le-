// ----------------------
// Problème 1 : Somme des éléments distincts entre deux ensembles
// ----------------------

function sommeElementsDistincts(ensemble1, ensemble2) {
    let somme = 0;

    // Parcours du premier ensemble
    for (let i = 0; i < ensemble1.length; i++) {
        if (!ensemble2.includes(ensemble1[i])) {
            somme += ensemble1[i];
        }
    }

    // Parcours du deuxième ensemble
    for (let j = 0; j < ensemble2.length; j++) {
        if (!ensemble1.includes(ensemble2[j])) {
            somme += ensemble2[j];
        }
    }

    return somme;
}

// Test du Problème 1
let ensemble1 = [3, 1, 7, 9];
let ensemble2 = [2, 4, 1, 9, 3];
let resultat = sommeElementsDistincts(ensemble1, ensemble2);
console.log("Problème 1 - Somme des éléments distincts :", resultat);


// ----------------------
// Problème 2 : Produit scalaire + Vérification orthogonalité
// Version 1 : Avec procédure (simulation passage par référence)
// ----------------------

function dot_product_procedure(v1, v2, ps) {
    ps.value = 0;
    for (let i = 0; i < v1.length; i++) {
        ps.value += v1[i] * v2[i];
    }
}

function verifierOrthogonaliteProcedure(n, vecteurs1, vecteurs2) {
    for (let i = 0; i < n; i++) {
        let ps = { value: 0 };
        dot_product_procedure(vecteurs1[i], vecteurs2[i], ps);

        if (ps.value === 0) {
            console.log(`Problème 2 - (Procédure) Les vecteurs ${i + 1} sont orthogonaux.`);
        } else {
            console.log(`Problème 2 - (Procédure) Les vecteurs ${i + 1} ne sont pas orthogonaux.`);
        }
    }
}


// ----------------------
// Version 2 : Avec fonction qui retourne la valeur
// ----------------------

function dot_product_fonction(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function verifierOrthogonaliteFonction(n, vecteurs1, vecteurs2) {
    for (let i = 0; i < n; i++) {
        let ps = dot_product_fonction(vecteurs1[i], vecteurs2[i]);

        if (ps === 0) {
            console.log(`Problème 2 - (Fonction) Les vecteurs ${i + 1} sont orthogonaux.`);
        } else {
            console.log(`Problème 2 - (Fonction) Les vecteurs ${i + 1} ne sont pas orthogonaux.`);
        }
    }
}

// Test du Problème 2
let vecteurs1 = [
    [1, 2, 3],
    [1, -1, 0]
];

let vecteurs2 = [
    [4, -5, 6],
    [1, 1, 0]
];

console.log("\n--- Test avec la procédure ---");
verifierOrthogonaliteProcedure(2, vecteurs1, vecteurs2);

console.log("\n--- Test avec la fonction ---");
verifierOrthogonaliteFonction(2, vecteurs1, vecteurs2);

