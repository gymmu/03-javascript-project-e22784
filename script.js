export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  if(currentElement === `e` ) {
result.push ("")
  } else if (currentElement === `E`){

  } else {
    result.push (currentElement)
  } 

    
  }
  return result.join("")
}



export function aufgabe02 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
const currentElement = input [i]
//Wandle das aktuelle Element in einen Grossbuchstaben um
const capitalizedElement = currentElement.toUpperCase()
//Hänge den Grossbuchstaben an das Resultat an
result.push(capitalizedElement)

  }
  return result.join("")
}




export function aufgabe03(args) {
  const input = args
  const result = []

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  



  }
  return result.join("")

}
