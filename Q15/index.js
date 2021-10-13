console.log('Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.');

const ram = {
    name: 'Ram',
    age: 25,
    yuga: 'Treta',
    power: 2500
};

const krishna = {
    name: 'Krishna',
    age: 31,
    yuga: 'Dwapar',
    power: 2325
};

function comparePower(obj1, obj2) {
    if(obj1.power === obj2.power) {
		return 'Both are of same power';
	}
    else if(obj1.power > obj2.power){
		return obj1.power;
	} else {
		return obj2.power;
	}
}

console.log(comparePower(ram, krishna));