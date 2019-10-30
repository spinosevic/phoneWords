class PhoneWords {

  constructor() {
    this.lettersNumbers = {
      '1': '',
      '2': 'ABC',
      '3': 'DEF',
      '4': 'GHI',
      '5': 'JKL',
      '6': 'MNO',
      '7': 'PQRS',
      '8': 'TUV',
      '9': 'WXYZ',
      '0': ' '
    }
  }

  computePhonewords(number) {
  number=number.split("").filter(char=> char!=="1").join("")
  let queue = []
  for(let i=number.length-1;i>=0;i--){
    let object = {letters: this.lettersNumbers[number[i]]}
    if (i!==number.length-1){
      object.next=queue[0]
    }
    queue.unshift(object)
  }
  return this.recursivePhoneWords([],queue[0])
}

 recursivePhoneWords ( combinationObtained, currentLetters){
    let newCombinations = []
    for(let i=0;i<combinationObtained.length;i++){
      for (let j=0;j<currentLetters.letters.length;j++){
        newCombinations.push(combinationObtained[i]+ currentLetters.letters[j])
      }
    }
    if (combinationObtained.length===0){
      newCombinations = currentLetters.letters.split("")
    }
      if (!currentLetters.next) {
    return newCombinations
    } else {
     return this.recursivePhoneWords(newCombinations, currentLetters.next)
    }
}


}
export default PhoneWords
