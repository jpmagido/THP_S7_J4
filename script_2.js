
console.log("******** EXO 2");


var total = 1;

function factorielle(input) {
	for(input; input >=1; input--){	
	// total += ((input-1) * total);
	total *= input;
	}
	return total;
}

console.log("De quel nombre veux-tu la factorielle ?");
var number = prompt("De quel nombre veux-tu la factorielle ?");
console.log(`Vous avez choisi : ${number}`);
console.log(`Le résultat est : ${factorielle(Number(number))}`);

