const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

var leng = books.length -1;

for(leng; leng >= 0; leng--){  
  if (books[leng].rented === 0) {
    console.log(`NON, ${books[leng].title} n'a jamais été emprunté.`);
  }
  else {
    console.log("Oui.");
  }
}



console.log(" ");
console.log("Quel est livre le plus emprunté ?");

var arr_1 = [];
var leng_2 = books.length -1;
arr_1.push(books[0].rented);

for(leng_2; leng_2 >= 0; leng_2--){ 
 
  if (books[leng_2].rented > arr_1[0] ) {
    arr_1.pop();
    arr_1.pop();
    arr_1.push(books[leng_2].rented);
    arr_1.push(books[leng_2].title);
  } 
  
}

console.log(`${arr_1[1]} est le livre le plus emprunté avec ${arr_1[0]} emprunts.`);



console.log(" ");
console.log("Quel est le livre le moins emprunté ?");

var arr_1 = [];
var leng_3 = books.length -1;
arr_1.push(books[0].rented);

for(leng_3; leng_3 >= 0; leng_3--){ 
 
  if (books[leng_3].rented < arr_1[0] ) {
    arr_1.pop();
    arr_1.pop();
    arr_1.push(books[leng_3].rented);
    arr_1.push(books[leng_3].title);
  } 
  
}

console.log(`${arr_1[1]} est le livre le moins emprunté avec ${arr_1[0]} emprunts.`);



console.log(" ");
console.log("Trouve le livre avec l'ID: 873495");

var arr_1 = [];
var leng_4 = books.length -1;

for(leng_4; leng_4 >= 0; leng_4--){ 
 
  if (books[leng_4].id === 873495 ) {
    arr_1.push(books[leng_4]);
  } 
  
}
console.log(arr_1[0]);


console.log(" ");
console.log("Supprime le livre avec l'ID: 133712");
var arr_1 = [];
var arr_2 = [];
var leng_5 = books.length -1;

for(leng_5; leng_5 >= 0; leng_5--){ 
  
  if (books[leng_5].id == 133712 ) {
    arr_2.push(books[leng_5]);
  } 
  else {
    
    arr_1.push(books[leng_5]);
  }
}
console.log(arr_1);
console.log(` Nous avons supprimé ${arr_2[0].title}, livre n°${arr_2[0].id}`);



console.log(" ");
console.log("Trie les livres par ordre alphabétique");

var arr_1 = [];
var leng_6 = books.length -1;

for(leng_6; leng_6 >= 0; leng_6--){  
 arr_1.push(books[leng_6].title);
}  
  arr_1.sort();

  console.log("Voici la liste des livres triée par ordre alphabétique: ")
  console.log(arr_1.join(", "));







