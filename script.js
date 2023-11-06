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
  let count = 0

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  

//wenn es ein "e" ist wird 1 gezählt.
if(currentElement === `e`){
  count = count + 1
}

//wenn es ein "E" ist wird 1 gezählt.
else if(currentElement === `E`) {
  count = count + 1
}



  }

  return count

}


export function aufgabe04 (args) {
  const input = args
  const result = []
  //den counter auf 0 setzen.
  let count = 0
  

for (let i = 0; i < input.length; i++) 
 { const currentElement = input[i]
}

 //es werden die leerschläge gezählt
 if (currentElement === ` `) {
  count = count + 1 
}

return count
}


export function aufgabe05 (args) {
  const input = args
  const result = []
  let capitalLetters = 0

  
  for (let i = 0; i < input.length; i++) 
 { const currentElement = input[i]
  if (currentElement === `.`){
    //bei Punkten passiert nichts.
  }
  else if (currentElement === ` `){
    //ignoriert Leerschläge
  }
// prüfen ob mein Zeichen das gleiche ist wie wenn mein Zeichen gross geschrieben ist.
 else if(currentElement === currentElement.toUpperCase()) {
  capitalLetters++
 }
//TODO --> es funktioniert nicht!!!
 else if( currentElement !== currentElement.toLowerCase()) {
  capitalLetters ++
 }


 }
// wenn es mehr als 0 Grossbuchstaben hat, wird true angezeigt ansonsten false. 
 if (capitalLetters > 0) {
  return true
 } else {
  return false
 }

}


//TODO --> es funktioniert nicht!!!
export function aufgabe06 (args) {
  const input = args
  const result = []

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
}


//Wandle das aktuelle Element in einen Grossbuchstaben um, um nacher zu schauen welche 
const capitalizedElement = currentElement.toUpperCase()
//Hänge den Grossbuchstaben an das Resultat an
result.push(capitalizedElement)




  return result.join("")
}


