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
RabbitList[0] = new Rabbit(0, 100, 200, 10, "rabbit");
console.log(RabbitList[0].Speed);
RabbitList[0].Speed = 20;
console.log(RabbitList[0].Speed);
console.log(RabbitList[0].animal);
RabbitList[0].moveLeft();
RabbitList[0].moveUp();
RabbitList[0].showAll();

