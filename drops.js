class Drops{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    }
    update(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
    }
    display(){
      var angle = this.body.angle;
      push();
      fill("blue")
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      ellipse(0, 0, 5);
      pop();
    }
}