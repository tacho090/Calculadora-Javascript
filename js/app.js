
var Calculadora = {

  /*button: function(){
    //event handler
    var boton = document.getElementsByClassName("tecla");
    for (property in boton){
    console.log(property);
    boton[property].addEventListener("click",this.pressCSS());
    }
  },*/

  //change number size when pressed
  pressCSS:function(){
    //console.log(button);
    //alert("Button clicked, id "+this.id);
    elem = document.getElementById(this.id);
    elem.style.width = "18%";
    elem.style.height = "18%";
    this.mouseUp;
    Calculadora.mouseUp(this.id);
  },
  mouseUp: function(id){
    alert("Button Uppppp, id "+this.id);
    document.getElementById(id).style.width = "22%";
    document.getElementById(id).style.height = "62.91px";
  }

};

/*Nuevas lineas de codigo*/
/*//////////*Get element ID with click*//////////////

document.getElementById('on').onclick = Calculadora.pressCSS;
document.getElementById('sign').onclick = Calculadora.pressCSS;
document.getElementById('raiz').onclick = Calculadora.pressCSS;
document.getElementById('dividido').onclick = Calculadora.pressCSS;
document.getElementById('por').onclick = Calculadora.pressCSS;
document.getElementById('menos').onclick = Calculadora.pressCSS;
document.getElementById('punto').onclick = Calculadora.pressCSS;
document.getElementById('igual').onclick = Calculadora.pressCSS;
document.getElementById('mas').onclick = Calculadora.pressCSS;
document.getElementById('1').onclick = Calculadora.pressCSS;
document.getElementById('2').onclick = Calculadora.pressCSS;
document.getElementById('3').onclick = Calculadora.pressCSS;
document.getElementById('4').onclick = Calculadora.pressCSS;
document.getElementById('5').onclick = Calculadora.pressCSS;
document.getElementById('6').onclick = Calculadora.pressCSS;
document.getElementById('7').onclick = Calculadora.pressCSS;
document.getElementById('8').onclick = Calculadora.pressCSS;
document.getElementById('9').onclick = Calculadora.pressCSS;
document.getElementById('0').onclick = Calculadora.pressCSS;


////////////////////////////////////////////////////////*/
