const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici les entrepreneurs nés dans les années 1970 :");

var leng = entrepreneurs.length -1;

for(leng; leng >= 0; leng--){  
  if (entrepreneurs[leng].year >= 1970 && entrepreneurs[leng].year <= 1979) {
  console.log(`${entrepreneurs[leng].first} ${entrepreneurs[leng].last} : ${entrepreneurs[leng].year}`);
  }  
}


console.log("")
console.log("Voici les noms de tous les entrepreneurs :");

var leng_2 = entrepreneurs.length -1;
for(leng_2; leng_2 >= 0; leng_2--){  
  console.log(`${entrepreneurs[leng_2].first} ${entrepreneurs[leng_2].last}`);
  }  


console.log("")
console.log("Voici l'âge de tous les entrepreneurs en 2019 :");

var leng_3 = entrepreneurs.length -1;
for(leng_3; leng_3 >= 0; leng_3--){  
  console.log(`${entrepreneurs[leng_3].first} ${entrepreneurs[leng_3].last} aurait ${2019 - Number(entrepreneurs[leng_3].year)} ans.`);
  }  


console.log("")
console.log("Voici la liste des entrepreneurs triée par ordre alphabétique selon leurs Noms :");

var arr_1 = [];
var leng_4 = entrepreneurs.length -1;

for(leng_4; leng_4 >= 0; leng_4--){  
 arr_1.push(entrepreneurs[leng_4].last);
}  
  arr_1.sort();
  console.log(arr_1.join(" "));

