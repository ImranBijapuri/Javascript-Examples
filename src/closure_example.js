//Many a times we need to keep hold of the values returned by function in the program
//closures provide a way doing it
//Here the function inner keeps hold of the value passed as parameter to the outer function
//and also the value of local variable
function outer(name){
    var id = 100;
  var inner = function(){
     alert("This is my name " + name + " and my id is " +id);
  }
return inner;
}


var firstcall = outer("Imran");
firstcall();