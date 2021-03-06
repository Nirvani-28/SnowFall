class Snow {
    constructor(x, y) {
        var options = {

            friction: 0,
            density: 0.1

        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        image(this.image, 0, 0, 60, 100);
        pop();
    }

};