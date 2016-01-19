locus1 = ["E","e"]
locus2 = ["A","A+","At","a"]
zombie_locus = ["prl", "n"]

real_genes = [
  ["G","g"],
  ["Cr","n"],
  ["D","d"],
  ["Ch","n"],
  ["prl","n"], //interacts with locus4; see notes
  ["R","r"], //interacts with locus 9,10,11; see notes
  ["T","t"],
  ["Sb","n"],
  ["W","w"], //cannot WW, dead horse syndrome
  ["Z","z"],
  ["F","f"],
  ["P","n"],
  ["Rb","n"],
  ["O","o"], //cannot OO, dead horse syndrome
  ["Spl","n"],
  ["Lp","n"],
  ["Sty","n"],
  ["PATN1","n"],
  ["PATN2","n"]
]

// ... more sets ...

var geneSets = {
  real: real_genes,
  fake1: real_genes + fake_genes_1,
  fake2: real_genes + fake_genes_2,
  fake3: real_genes + fake_genes_1 + fake_genes_2
}


// ... later in your maybeLocii 

var candidateLocii = function() {
  var selection = $(".myselection").value()
  return geneSets[selection] + [locus1, locus2]
}

// example of removing genes
if(userDoesntWantToDieAZombie()) {
   candidateLocii.delete(zombie_hocus)
}