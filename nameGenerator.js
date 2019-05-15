console.log("start");

function getVowels(vowelLength){
  let vowels = ['a','e','i','o','u'];
  let finalVowels = "";
  for (let i = 0; i < vowelLength; i++){
    let index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let randVowel = vowels[index];
    finalVowels += randVowel;
  }
  return finalVowels;
}

function getConsonants(consLength){
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
  result += getVowels(2);
  result += getVowels(1);
  result += getConsonants(1);
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

document.getElementById("createLongName").onclick = function(){
  console.log("test");
  let result = "";
  result = document.getElementById("firstL").value.toUpperCase();
  console.log(result);
  result += getVowels(2);
  result += getVowels(1);
  result += getConsonants(1);
  result += getVowels(2);
  result += getConsonants(1);
  result += getConsonants(1);
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

document.getElementById("createFirstLastName").onclick = function(){
  console.log("test");
  let resultFirst = "";
  resultFirst = document.getElementById("firstL").value.toUpperCase();
  
  resultFirst += getVowels(2);
  resultFirst += getVowels(1);
  resultFirst += getConsonants(1);
  resultFirst += getVowels(2);
  resultFirst += getVowels(1);
  resultFirst += getConsonants(1);

  let resultLast = "";
  let firstL = getConsonants(1);
  resultLast += firstL[0].toUpperCase();
  resultLast += getVowels(1);
  resultLast += getConsonants(1);
  resultLast += getVowels(2);
  resultLast += getVowels(1);
  resultLast += getConsonants(1);
  
  let result = resultFirst + " " + resultLast;
  console.log(result);
  document.getElementById("result").innerHTML = result; 
}

document.getElementById("shuffleName").onclick = function(){
  if (document.getElementById("result")){
    let name = document.getElementById("result").innerHTML;
    console.log(name.length);
    let nameArray = name.split("");
    console.log(nameArray);
    let nameLength = name.length;
    let shuffledName = "";
    for (let i = 0; i < nameLength; i++){
      console.log("NL" + nameLength);
      let randIndex = Math.floor(Math.random() * ((nameArray.length-1) - 0 + 1)) + 0;
      let randLetter = nameArray[randIndex];
      shuffledName += randLetter;
      nameArray.splice(randIndex,1);
    }
    shuffledName = shuffledName[0].toUpperCase() + shuffledName.substring(1);
    console.log(shuffledName);
    document.getElementById("result").innerHTML = shuffledName;
  }
}
