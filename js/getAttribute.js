var resultNum,
theNum ='';//current number
setNum = '';

var Calculadora = {
  el: function(element) {

      if (element.charAt(0) === "#") { // If passed  ID...
        return document.querySelector(element); // ... returns single element
      }else{
        console.log(document.querySelectorAll(element));
        return document.querySelectorAll(element);
      };
    }
};
// When: Number is clicked. Get the current number selected
var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("id");
      console.log(theNum);
    }
  };

var nums = Calculadora.el(".tecla");//lista de teclas

// Add click event to numbers
for (var i = 0, l = nums.length; i < l; i++) {
nums[i].onclick = setNum;
};
