var oldNum = ""; // First number
var theNum = ""; // Current number
var operator;
var result = 0;
var display = document.getElementById('display');


var Calculadora = {

  el: function(element) {
    if (element.charAt(0) === "#") { // If passed  ID...
      return document.querySelector(element); // ... returns single element
    }else{
      return document.querySelectorAll(element);
    }
  },

  setNum : function() {
    console.log('***********entered setNum************');
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else {
      if (this.getAttribute("id") === '0'){
        theNum += this.getAttribute("id");
        if(theNum.toLowerCase().indexOf('0' === 0)){
          theNum = '';
          display.innerHTML = '0';
        }
      }else{
        theNum += this.getAttribute("id");
        console.log(theNum);
        display.innerHTML = theNum;
      }
    }
    console.log('theNum: ' + theNum);
    console.log('***************************************');
    return theNum;
  },

  negative: function(){
    console.log('*********multiplicado por negativo************');

    if(theNum.toLowerCase().indexOf("-") === -1){
      theNum = '-' + theNum;
    }else{
      theNum = parseFloat(theNum) * -1;
      theNum = theNum.toString();
    }
    display.innerHTML = theNum;

    console.log("theNum value: " + theNum);
    console.log('*****************************************');
    return theNum;
  },

  point: function(){
    console.log('*********agregar punto************');
    if(theNum.toLowerCase().indexOf(".") === -1){
      theNum = theNum + '.';
      display.innerHTML = theNum;
    }else{
      theNum = theNum;
    }
    return theNum;
  },

  moveNum: function(){
    display.innerHTML = '';
    console.log('*********numero movido************')
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("id");
    console.log('oldNum :' + oldNum);
    console.log('theNum: ' + theNum);
    console.log('***************************************');

    return oldNum;
  },

  equals: function(){
    console.log('****entrado a equals****');
    console.log('theNum: ' + theNum);
    console.log('OldNum: ' + oldNum);

    //string parseFloat
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch(operator){
      case "mas":
        result = oldNum + theNum;
        break;
      case "menos":
        result = oldNum - theNum;
        break;
      case "por":
        result = oldNum * theNum;
        break;
      case "dividido":
        result = oldNum / theNum;
        break;
      default:
        result = theNum;
    }
    if(result.toString().length<8){
      display.innerHTML = result.toString();
    }else{
      display.innerHTML = result.toString().slice(0, 8);
    }

    theNum = result.toString();
    oldNum = oldNum.toString();

    console.log('****operacion realizada****');
    console.log('theNum: ' + theNum);
    console.log('OldNum: ' + oldNum);
    console.log('result: ' + result);
    console.log('*****************************************');
  },

  clear: function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
  }
};

//Variable declarations for DOM id
var resultNum,
theNum ='',//current number
setNum = '',
igual = Calculadora.el("#igual"),
suma = Calculadora.el('#mas'),
resta = Calculadora.el('#menos'),
multip = Calculadora.el('#por'),
divd = Calculadora.el('#dividido'),
sign = Calculadora.el('#sign'),
punto = Calculadora.el('#punto');

var nums = Calculadora.el('.tecla');//lista de teclas
for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = Calculadora.setNum;
 };

// Add click event to operators
suma.onclick = Calculadora.moveNum;
resta.onclick = Calculadora.moveNum;
multip.onclick = Calculadora.moveNum;
divd.onclick = Calculadora.moveNum;
sign.onclick = Calculadora.negative;
punto.onclick = Calculadora.point;

// Add click event to equal sign
igual.onclick = Calculadora.equals;

// Add click event to clear button
Calculadora.el("#on").onclick = Calculadora.clear;
