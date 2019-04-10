var string_num_total = "";
var boolean = 0;
var strtot = [];
var oldNum = ""; // First number
var theNum = ""; // Current number
var operator;
var result;
var display = document.getElementById('display');

var Calculadora = {
  el: function(element) {
    if (element.charAt(0) === "#") { // If passed  ID...
      return document.querySelector(element); // ... returns single element
    }else{
      console.log(document.querySelectorAll(element));
      return document.querySelectorAll(element);
    };
  },
  setNum : function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("id");
      console.log(theNum);
    }
  },
  string1: function(id){
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

  moveNum: function(string){
    string = string.toString()
    oldNum = string;
    console.log("oldNum: " + oldNum);
    theNum= "";
    return oldNum;
  },

  equals: function(operator, result, theNum){
    console.log('****entrado a equals****');
    switch(operator){
      case "mas":
        result = result + theNum;
        break;
      case "menos":
        result = result - theNum;
        break;
      case "por":
        result = result * theNum;
        break;
      case "dividido":
        result = result / theNum;
        break;
      default:
        result = result;
    }
    if(result.toString().length<8){
      console.log("resultado: "+ result.toString());
      display.innerHTML = result.toString();
    }else{
      display.innerHTML = result.toString().slice(0, 8);
    }
  },
  clear: function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
  }
};

var resultNum,
theNum ='';//current number
setNum = '';


var nums = Calculadora.el(".tecla");//lista de teclas

// Add click event to numbers
for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = Calculadora.setNum;
};
