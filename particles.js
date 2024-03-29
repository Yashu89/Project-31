class Particles{
    constructor(x, y, radius){

        var op={
            restitution : 0.3,
        }
        this.r = radius
        this.body = Bodies.circle(x, y, this.r, op)
        this.colour = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body)
        console.log(this.body)

    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill(this.colour)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop()
        }
    }
