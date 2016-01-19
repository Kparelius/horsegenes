essentialLocii = [
    ["E","e"],
    ["A","A+","At","a"]
];

realLocii = [
    ["G","g"],
    ["Cr","n"],
    ["D","d"],
    ["Ch","n"],
    ["prl","n"],//interacts with locus4; see notes
    ["R","r"],//interacts with locus 9,10,11; see notes
    ["T","t"],
    ["Sb","n"],
    ["W","w"],//cannot WW, dead horse syndrome
    ["Z","z"],
    ["F","f"],
    ["P","n"],
    ["Rb","n"],
    ["O","o"],//cannot OO, dead horse syndrome
    ["Spl","n"],
    ["Lp","n"],
    ["Sty","n"],
    ["PATN1","n"],
    ["PATN2","n"]
];

fakeLocii1 = [
    ["Je","n"],
    ["R-","r"],//interaction with locus8; see notes
    ["Cal","n"],
    ["Ri","n"],
    ["Hs","n"],
    ["IHS","n"],
    ["Tx","n"],
    ["Ok","n"],
    ["Ds","n"],
    ["Cry","n"],
    ["Mm","n"],
    ["Dy","n"],
    ["Clt","n"]
];

fakeLocii2 = [
    ["MK1","MK1","MK2","n","n"],//MK2 more rare
    ["Do","n"],
    ["Brr","n"],
    ["oe","n"],
    ["Spk","n"],
    ["Ave","n"],
    ["Tft","n"]
];


function choosePossibleLociiSets(){
    var chosenSets = document.getElementById("setMenu").value;
    var possibleLocii = []
    var valueSet = {
        "real" : realLocii.concat(),
        "real1" : realLocii.concat(fakeLocii1),
        "real2" : realLocii.concat(fakeLocii2),
        "real1_2" : realLocii.concat(fakeLocii1).concat(fakeLocii2),
    }
    possibleLocii = valueSet[chosenSets];
    return possibleLocii;
}

/**
function choosePossibleLociiSets(){
	var possibleLocii = [];
	var chosenSets = document.getElementById("setMenu").value;
	if (chosenSets == "real"){
		possibleLocii = realLocii.concat();
	} else if (chosenSets == "real1"){
		possibleLocii = realLocii.concat(fakeLocii1);
	} else if (chosenSets == "real2"){
		possibleLocii = realLocii.concat(fakeLocii2);
	} else if (chosenSets == "real1_2"){
		possibleLocii = realLocii.concat(fakeLocii1).concat(fakeLocii2);
	}
    return possibleLocii;
}
**/

function expressedLocii(locusSet) {
    var index, locus;

	var lociiThatWillBeExpressed = [];
    var amount = Math.floor((Math.random() * locusSet.length));
    for (var i = 0; i < amount; i++) {
        index = Math.floor(Math.random() * locusSet.length);
        locus = locusSet.splice(index, 1)[0];
        lociiThatWillBeExpressed.push(locus);
    }
    return lociiThatWillBeExpressed;
}

function expressGenes(locusSet) {
    var result = [];
    for (var i = 0; i < locusSet.length; i++) {
       genes = chooseGenes(locusSet[i]);
       result = result.concat(genes);
    }
    return result;
}

function chooseGenes(locus) {
    var result = [];
    for (var i = 0; i <=1; i++) {
        var expressedGene = Math.floor((Math.random() * locus.length));
        result.push(locus[expressedGene]);     
    }
    return result;
}

function removeNN(theDamnGenes){
    var finish = [];
    while (theDamnGenes.length > 0){
        var testSet = theDamnGenes.splice(0,2);
        if (testSet == ["n","n"]){
            testSet = [];
        } 
        finish.concat(testSet);
    }
    return finish;
}

function makeHorse() {
	var possibleLocii = choosePossibleLociiSets();
    var locii = expressedLocii(possibleLocii);
    var result = expressGenes(essentialLocii.concat(locii));
    var resultWithoutNN = removeNN(result);
    alert(resultWithoutNN.join(""));
}

$(document).ready(function () {
    $('#generator').click(makeHorse);
});