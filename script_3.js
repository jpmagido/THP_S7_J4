console.log("******** EXO 2");

var etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
console.log(`Vous avez choisi de mettre ${etage} étages.`)

var arr_1 = [];
var symbol = "#";
function pyra(input) {
	for(input; input >=1; input--){	
	arr_1.push(symbol);
	console.log(arr_1.join(""));
	}
}

pyra(etage);



var space = " ";

function pyra2(input1) {
	let rep = 1;
	for(input1; input1 >= 1; input1--){	
	console.log(space.repeat(input1 -1) + symbol.repeat(rep));
	rep++
	}
}

pyra2(etage);