console.log('Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar.Write a function which takes two objects and return the person with more age.');

const ram = {
    name: 'Ram',
    age: 25,
    yuga: 'Treta'
};

const krishna = {
    name: 'Krishna',
    age: 31,
    yuga: 'Dwapar'
};

function compareAge(obj1, obj2) {
    if(obj1.age === obj2.age) {
		return 'Both are of same age';
	}
    else if(obj1.age > obj2.age){
		return obj1.age;
	} else {
		return obj2.age;
	}
}

console.log(compareAge(ram, krishna));