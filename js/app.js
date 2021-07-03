var string_num_total = "";
var boolean = 0;
var strtot = [];
var oldNum = ""; // First number
var theNum = ""; // Current number
var operator;
var result;
var display = document.getElementById('display');

var Calculadora = {
  //change number size when pressed
  press:function(id){
    elem = document.getElementById(id);
    console.log(elem);
    elem.onclick = Calculadora.click(elem);
    elem.addEventListener("mouseup",function(event){
      console.log("funciona");
      //elem.style.transform = "scale(1)";
    })
  },
  click: function(elem){
    elem.style.transform = "scale(0.85)";
  },
  mouseup: function(elem){
    elem.style.transform = "scale(1)";
  },
  //store theNum
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
  //store oldNum
  moveNum: function(string){
    string = string.toString()
    oldNum = string;
    theNum= "";
    return oldNum;
  },
  /*moveRes: function(string){
    string = string.toString()
    oldNum = string;
    theNum= "";
    return oldNum;
  },*/

  identify: function(id){
    Calculadora.string1(id);
  },

  operations: function(operator, oldNum, theNum){
    console.log("Entered operations");
    //Convert string to float
    oldNum = parseFloat(oldNum);
    //console.log(oldNum);
    theNum = parseFloat(theNum);
    //console.log(theNum);
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
      console.log("resultado: "+ result.toString());
      display.innerHTML = result.toString();
    }else{
      display.innerHTML = result.toString().slice(0, 8);
    }
    /*oldNum = result.toString();
    theNum = "";*/
    theNum = result.toString();
    Calculadora.moveNum(theNum);
    //Calculadora.moveRes(result);
    //return theNum;
  },

  clear: function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
  }
};


/*//////////*Get element ID with click*//////////////

//get display
document.getElementById('display').onclick = Calculadora.press;
//

document.getElementById('on').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.clear();
});
document.getElementById('sign').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify("-");
});
document.getElementById('raiz').onclick = Calculadora.press;
document.getElementById('dividido').addEventListener("click", function(event){
  Calculadora.press(this.id);
  operator = this.id;
  Calculadora.moveNum(theNum);
});
document.getElementById('por').addEventListener("click", function(event){
  Calculadora.press(this.id);
  operator = this.id;
  Calculadora.moveNum(theNum);
});
document.getElementById('menos').addEventListener("click", function(event){
  Calculadora.press(this.id);
  operator = this.id;
  Calculadora.moveNum(theNum);
});
document.getElementById('punto').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(".");
});
document.getElementById('igual').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.operations(operator, oldNum, theNum);
});
document.getElementById("mas").addEventListener("click", function(event){
  Calculadora.press(this.id);
  operator = this.id;//guarda id de operador para luego usarlo en funcion operations dentro de obj Calculadora
  Calculadora.moveNum(theNum);
});
//document.getElementById("1").addEventListener("click", Calculadora.press);
document.getElementById("1").addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
//document.getElementById("1").addEventListener("click", Calculadora.identify);
//document.getElementById("1").addEventListener("click", Calculadora.string1);
//document.getElementById("1").addEventListener("click", Calculadora.assignNum);
//document.getElementById('1').onclick = Calculadora.press, Calculadora.asignar;
document.getElementById('2').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('3').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('4').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('5').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('6').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('7').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('8').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('9').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
document.getElementById('0').addEventListener("click", function(event){
  Calculadora.press(this.id);
  Calculadora.identify(this.id);
});
