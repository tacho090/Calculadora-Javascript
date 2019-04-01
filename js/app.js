var button = document.getElementsByClassName("tecla");

var Calculadora = {
  //change number size when pressed
  pressCSS:function(){
    //console.log(button);
    alert("button pressed");
    button[0].style.width = "50%";
    elem = document.getElementsByClassName("tecla");
    elem.style.width = "50%";
    elem.style.height = "50%";

  }
  /*//stores value in display
  store:func(){

  },
  //Validate if more than 8 numbers
  validate:func(){

  },
  //Reset calculator
  reset:func(){

  },
  negative:func(){

  },
  empty:func(){

  }*/

};

//button is an object
//function press(){
  for (property in button){
    console.log(property);
    button[property].addEventListener("click",Calculadora.pressCSS);
  }
//}
//button[0].addEventListener("click",Calculadora.pressCSS);

//console.log(button[0]);

//document.getElementsByClassName("tecla").style.width = "50%";
//document.getElementById("0").style.width = "50%";
