class Paper {
    constructor(x, y,radius) {

      var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
      }
      
     this.body= Matter.Bodies.circle(x,y,radius);
      this.width = width;
      this.height = height;
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      circle(pos.x,pos.y, this.width, this.height);
      ellipseMode(CENTER);
    }
  };
  