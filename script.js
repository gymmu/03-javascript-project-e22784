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



export function aufgabe09 (args)  {
  const input = args
let len = 0
  //schleifendings
  for (let i = 0; i < input.length; i++) {

      //wird bei jedem zeichen 1 addiert. Es wäre auch "len++ "möglich.
      len = len + 1
    }
    //wenn 6 zeichen gezählt wurden, wird true wiedergegeben, ansonsten immer false.
 if(len === 6){
  return true
 } else {
  return false
 }
  
 }



 export function aufgabe11 (args) {
  const input = args
  let ascii = null 
// wenn die eingabe mehr als ein Zeichen lang ist wird einfach nur 0 wiedergegeben.
  if (input.length > 1) {
    return null
  }
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  //muss man halt einfach wissen
  ascii =currentElement.charCodeAt(0)
  //nach jedem Zeichen ascii anzeigen nicht erst am Schluss
  return ascii
  
}
  // wenn es kein ZEichen mehr gibt null zurückgeben, weil der Test es so verlangt
  return null
 }


 export function aufgabe12 (args) {
  const input = args
  

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  //wenn das Zeichen ein "e" ist wird die Position angegeben.
  if (currentElement === "e") {
    //andere Form anstatt pos(position)
    return i
  }
  
}
//wenn kein "e" vorhanden ist, wird -1 zurückgegeben
  return -1
 }