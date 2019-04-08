var string_num_total = "";
var boolean = 0;
var strtot = [];
var oldNum = ""; // First number
var theNum = ""; // Current number
var operator;
var result;
var display = document.getElementById('display');

var Calculadora = {
  press:function(id){
    elem = document.getElementById(id);
    console.log(elem);
    elem.onclick = Calculadora.click(elem);
    elem.addEventListener("mouseup",function(event){
      console.log("funciona");
    })
  },
  click: function(elem){
    elem.style.transform = "scale(0.85)";
  },
  mouseup: function(elem){
    elem.style.transform = "scale(1)";
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
  //store oldNum
  moveNum: function(string){
    string = string.toString()
    oldNum = string;
    console.log("oldNum: " + oldNum);
    theNum= "";
    return oldNum;
  },

  identify: function(id){
    Calculadora.string1(id);
  },
  equals: function(result, theNum, operator){
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
  },

  operations: function(operator, oldNum, theNum){
    console.log("Entered operations");
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
      console.log("resultado: "+ result.toString());
      display.innerHTML = result.toString();
    }else{
      display.innerHTML = result.toString().slice(0, 8);
    }
    document.getElementById('igual').addEventListener('click', function(event){
      let equal = equals(operator, result, theNum)
    });
  },

  clear: function() {
    oldNum = "";
    theNum = "";
    display.innerHTML = "0";
  }
};
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
