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

document.getElementById("createShortName").onclick = function(){
  console.log("test");
  let result = "";
  result = document.getElementById("firstL").value.toUpperCase();
  console.log(result);
  result += getMiddleChars(2);
  result += getMiddleChars(1);
  result += getEndChars(1);
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

document.getElementById("createLongName").onclick = function(){
  console.log("test");
  let result = "";
  result = document.getElementById("firstL").value.toUpperCase();
  console.log(result);
  result += getMiddleChars(2);
  result += getMiddleChars(1);
  result += getEndChars(1);
  result += getMiddleChars(2);
  result += getMiddleChars(1);
  result += getEndChars(1);
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

document.getElementById("createFirstLastName").onclick = function(){
  console.log("test");
  let resultFirst = "";
  resultFirst = document.getElementById("firstL").value.toUpperCase();
  console.log(result);
  resultFirst += getMiddleChars(2);
  resultFirst += getMiddleChars(1);
  resultFirst += getEndChars(1);
  resultFirst += getMiddleChars(2);
  resultFirst += getMiddleChars(1);
  resultFirst += getEndChars(1);

  let resultLast = "";
  let firstL = getMiddleChars(2);
  resultLast += firstL[0].toUpperCase() + firstL.substring(1);
  resultLast += getMiddleChars(1);
  resultLast += getEndChars(1);
  resultLast += getMiddleChars(2);
  resultLast += getMiddleChars(1);
  resultLast += getEndChars(1);
  
  let result = resultFirst + " " + resultLast;
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}
