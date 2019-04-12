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
  /*el_ops: function(element) {
    console.log(element);
    if (element.charAt(0) === "#") { // If passed  ID...
      return document.getElementById(element); // ... returns single element
    }else{
      return document.getElementById(element);
    }
  },*/
  setNum : function() {
    console.log('***********entered setNum************');
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("id");
      console.log(theNum);
    }
    display.innerHTML = theNum;
    console.log('theNum: ' + theNum);
    console.log('***************************************');
    return theNum;
  },

  clean_str: function(id){
    string_num = id;
    console.log(string_num);
    if(string_num === "-"){
      if(theNum.toLowerCase().indexOf("-") === -1){
        theNum = string_num + theNum;
      }else{
        theNum = parseFloat(theNum) * -1;
        theNum = theNum.toString();
      }
    }else{
      theNum = theNum + string_num;
    }
    console.log("thenum value: " + theNum);

    if(theNum.charAt(0) === "0"){
      theNum = "";
    }else{
      if(theNum.length>8){
        display.innerHTML = theNum.slice(0, 8);
      }else{
        display.innerHTML = theNum;
      }
    }
    return theNum
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
    display.innerHTML = result;

    theNum = result;

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

var resultNum,
theNum ='',//current number
setNum = '',
igual = Calculadora.el("#igual");
suma = Calculadora.el('#mas');
resta = Calculadora.el('#menos');
multip = Calculadora.el('#por');
divd = Calculadora.el('#dividido');

var nums = Calculadora.el('.tecla');//lista de teclas
for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = Calculadora.setNum;
 };

// Add click event to operators
// for (var i = 0, l = ops.length; i < l; i++) {
//   console.log('ops: entered for loop');
//   ops[i].onclick = Calculadora.moveNum;
// };

// Add click event to operators
suma.onclick = Calculadora.moveNum;
resta.onclick = Calculadora.moveNum;
multip.onclick = Calculadora.moveNum;
divd.onclick = Calculadora.moveNum;

// Add click event to equal sign
igual.onclick = Calculadora.equals;

// Add click event to clear button
Calculadora.el("#on").onclick = Calculadora.clear;
