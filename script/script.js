// let clic = document.querySelector('#unit');
let unite = document.querySelector('#unite');
let dizaine = document.querySelector('#dizaine');
let diz = document.querySelector('#diz');
let centaine = document.querySelector('#centaine');
let cent = document.querySelector('#cent');
let mil = document.querySelector('#mil');
let mul = document.querySelector('#mul');
let tol = document.querySelector('#tol');
let result =[]
const list = document.getElementById("list");

//evenements
function handlerClic(e) {
    console.log('test')
    console.log("click");
    if (unite.value==="black"){
        result.splice(0, 0, 0)
        console.log(result)
        list.innerHTML += `<li><a href="#">Unités: 0</a></li>`;
    return result
    } 
    if (unite.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
        list.innerHTML += `<li><a href="#">Unités: 1</a></li>`;
      return result
    }
    if (unite.value==="red"){
      result.splice(0, 0, 2)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 2</a></li>`;
    return result
    }
    if (unite.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 3</a></li>`;
    return result
    }
    if (unite.value==="yellow"){
      result.splice(0, 0, 4)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 4</a></li>`;
    return result
    }
    if (unite.value==="green"){
      result.splice(0, 0, 5)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 5</a></li>`;
    return result
    }
    if (unite.value==="blue"){
      result.splice(0, 0, 6)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 6</a></li>`;
    return result
    }
    if (unite.value==="violet"){
      result.splice(0, 0, 7)
      list.innerHTML += `<li><a href="#">Unités: 7</a></li>`;
      console.log(result)
    return result
    }
    if (unite.value==="grey"){
      result.splice(0, 0, 8)
      list.innerHTML += `<li><a href="#">Unités: 8</a></li>`;
      console.log(result)
    return result
    }
    if (unite.value==="white"){
      result.splice(0, 0, 9)
      list.innerHTML += `<li><a href="#">Unités: 9</a></li>`;
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
      list.innerHTML += `<li><a href="#">Unités: 0</a></li>`;
    return result
    } 
    if (dizaine.value==="brown"){
        result.splice(0, 0, 1)
        console.log(result)
        list.innerHTML += `<li><a href="#">Unités: 1</a></li>`;
      return result
    }
    if (dizaine.value==="red"){
      result.splice(0, 0, 2)
      list.innerHTML += `<li><a href="#">Unités: 2</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="orange"){
      result.splice(0, 0, 3)
      console.log(result)
      list.innerHTML += `<li><a href="#">Unités: 3</a></li>`;
    return result
    }
    if (dizaine.value==="yellow"){
      result.splice(0, 0, 4)
      list.innerHTML += `<li><a href="#">Unités: 4</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="green"){
      result.splice(0, 0, 5)
      list.innerHTML += `<li><a href="#">Unités: 5</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="blue"){
      result.splice(0, 0, 6)
      list.innerHTML += `<li><a href="#">Unités: 6</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="violet"){
      result.splice(0, 0, 7)
      list.innerHTML += `<li><a href="#">Unités: 7</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="grey"){
      result.splice(0, 0, 8)
      list.innerHTML += `<li><a href="#">Unités: 8</a></li>`;
      console.log(result)
    return result
    }
    if (dizaine.value==="white"){
      result.splice(0, 0, 9)
      list.innerHTML += `<li><a href="#">Unités: 9</a></li>`;
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
      list.innerHTML += `<li><a href="#">Centaines: 0</a></li>`;
      console.log(result)
    return result
    } 
    if (centaine.value==="brown"){
        result.splice(0, 0, 1)
        list.innerHTML += `<li><a href="#">Centaines: 1</a></li>`;
        console.log(result)
      return result
    }
    if (centaine.value==="red"){
      result.splice(0, 0, 2)
      list.innerHTML += `<li><a href="#">Centaines: 2</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="orange"){
      result.splice(0, 0, 3)
      list.innerHTML += `<li><a href="#">Centaines: 3</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="yellow"){
      result.splice(0, 0, 4)
      list.innerHTML += `<li><a href="#">Centaines: 4</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="green"){
      result.splice(0, 0, 5)
      list.innerHTML += `<li><a href="#">Centaines: 5</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="blue"){
      result.splice(0, 0, 6)
      list.innerHTML += `<li><a href="#">Centaines: 6</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="violet"){
      result.splice(0, 0, 7)
      list.innerHTML += `<li><a href="#">Centaines: 7</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="grey"){
      result.splice(0, 0, 8)
      list.innerHTML += `<li><a href="#">Centaines: 8</a></li>`;
      console.log(result)
    return result
    }
    if (centaine.value==="white"){
      result.splice(0, 0, 9)
      list.innerHTML += `<li><a href="#">Centaines: 9</a></li>`;
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
      list.innerHTML += `<li><a href="#">Miliers: 0</a></li>`;
      console.log(result)
    return result
    } 
    if (milier.value==="brown"){
        result.splice(0, 0, 1)
        list.innerHTML += `<li><a href="#">Miliers: 1</a></li>`;
        console.log(result)
      return result
    }
    if (milier.value==="red"){
      result.splice(0, 0, 2)
      list.innerHTML += `<li><a href="#">Miliers: 2</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="orange"){
      result.splice(0, 0, 3)
      list.innerHTML += `<li><a href="#">Miliers: 3</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="yellow"){
      result.splice(0, 0, 4)
      list.innerHTML += `<li><a href="#">Miliers: 4</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="green"){
      result.splice(0, 0, 5)
      list.innerHTML += `<li><a href="#">Miliers: 5</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="blue"){
      result.splice(0, 0, 6)
      list.innerHTML += `<li><a href="#">Miliers: 6</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="violet"){
      result.splice(0, 0, 7)
      list.innerHTML += `<li><a href="#">Miliers: 7</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="grey"){
      result.splice(0, 0, 8)
      list.innerHTML += `<li><a href="#">Miliers: 8</a></li>`;
      console.log(result)
    return result
    }
    if (milier.value==="white"){
      result.splice(0, 0, 9)
      list.innerHTML += `<li><a href="#">Miliers: 9</a></li>`;
      console.log(result)
    return result    
    }
} 
function initHandlerClic4() {
  mil.addEventListener("click",handlerClic4);
}



