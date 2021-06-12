class Polygon{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.05,
            density:0.09

        }

        this.body = Bodies.circle(250,540,20,options);
        this.width =35;
        this.image = loadImage("polygon.png");

       
        World.add(world, this.body);
    }

    display() {
     
        var pos = this.body.position;
        var angle= this.body.angle;
        strokeWeight(2);
        fill("yellow");
        
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,35,35);

    }
}