console.log('Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.');

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

function addPowerFromName(obj1, obj2) {
    const name1 = obj1.name;
    const name2 = obj2.name;
	
    obj1.power = obj1.power + (name1.length * 35);
    obj2.power = obj2.power + (name2.length * 35);

}

function comparePower(obj1, obj2) {
    addPowerFromName(obj1, obj2);
    if( obj1.power === obj2.power ) {
		return 'Both are of same power';
	}
    else if( obj1.power > obj2.power ){
		return obj1.power;
	} else {
		return obj2.power;
	}
}

console.log(ram, krishna);
console.log(comparePower(ram, krishna));
console.log(ram, krishna);