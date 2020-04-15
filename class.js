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

	moveLeft(){

		this.x-=this.speed;
	}

	moveRight(){

		this.x+=this.speed;
	}

	moveUp(){

		this.y-=this.speed;
	}

	moveDown(){

		this.y+=this.speed;
	}

	showAll(){

		console.log(this.id);
		console.log(this.x);
		console.log(this.y);
		console.log(this.speed);
	}
}

class Rabbit extends Animal{

	constructor(id, x, y, speed, animal){

		super(id, x, y, speed);
		this.animal = animal;
	}
}

let RabbitList = [];

class Car extends Animal{

	constructor(id, x, y, speed, color){

		super(id, x, y, speed);
		this.color = color;
	}
}

CarList = [];

RabbitList[0] = new Rabbit(0, 100, 200, 10, "rabbit");

CarList[0] = new Car(0, 10, 20, 100, "red");

console.log(RabbitList[0].Speed);
RabbitList[0].Speed = 20;
console.log(RabbitList[0].Speed);
RabbitList[0].moveLeft();
RabbitList[0].moveUp();
RabbitList[0].showAll();
console.log(RabbitList[0].animal);
CarList[0].showAll();
CarList[0].moveDown();
CarList[0].showAll();
console.log(CarList[0].color);



