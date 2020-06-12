class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        this.body = Bodies.circle(50,200,20);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        //World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);
        pop();
      }
}