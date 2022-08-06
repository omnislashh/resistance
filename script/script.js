let clic = document.querySelector('#unit');
let unite = document.querySelector('#unite');
let dizaine = document.querySelector('#dizaine');
let diz = document.querySelector('#diz');
let centaine = document.querySelector('#centaine');
let cent = document.querySelector('#cent');
let result =[]

//evenements
function handlerClic(e) {
    console.log('test')
    console.log("click");
    if (unite.value==="black"){
        result.splice(0, 0, 0)
        console.log(result)
    return result
    } 
    if (unite.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
      return result
    }
    if (unite.value==="red"){
      result.splice(0, 0, 2)
      console.log(result)
    return result
    }
    if (unite.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
    return result
    }
    if (unite.value==="yellow"){
      result.splice(0, 0, 4)
      console.log(result)
    return result
    }
    if (unite.value==="green"){
      result.splice(0, 0, 5)
      console.log(result)
    return result
    }
    if (unite.value==="blue"){
      result.splice(0, 0, 6)
      console.log(result)
    return result
    }
    if (unite.value==="violet"){
      result.splice(0, 0, 7)
      console.log(result)
    return result
    }
    if (unite.value==="grey"){
      result.splice(0, 0, 8)
      console.log(result)
    return result
    }
    if (unite.value==="white"){
      result.splice(0, 0, 9)
      console.log(result)
    return result
    }
    if (dizaine.value==="black"){
      result.splice(0, 0, 0)
      console.log(result)
    return result
    } 
    if (dizaine.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
      return result
    }
    if (dizaine.value==="red"){
      result.splice(0, 0, 2)
      console.log(result)
    return result
    }
    if (dizaine.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
    return result
    }
    if (dizaine.value==="yellow"){
      result.splice(0, 0, 4)
      console.log(result)
    return result
    }
    if (dizaine.value==="green"){
      result.splice(0, 0, 5)
      console.log(result)
    return result
    }
    if (dizaine.value==="blue"){
      result.splice(0, 0, 6)
      console.log(result)
    return result
    }
    if (dizaine.value==="violet"){
      result.splice(0, 0, 7)
      console.log(result)
    return result
    }
    if (dizaine.value==="grey"){
      result.splice(0, 0, 8)
      console.log(result)
    return result
    }
    if (dizaine.value==="white"){
      result.splice(0, 0, 9)
      console.log(result)
    return result
    }
    if (centaine.value==="black"){
      result.splice(0, 0, 0)
      console.log(result)
    return result
    } 
    if (centaine.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
      return result
    }
    if (centaine.value==="red"){
      result.splice(0, 0, 2)
      console.log(result)
    return result
    }
    if (centaine.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
    return result
    }
    if (centaine.value==="yellow"){
      result.splice(0, 0, 4)
      console.log(result)
    return result
    }
    if (centaine.value==="green"){
      result.splice(0, 0, 5)
      console.log(result)
    return result
    }
    if (centaine.value==="blue"){
      result.splice(0, 0, 6)
      console.log(result)
    return result
    }
    if (centaine.value==="violet"){
      result.splice(0, 0, 7)
      console.log(result)
    return result
    }
    if (centaine.value==="grey"){
      result.splice(0, 0, 8)
      console.log(result)
    return result
    }
    if (centaine.value==="white"){
      result.splice(0, 0, 9)
      console.log(result)
    return result    
    } 
    if (milier.value==="black"){
      result.splice(0, 0, 0)
      console.log(result)
    return result
    } 
    if (milier.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
      return result
    }
    if (milier.value==="red"){
      result.splice(0, 0, 2)
      console.log(result)
    return result
    }
    if (milier.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
    return result
    }
    if (milier.value==="yellow"){
      result.splice(0, 0, 4)
      console.log(result)
    return result
    }
    if (milier.value==="green"){
      result.splice(0, 0, 5)
      console.log(result)
    return result
    }
    if (milier.value==="blue"){
      result.splice(0, 0, 6)
      console.log(result)
    return result
    }
    if (milier.value==="violet"){
      result.splice(0, 0, 7)
      console.log(result)
    return result
    }
    if (milier.value==="grey"){
      result.splice(0, 0, 8)
      console.log(result)
    return result
    }
    if (milier.value==="white"){
      result.splice(0, 0, 9)
      console.log(result)
    return result    
    } 
}
  
  function initHandlerClic() {
    clic.addEventListener("click",handlerClic);
  }
  
  window.addEventListener("load",initHandlerClic);