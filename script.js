// complete this js code
function Person(name, age) {
	person.prototype.greet=function(){
		console.log(`my name is ${name}, I am ${age} years old`)
	}
}



function Employee(name, age, jobTitle) {
	Person.call(this,name,age)
	this.jobTitle=jobTitle
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee

var emp1=new Employee("luffy",23,"kaizokoni worewa")
console.log(emp1)
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
