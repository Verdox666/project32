class Slingshot
{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:2,
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    


    display(){
   if(this.sling.bodyA){
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB;
       
   }
    }
    
}