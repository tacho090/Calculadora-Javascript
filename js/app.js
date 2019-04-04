var string_num_total = "";

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
  press:function(){
    //console.log(button);
    //alert("Button clicked, id "+this.id);
    elem = document.getElementById(this.id);
    elem.style.width = "18%";
    elem.style.height = "18%";
    document.getElementById('1').value = 1;
    console.log(this.id.value);
    Calculadora.mouseUp(this.id);
  },
  mouseUp: function(id){
    alert("Button Uppppp, id "+this.id);
    document.getElementById(id).style.width = "22%";
    document.getElementById(id).style.height = "62.91px";
  },
  string: function(){
    string_num = this.id;
    string_num_total = string_num_total + string_num;
    console.log(string_num_total);
  },
  string_to_number: function(){

  },
  assignNum:function(){
    number = document.getElementById(this.id);
    number.value = parseInt(this.id, 10);
  },
  identify: function(){

  },
  sum: function(num1){

    var result = num1 + this.identify();
  }


};

/*Nuevas lineas de codigo*/
/*//////////*Get element ID with click*//////////////

document.getElementById('on').onclick = Calculadora.press;
document.getElementById('sign').onclick = Calculadora.press;
document.getElementById('raiz').onclick = Calculadora.press;
document.getElementById('dividido').onclick = Calculadora.press;
document.getElementById('por').onclick = Calculadora.press;
document.getElementById('menos').onclick = Calculadora.press;
document.getElementById('punto').onclick = Calculadora.press;
document.getElementById('igual').onclick = Calculadora.press;
document.getElementById('mas').onclick = Calculadora.press;
document.getElementById("mas").addEventListener("click", Calculadora.sum);
//document.getElementById("1").addEventListener("click", Calculadora.press);
document.getElementById("1").addEventListener("click", Calculadora.string);
//document.getElementById("1").addEventListener("click", Calculadora.assignNum);
//document.getElementById('1').onclick = Calculadora.press, Calculadora.asignar;
document.getElementById('2').onclick = Calculadora.press;
document.getElementById('3').onclick = Calculadora.press;
document.getElementById('4').onclick = Calculadora.press;
document.getElementById('5').onclick = Calculadora.press;
document.getElementById('6').onclick = Calculadora.press;
document.getElementById('7').onclick = Calculadora.press;
document.getElementById('8').onclick = Calculadora.press;
document.getElementById('9').onclick = Calculadora.press;
document.getElementById('0').onclick = Calculadora.press;


////////////////////////////////////////////////////////*/
/*//////////*Get element value from ID*//////////////

/*var number = 0;
number = document.getElementById('1');
number.value = 1;
console.log(number.value);*/


/*var boton = document.getElementsByClassName("tecla");//declaracion de objeto boton
for (property in boton){
  console.log(boton[property].id);//obtener id de cada boton
}*/
////////////////////////////////////////////////////////*/
