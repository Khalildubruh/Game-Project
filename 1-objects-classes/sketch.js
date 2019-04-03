//create a variable to hold one Dog
let b;
let anotherDog;

let c;

let d;
let anotherBone;

function setup() {
  createCanvas(800, 400);
  b = new Dog(0, 100,"red"); //make a new Dog from the Dog class and call it b.
  anotherDog = new Dog(200,20,"green");
  c = new Dog(69, 69, "purple");
  anotherDog = new Dog(10,200,"blue");
  d = new Bone(44, 44, "black");
  anotherBone = new Bone(255, 10, "orange");
}


function draw(){
	background(220);
    b.drawDog(); //draw the Dog called b (go look in the Dog class for the drawDog function)
    b.moveDog(); //move the Dog called b (go look in the Dog class for the moveDog function)
    b.drawBone();
    b.moveBone();
    anotherBone.drawBone();
    anotherBone.drawBone();
    anotherDog.drawDog();
    anotherDog.moveDog();
}
//Bone class from which to create new Bone with similar properties.
class bone {

  constructor(x,y,color, diameter){ //every Dog needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter= 3
	}
	drawBone(){  // draw a Dog on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x, this.y, 10, 20)
	}
	moveBone(){ //update the location of the Dog, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;

}
}
//Dog class from which to create new Dogs with similar properties.
class Dog {

	constructor(x,y,color, diameter){ //every Dog needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter= 12
	}
	drawDog(){  // draw a Dog on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,10,10);
	}
	moveDog(){ //update the location of the Dog, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
