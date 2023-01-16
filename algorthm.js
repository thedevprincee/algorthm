const capTitleCase = (str) => {
  const word = str.split(" ")
  let newWord = [] 
  for(let i=0; i<word.length; i++){
    newWord.push((word[i][0].toUpperCase()+""+word[i].slice(1).toLowerCase()))
  }
  const newWordJoin = newWord.join()
  const newWordJoinReplace = newWordJoin.replace(/,/g, " ")
  return newWordJoinReplace
}

console.log(capTitleCase("he is A LOVE child"))



// const boowho3 = (bool)=> {
//   return typeof(bool) === "boolean"
// }
// console.log(boowho3(true))


// const boowho2 = (bool)=> {
//   typeof(bool) === "boolean"  ? console.log(true) : console.log(false)
// }
// boowho2("red")


// const boowho = (bool)=> {
//   if(bool === true){
//     return true
//   }
//   else if(bool === false){
//     return true
//   }
//   return false
// }

// console.log(boowho("true"))