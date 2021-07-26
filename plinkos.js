class Plinko{

    constructor(x, y){

        var op = {
            isStatic : true 
        }
        this.radius = 10
        this.body = Bodies.circle(x, y, this.radius, op)
        World.add(world, this.body)
}

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0, this.radius, this.radius)
        pop()
    }   

}