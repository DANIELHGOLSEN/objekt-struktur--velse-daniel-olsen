const favoritMon = {
    vandType: "Carracosta",
    normalType: "Cinccino",
    jordType: "Excadrill",
    stenType: "Carracosta",
    graesType: "Torterra",
    moerkType: "Weavile",
    staalType: "Excadrill",
    topTrae: ["Carracosta", "Dragalge", "Excadrill"],
    bedstegens: {
        nummerEt: 5,
        nummerTo: 3,
        nummerTrae: 4,
    },
}

// Opgave 1
// console.log(favoritMon.vandType);
// console.log(favoritMon["normalType"]);
// console.log(favoritMon.jordType);
// console.log(favoritMon["stenType"]);

// Opgave 2
favoritMon.topTrae.forEach(function (topTrae) {
    console.log(topTrae);
})

console.log(favoritMon.bedstegens.nummerTrae);
