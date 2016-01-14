//create a base class
function Student(id,name){
   this.id = id;
   this.name = name;
   this.getName = function(){
      alert("I am from prototype");
   }
}

//create another class and make base class this one's prototype
function SchoolStudent(schoolname){
   this.schoolname = schoolname;
}

SchoolStudent.prototype = new Student();

var s = new SchoolStudent('Wadia');
s.getName();//Output : I am from prototype


//Another example
//You can plug in custom methods to already defined types in Javascript
//Here we are plugging in a newMethod to String's prototype.
String.prototype.newMethod = function(){alert("Hey I am custom method added to String. Check me out !!!")};

var str = "Hello World";
str.newMethod();//Output : Hey I am custom method added to String. Check me out !!!