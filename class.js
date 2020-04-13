class Animal{

	constructor(id, x, y, speed){

		this.id = id;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	get Speed(){

		return this.speed;
	}

	set Speed(speed){

		this.speed = speed;
	}
}

class Rabbit extends Animal{

	constructor(id, x, y, speed, animal){

		super(id, x, y, speed);
		this.animal = animal;
	}
}

let RabbitList = [];
RabbitList[0] = new Rabbit(0, 100, 100, 10, "rabbit");
console.log(RabbitList[0].Speed);
RabbitList[0].Speed = 20;
console.log(RabbitList[0].Speed);
console.log(RabbitList[0].animal);
console.log("Ok");
