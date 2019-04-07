var operator;
var oldNum = '0';
var newNum = '0';
var display = document.getElementById('display');


var Calculadora ={
  createNumber: function(){
    document.getElementById('1').addEventListener('click', function(event){
      Calculadora.createNumber(this.id);
    });
    document.getElementById('2').addEventListener('click', function(event){
      Calculadora.createNumber(this.id);
    });
    newNum = newNum + id;
    console.log(newNum);
    display.innerHTML = newNum;
    return newNum;
  },

  moveNum:function(newNum){
    oldNum = newNum;
    return oldNum
  },

  capture:function(){
    document.getElementById('mas').addEventListener('click', function(event){
      Calculadora.moveNum(newNum);
      oldNum = parseFloat(oldNum);
      newNum = parseFloat(newNum);
      result = newNum + oldNum;
      console.log('result: ' +  result.toString());
      newNum = '0';
      console.log('newNum: ' + newNum + ' oldNum: ' + oldNum + 'result: ' + result);
      display.innerHTML = '';
    });
    document.getElementById('menos').addEventListener('click', function(event){
      oldNum = parseFloat(oldNum);
      newNum = parseFloat(newNum);
      oldNum = newNum - oldNum;
      console.log('result: ' +  oldNum.toString());
      newNum = '0';
      console.log('newNum: ' + newNum + ' oldNum: ' + oldNum);
      display.innerHTML = '';
    });
  },
  suma:function(newNum, oldNum){
    result = newNum + oldNum;

  }
};

Calculadora.capture();
