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


export function aufgabe06 (args) {
  const input = args
   
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    //das Element in einen ascii code umwandeln
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57){
      //passiert nichts(ist kein Sonderzeichen)
   
    } else if (65 <= ascii && ascii <= 90) {
      //wird nichts gemacht(wieder kein Sonderzeichen)
   
   
    } else if (97 <= ascii && ascii <= 122) {
      // passiert nichts (ist kein Sonderzeichen)
   
    } else if (currentElement === " ") {
   //macht nichts wenn es ein leerschlag ist
    } else {
      //es bleiben nur noch Sonderzeichen übrig(alles andere wurde ausgeschlossen)es wird true zurückgegeb
      return true
    }
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
  // wenn es kein Zeichen mehr gibt null zurückgeben, weil der Test es so verlangt
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

// Aufgabe 16
//Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und
//den Rest als den zweiten Teil.

export function aufgabe16(args) {
  const input = args
  const result = []
 
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];
    if (currentElement === '$'){
      break;
    }
    result.push(currentElement);
}
return result.join('')
}
//Aufgabe 17
//Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ','
//getrennt.
export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')
 
 
  for (let i = 0; i < result.length - 1; i++) {
    const currentElement = input[i]
      }
    
 
 
  return result.join(',')
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









// Aufgabe 21
//Kehren Sie die Eingabe um.
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

//Aufgabe 22
//Es sollen alle Zeichen aus der Eingabe mit `_` ersetzt werden, bis zum ersten
//`k`.

export function aufgabe22 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das element alles ausser ein k ist wird _ wieder gegeben.
    if(currentElement!== "k"){
      result.push(_)
      //wenn ein k kommt wird einfach das element wieder gegeben.
    }else if(currentElement=== "k"){
      return currentElement
    } 
   
  }
  
  return result.join("")
}



// Aufgabe 26
//Vergleichen Sie die ersten beiden Zeichen der Eingabe und vertauschen Sie diese
//so dass Sie alphanumerisch sortiert sind.

 export function aufgabe26 (args) {
   const list = args.split("")  // ertsellen eine Liste(braucht man um etwas zu sortieren/vergleichen)
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    //ascii code von den Buchstaben(die buchstaben in zahlen umwandeln um sie nach grösse zu vergleichen)
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = 0 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return (result)
 
}




//Aufgabe 27
//Testen sie, ob eine Eingabe eine Zahl ist.

export function aufgabe27 (args) {
  const input = args
  //wenn die länge des Inputs 0 ist wird gerade falsch wiedergegeben, weil es gar keine Zahlen enthalten kann
  if(input.length === 0) return false


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    //ascii code von zahlen.
    if(48 <= ascii && ascii <= 57){
//wenn das nicht der Fall ist wird flasch wiedergegeben.
    }else return false
  }
  return true

}


export function bubbleSort (args) {
  const list = args.split("") // ertsellen eine Liste(braucht man um etwas zu sortieren/vergleichen)
   for (let i = 0; i < list.length -1; i++) {
     const currentElement = list[i]
     const nextElement = list[i+1]
     //ascii code von den Buchstaben(die buchstaben in zahlen umwandeln um sie nach grösse zu vergleichen)
     if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
       // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
       const tmp = list[i+1]
       list[i+1] = list[i]
       list[i] = tmp
       i = -1// starte von vorne wenn etwas vertauscht wurde.-1 weil vorhin +1 gemacht wurde.Sonst würde ein Buchstabe von vorne nie nach hinten schaffen würde.
     }
   }
   const result = list.join("")
   return (result)
  
 }
 




//code Bubble-sort
//[3,1,2,4]
//[1,3,2,4]
//[1,2,3,4]

//{const list = [3,1,2,4]
//for (let i = 1; i < list.length; i++) {
  //if(list[i-1]> list [i]){
    //const tmp = list[i]
    //list[i]= list [i-1]
    //list[i-1]= tmp
    //i=1
  //}
  
//}
//return list
//}