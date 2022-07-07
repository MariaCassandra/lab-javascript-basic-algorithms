// Iteration 1: Names and Input

let hacker1 = "Code Master";
console.log("The driver's name is " + hacker1);

let hacker2 = "Extreme Navigator";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length  + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+  hacker2.length  + " characters.");
} else if (hacker1.length = hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops

let spacedName = ' ';
for (let i = 0; i < hacker1.length; i++) {
  spacedName = spacedName + hacker1[i].toUpperCase() + ' ';
}
console.log(spacedName)

let reversedName = '';
for(let i = hacker2.length -1; i >= 0; i--) {
  reversedName = reversedName + hacker2[i];
}
console.log(reversedName);

let orderName = hacker1.localeCompare(hacker2);
if(orderName === -1) {
  console.log("The driver's name goes first.")
} else if (orderName === 1){
  console.log("Yo, the navigator goes first definitely.")
}else if (orderName === 0){
  console.log("What?! You both have the same name?")
}

// Bonus 1:

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum posuere pulvinar. In hac habitasse platea dictumst. Curabitur commodo, risus placerat bibendum hendrerit, sapien orci eleifend magna, sit amet porta odio purus ut metus. Proin commodo arcu enim, eu volutpat lectus bibendum et. Maecenas elementum ultricies neque, et venenatis elit vulputate et. In a tincidunt nunc. Aenean lacinia at ipsum vel varius. Curabitur euismod orci ac rutrum maximus. Phasellus ac viverra orci. Etiam luctus nulla ut quam feugiat, vel auctor eros congue. Ut rutrum commodo elit, et faucibus velit feugiat nec. Sed eget erat non lorem interdum auctor. Donec libero justo, lacinia ac convallis ut, feugiat vitae est.

Mauris erat diam, semper vel sapien ac, luctus vulputate ligula. Praesent cursus purus nec suscipit consectetur. Suspendisse egestas et lectus et blandit. Nulla facilisi. Sed luctus orci lorem, vel ultricies ipsum pellentesque ac. Sed ut massa feugiat, porttitor erat et, elementum magna. Mauris non erat pulvinar, consectetur massa nec, scelerisque magna.

Nunc molestie consectetur tempor. In in ipsum purus. Fusce ac laoreet elit, in porttitor tortor. Quisque pulvinar nunc vitae augue tristique blandit. Fusce aliquet quam sit amet semper suscipit. Integer quis lectus mollis, commodo sem eu, bibendum elit. Donec ac sapien dignissim, egestas sem sit amet, convallis dui. Quisque at laoreet tortor. In hac habitasse platea dictumst. Donec tellus justo, lacinia a suscipit venenatis, euismod at tellus. Duis dignissim velit lacinia neque sodales pretium. Nunc convallis urna quis sapien cursus, at pellentesque tellus hendrerit. Nulla malesuada ipsum nisl, volutpat sodales arcu efficitur ac."

function countOfWords(lorem) {
  	let numberOfWords = lorem.split(" ").length;
	  return numberOfWords;
}
console.log(countOfWords(lorem));

// Bonus 2: 
function palindrome(phrase) {
    let letters = /[^A-Za-z0-9]/g;
    let mixUp = phrase.toLowerCase('').replace(letters, '');
    let longitud = mixUp.length;
    for (let i = 0; i < longitud/2; i++) {
      if (mixUp[i] !== mixUp[longitud - 1 - i]) { 
          return console.log("false");
      }
    } console.log("true");
   }
   
   palindrome("A man, a plan, a canal. Panama");
   palindrome("Amor, Roma");
   palindrome("race car");
   palindrome("stack cats");
   palindrome("step on no pets");
   palindrome("taco cat");
   palindrome("put it up");
   palindrome("Was it a car or a cat I saw?");
   palindrome( "No 'x' in Nixon")
   palindrome( "No es un palíndromo");
