/*
CCGUCGUUGCGCUACAGC

CCUCGCCGGUACUUCUCG


UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine 
CCU ou CCC ou CCA ou CCG => Proline 
UUA ou UUG => Leucine 
UUU ou UUC => Phénylalanine 
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine 
UAU ou UAC => Tyrosine

*/

var arr_1 = ["CCGUCGUUGCGCUACAGC"];
var arr_2 = ["CCUCGCCGGUACUUCUCG"];

console.log(arr_1[0]);
console.log(arr_2[0]);

// Conversion en Array de 3 Lettres DEBUT

let arr_3 = [];
	for (i = 0; i <= arr_1[0].length - 1; i++) {
		arr_3.push(arr_1[0][i]+arr_1[0][i+1]+arr_1[0][i+2]);
		i++
		i++	
	}

console.log(arr_3);

let arr_4 = [];
	for (i = 0; i <= arr_2[0].length - 1; i++) {
		arr_4.push(arr_2[0][i]+arr_2[0][i+1]+arr_2[0][i+2]);
		i++
		i++	
	}
console.log(arr_4);

// Conversion en Array de 3 Lettres FIN

// Conversion en Lettres DEBUT

function convert(input){
	var arr_final_1 = [];
	for (var i = input.length - 1; i >= 0; i--) {
		if (input[i] === "CCG" || input[i] === "CCC" || input[i] === "CCA" || input[i] === "CCU") {
			arr_final_1.push("Proline");
		}
		else if (input[i] === "UCU" || input[i] === "UCC" || input[i] === "UCA" || input[i] === "UCG" || input[i] === "AGU" || input[i] === "AGC") {
			arr_final_1.push("Sérine");
		}
		else if (input[i] === "UUA" || input[i] === "UUG") {
			arr_final_1.push("Leucine");
		}
		else if (input[i] === "UUU" || input[i] === "UUC") {
			arr_final_1.push("Phénylalanine");
		}
		else if (input[i] === "CGU" || input[i] === "CGC" || input[i] === "CGA" || input[i] === "CGG" || input[i] === "AGA" || input[i] === "AGG") {
			arr_final_1.push("Arginine");
		}
		else if (input[i] === "UAU" || input[i] === "UAC") {
			arr_final_1.push("Tyrosine");
		}
	}
	console.log(arr_final_1);
}

convert(arr_3);
convert(arr_4);

// Conversion en Lettres FIN



