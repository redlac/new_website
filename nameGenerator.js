console.log("start");

function getMiddleChars(vowelLength){
  let vowels = ['a','e','i','o','u'];
  let finalVowels = "";
  for (let i = 0; i < vowelLength; i++){
    let index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let randVowel = vowels[index];
    finalVowels += randVowel;
  }
  return finalVowels;
}

function getEndChars(consLength){
  let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let finalCons = "";
  for (let i = 0; i < consLength; i++){
    let index = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    let randCon = consonants[index];
    finalCons += randCon;
  }
  return finalCons;
}

document.getElementById("createName").onclick = function(){
  console.log("test");
  let result = "";
  result = document.getElementById("firstL").innerHTML;
  result += getMiddleChars(2);
  result += getEndChars(2);
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

