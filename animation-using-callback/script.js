// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
// let con=document.getElementsByClassName("container");
let header=document.getElementById("animated-header");
let div=document.createElement("div");
header.appendChild(div);
// con.appendChild(h);
function drawBox() {
   div.style.width="100vw"
   div.style.height="100px"
    div.style.border="5px solid black"
return div;
}
// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/
function changeBorderColor() {
    div.style.border="5px solid orange"
    return div;
    
}

// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/
function makeBorderRounded() {
    div.style.borderRadius="15px"
    return div;
    
}

// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/
function fillColor() {
    div.style.backgroundColor="cadetBlue"
    return div;
    
}

// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/
function displayHeading() {
    let h=document.createElement("h1");
    let htext=document.createTextNode("AMC Entertainment");
    h.appendChild(htext);
    div.appendChild(h);   
    h.style.textAlign="center" ;
    h.style.color="orange";
    return div;       
}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
*/
setTimeout(()=>{ drawBox()
    setTimeout(() => {changeBorderColor()
        
    }, 1500)
    setTimeout(() => {makeBorderRounded()
        
    }, 2000)
    setTimeout(() => {fillColor()
        
    }, 2500)
    setTimeout(() => {displayHeading()
        
    }, 3000)
    
    
},1000);