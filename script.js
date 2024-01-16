// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age

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

Employee.prototype.jobGreet=function () {
	console.log(`my name is ${}, I am ${age} years old and my jobTitle is ${jobTitle}`)
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
