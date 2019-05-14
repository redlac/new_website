function getMiddleChars(vowelLength){
  let vowels = ['a','e','i','o','u'];
  let finalVowels = "";
  for (let i = 0; i < vowelLength; i++){
    let randVowel = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    finalVowels += randVowel;
  }
  return finalVowels;
}

function getEndChars(consLength){
  let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let finalCons = "";
  for (let i = 0; i < consLength; i++){
    let randCons = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    finalCons += randCons;
  }
  return finalCons;
}

let firstLetter = document.getElementById("