window.addEventListener("load",initHandlerClic4);
function handlerClic5(e) {
    if (multi.value==="black"){
      console.log("x1")
    
    } 
    if (multi.value==="brown"){
      list.innerHTML += `<li><a href="#">multiplié par: x10</a></li>`;
        console.log("x10")
    }
    if (multi.value==="red"){
      list.innerHTML += `<li><a href="#">multiplié par: x100</a></li>`;
      console.log("x100")
    }
    if (multi.value==="orange"){
      list.innerHTML += `<li><a href="#">multiplié par: x1000</a></li>`;
      console.log("x1000")
    }
    if (multi.value==="yellow"){
      list.innerHTML += `<li><a href="#">multiplié par: x10000</a></li>`;
      console.log("x10000")
    }
    if (multi.value==="green"){
      list.innerHTML += `<li><a href="#">multiplié par: x100000</a></li>`;
      console.log("x100000")
    }
    if (multi.value==="blue"){
      list.innerHTML += `<li><a href="#">multiplié par: x1000000</a></li>`;
      console.log("x1000000")
    }
    if (multi.value==="violet"){
      list.innerHTML += `<li><a href="#">multiplié par: x10000000</a></li>`;  
      console.log("x10000000")
    }
    if (multi.value==="grey"){
      list.innerHTML += `<li><a href="#">multiplié par: x100000000</a></li>`;
      console.log("x100000000")
    }
    if (multi.value==="white"){
      list.innerHTML += `<li><a href="#">multiplié par: x1000000000</a></li>`;
      console.log("x1000000000")   
  } 

    if (multi.value==="gold"){
      list.innerHTML += `<li><a href="#">multiplié par: x0.1</a></li>`;
      console.log("x0.1")   
    }  
    if (multi.value==="silver"){
      list.innerHTML += `<li><a href="#">multiplié par: x0.01</a></li>`;
      console.log("0.01")   
    } 
  }
function initHandlerClic5() {
  mul.addEventListener("click",handlerClic5);
}

window.addEventListener("load",initHandlerClic5);
function handlerClic6(e) { 
    if (tol.value==="brown"){
      // result = result + (result * 1)/100
      list.innerHTML += `<li><a href="#">tolerance: 1%</a></li>`;
        console.log("tolerance: 1%")
      // return result
    }
    if (tol.value==="red"){
      // result = result + (result * 2)/100
      list.innerHTML += `<li><a href="#">tolerance: 2%</a></li>`;
        console.log("tolerance: 2%")
      // return result
    }
    if (tol.value==="green"){
      // result = result + (result * 0.5)/100
      list.innerHTML += `<li><a href="#">tolerance: 0.5%</a></li>`;
        console.log("tolerance: 0.5%")
      // return result
    }
    if (tol.value==="blue"){
      // result = result + (result * 0.25)/100
      list.innerHTML += `<li><a href="#">tolerance: 0.25%</a></li>`;
        console.log("tolerance: 0.25%")
      // return result
    }
    if (tol.value==="violet"){
      // result = result + (result * 0.1)/100
      list.innerHTML += `<li><a href="#">tolerance: 0.10%</a></li>`;
        console.log("tolerance: 0.10%")
      // return result
    }
    if (tol.value==="grey"){
      // result = result + (result * 0.05)/100
      list.innerHTML += `<li><a href="#">tolerance: 0.05%</a></li>`;
        console.log("tolerance: 0.05%")
      // return result
    }
    if (tol.value==="gold"){
      // result = result + (result * 5)/100
      list.innerHTML += `<li><a href="#">tolerance: 5%</a></li>`;
      console.log("tolerance: 5%")
    // return result    
    }  
    if (tol.value==="silver"){
      // result = result + (result * 10)/100
      list.innerHTML += `<li><a href="#">tolerance: 10%</a></li>`;
      console.log("tolerance: 10%")
    // return result 
    }
  }
    function initHandlerClic6() {
      tole.addEventListener("click",handlerClic6);
    }
    
    window.addEventListener("load",initHandlerClic6);

  

  

