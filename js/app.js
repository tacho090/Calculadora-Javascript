
var Calculadora = {

  button: function(){
    //event handler
    var boton = document.getElementsByClassName("tecla");
    for (property in boton){
    console.log(property);
    boton[property].addEventListener("click",this.pressCSS());
    }
  },

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

//var boton = document.getElementsByClassName("tecla")[0].id;

var boton = document.getElementsByClassName("tecla");//declaracion de objeto boton
for (property in boton){
  console.log(boton[property].id);//obtener id de cada boton
}

function reply_click()
{
    alert("nueva alerta +" + event.srcElement.id);
}

/*//////////*Get element ID with click*//////////////

var reply_click = function()
{
  alert("Button clicked, id "+this.id);
  elem = document.getElementById(this.id);
  elem.style.width = "50%";
  elem.style.height = "50%";

}
document.getElementById('on').onclick = reply_click;
document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;
document.getElementById('4').onclick = reply_click;
document.getElementById('5').onclick = reply_click;
document.getElementById('6').onclick = reply_click;
document.getElementById('7').onclick = reply_click;
document.getElementById('8').onclick = reply_click;
document.getElementById('9').onclick = reply_click;
document.getElementById('0').onclick = reply_click;

//boton[property].addEventListener("click",this.pressCSS());
////////////////////////////////////////////////////////*/

//button.onclick = Calculadora.pressCSS;

//button is an object
//function press(){

//}
//button[0].addEventListener("click",Calculadora.pressCSS);

//console.log(button[0]);

//document.getElementsByClassName("tecla").style.width = "50%";
//document.getElementById("0").style.width = "50%";
