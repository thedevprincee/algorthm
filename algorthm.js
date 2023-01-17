const check = document.getElementById("check")
const displaySentence = document.getElementById("display_sentence")
const displayVowel = document.getElementById("display_vowel")
const displayConsonant = document.getElementById("display_consonant")
const displayLos = document.getElementById("display_los")
const displayNow = document.getElementById("display_now")
const lengthVowel = document.getElementById("length_vowel")

check.addEventListener("click", ()=>{
  const userSentence = document.getElementById("sentence_input").value
  pickVowelsAndConsonants(userSentence)
})

const  pickVowelsAndConsonants = (sentence)=> {
  displaySentence.innerText = sentence
  const lengthOfSentence = sentence.length
  console.log(`length Of Sentence: ${lengthOfSentence}`);
  displayLos.innerText = lengthOfSentence

  const lengthOfWord = sentence.split(" ")
  console.log(`Number of word: ${lengthOfWord.length}`);
  displayNow.innerText = lengthOfWord.length
  
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  
  

  let newVowels = []
  let newConsonants = []
  
  
  for (let char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      newVowels.push(char);
    } else if (consonants.includes(char)) {
      newConsonants.push(char);
    }
  }
  
  console.log(`Number of Vowel:: ${newVowels.length}`);
  displayVowel.innerText = newVowels
  lengthVowel.innerText = newVowels.length

  
  // console.log(`Consonant: ${newConsonants}`);
  displayConsonant.innerText = newConsonants
}


 const sentes = "Tailwind CSS l is the only framework that I've seen scale on large teams. It easy to customize, adapts to any design, and the build size is tiny."

 pickVowelsAndConsonants(sentes)