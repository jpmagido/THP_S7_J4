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



function splitby3(input){
	let arr_3 = [];
	for (var i = input[0].length - 1; i >= 0; i--) {
		arr_3.push(input[0][i]+input[0][i-1]+input[0][i-2]);
		i--
		i--	
	}
	console.log(arr_3);
}

splitby3(arr_1);
console.log(splitby3(arr_2)[0]);


/*

while(true){
	var a = 0;
	var arr_final = [];
	a++
	if (splitby3(arr_2[a]) === "CUU" ) {
		arr_final.push("Sérine");
		console.log(arr_final);
	}
	
	else {
		break;
	}
}
*/




