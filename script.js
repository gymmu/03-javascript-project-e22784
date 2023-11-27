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

//TODO ---> es funktioniert nicht
export function aufgabe06 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //das Element in einen ascii code umwandeln
    currentElement = currentElement.charCodeAt(0)
    //wenn der ascii code dem eines Sonderzeichen entspricht, wird true wiedergegeben.(< zeichen rausgenommen weil es als Fehler markiert ist.)
    if (currentElement.charCodeAt(0) === 33 >62 )
    return true
   }
  

  return false
}


export function aufgabe08 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das Element ein "e" ist wird eine "3" zurückgegeben.
    if(currentElement === `e`){
     result.push(3)
    }else {
      result.push(currentElement)
    }
    

    
  }
  
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

 export function aufgabe10 (args) {
  const input = args
  //im Hexcode dürfen nicht mehr als 7 zeichen vorkommen und das erste Element muss ein # sein.
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  
  //es dürfen nur zahlen und A-F vorkommen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if(48 <= ascii && ascii <= 57){
      //nichts machen,ist eine zahl
    } else if (65 <=ascii && ascii <= 70){
      //nichts machen ist A-F
    }else {
      return false
    }
    
  }
  return true
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



 export function aufgabe13 (args) {
  const input = args
 let pos = -1
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  // rückwärts auslesen wäre --> for (let i = input.length -1; i>= 0; i--)
  
  //wenn ein "e" vorkommt wird es gespeichert. Wenn alle Zeichen durch sind wird das letze gespeicherte e (posotion)angezeigt.
  if(currentElement === "e"){
  pos = i
  }
  
}
 
return pos
  
 } 

//TODO --> noch nicht fertig
 export function aufgabe14 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das Zeichen kein "e" ist wird -1 zurückgegeben
    if(currentElement !== "e"){return -1}
    else if(currentElement=== "E"){return -1}
  }
return 2
 }


export function aufgabe15 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das Element ein Leerschlag ist wird abgebrochen
    if (currentElement === ` `){
      return result.join("")
    }
    //das Element wird erst hier angehängt, da es kein Leerschlag ist( Leerschläge dürfen nicht angehängt werden)
    result.push(currentElement)
  }
  
  return result.join("")
}

// Aufgabe 19
//Jedes Zeichen in der Eingabe soll verdoppelt werden.

export function aufgabe19 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //zu dem Element wird das gleiche Element nochmals angesetzt.
    result.push(currentElement + currentElement )
  }
  
  return result.join("")
}


// Augabe 20
//Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.

export function aufgabe20 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 //wenn eine Stelle nach dem "." ein Leerschlag kommt, wird true angezeigtS
  if (currentElement === '.' )  
  if (input [i+1] === ' ') {
    return true
  }
   
  }
 
return false
 
}










//ToDo --> nicht richtig/fertig
export function aufgabe21 (args) {
  const input = args
  const result = []
//rückwärts auslesen
  for (let i = input.length -1; i>= 0; i--) {
    const currentElement = input[i]
    
  }
  
  return result.join("")
}


//Aufgabe 27
//Testen sie, ob eine Eingabe eine Zahl ist.

export function aufgabe27 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(48 <= ascii && ascii <= 57){}
  }
  
  return result.join("")
}




//code Bubble-sort
//[3,1,2,4]
//[1,3,2,4]
//[1,2,3,4]

//{const list = [3,1,2,4]
//for (let i = 1; i < list.length; i++) {
  //if(list[i-1]> listm [i]){
    //const tmp = list[i]
    //list[i]= list [i-1]
    //list[i-1]= tmp
    //i=1
  //}
  
//}
//return list
//}