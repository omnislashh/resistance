// let clic = document.querySelector('#unit');
let unite = document.querySelector('#unite');
let dizaine = document.querySelector('#dizaine');
let diz = document.querySelector('#diz');
let centaine = document.querySelector('#centaine');
let cent = document.querySelector('#cent');
let mil = document.querySelector('#mil');
let mul = document.querySelector('#mul');
let tole = document.querySelector('#mul');
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
} 

function initHandlerClic() {
  unit.addEventListener("click",handlerClic);
}

window.addEventListener("load",initHandlerClic);
  
function handlerClic2(e) {
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
}
function initHandlerClic2() {
  diz.addEventListener("click",handlerClic2);
}

window.addEventListener("load",initHandlerClic2);

function handlerClic3(e) {
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
} 

function initHandlerClic3() {
  cent.addEventListener("click",handlerClic3);
}

window.addEventListener("load",initHandlerClic3);
function handlerClic4(e) {
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
function initHandlerClic4() {
  mil.addEventListener("click",handlerClic4);
}

let results = result.map(function (x) { 
  let resistor = parseInt(x, 10);
  return resistor 
});

window.addEventListener("load",initHandlerClic4);
function handlerClic5(e) {
    if (multi.value==="black"){
      resistor = resistor * 1
      console.log(resistor)
    return result
    } 
    if (multi.value==="brown"){
      resistor = resistor * 10
        console.log(resistor)
      return resistor
    }
    if (multi.value==="red"){
      resistort = resistor * 100
      console.log(resistor)
    return resistor
    }
    if (multi.value==="orange"){
      resistor = resistor * 1000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="yellow"){
      resistor = resistor * 10000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="green"){
      resistor = resistor * 100000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="blue"){
      resistor = resistor * 1000000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="violet"){
      resistor = resistor * 10000000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="grey"){
      resistor = resistor * 100000000
      console.log(resistor)
    return resistor
    }
    if (multi.value==="white"){
      resistor = resistor * 1000000000
      console.log(resistor)
    return resistor    
  } 

    if (multi.value==="gold"){
      resistor = resistor * 0.1
      console.log(resistor)
    return resistor    
    }  
    if (multi.value==="silver"){
      resistor = resistor * 0.01
      console.log(resistor)
    return resistor    
    } 
  }
function initHandlerClic5() {
  mul.addEventListener("click",handlerClic5);
}

window.addEventListener("load",initHandlerClic5);
function handlerClic6(e) { 
    if (tol.value==="brown"){
      // result = result + (result * 1)/100
        console.log("tolerance: 1%")
      // return result
    }
    if (tol.value==="red"){
      // result = result + (result * 2)/100
        console.log("tolerance: 2%")
      // return result
    }
    if (tol.value==="green"){
      // result = result + (result * 0.5)/100
        console.log("tolerance: 0.5%")
      // return result
    }
    if (tol.value==="blue"){
      // result = result + (result * 0.25)/100
        console.log("tolerance: 0.25%")
      // return result
    }
    if (tol.value==="violet"){
      // result = result + (result * 0.1)/100
        console.log("tolerance: 0.10%")
      // return result
    }
    if (tol.value==="grey"){
      // result = result + (result * 0.05)/100
        console.log("tolerance: 0.05%")
      // return result
    }
    if (multi.value==="gold"){
      // result = result + (result * 5)/100
      console.log("tolerance: 5%")
    // return result    
    }  
    if (multi.value==="silver"){
      // result = result + (result * 10)/100
      console.log("tolerance: 10%")
    // return result 
    }
  }
    function initHandlerClic6() {
      tole.addEventListener("click",handlerClic6);
    }
    
    window.addEventListener("load",initHandlerClic6);

  

  

