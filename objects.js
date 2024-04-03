// Base operator object that is initialized with only one variable
function Operator(n) {
  this.name = n;
}

// This is a function prototype that is prints the name to the screen
Operator.prototype.display_name = function (a) {
  document.getElementById(a).innerHTML = this.name;
};
