class Bird extends BaseClass {
  constructor(x,y){
    super(300,300,50,50);
   // this.image = loadImage("sprites/bird.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    //polygon=Bodies.circle(550,200,20);
  // World.add(world,polygon);
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);

    for(var i=0;i>this.trajectory.length;i++){
     // this.image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
