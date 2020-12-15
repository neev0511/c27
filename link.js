class Link{
constructor(BodyA,BodyB){
var options={
    bodyA:BodyA,
    bodyB:BodyB,
    length:50,
    stiffness:0.2
}
this.link=Constraint.create(options)
World.add(world,this.link);
}
display(){
    var pointA=this.link.bodyA.position
    var pointB=this.link.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}