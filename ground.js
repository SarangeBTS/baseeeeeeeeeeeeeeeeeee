class Ground{
    constructor(x,y,w){
        var options={
            isStatic:true
        }
        this.bodies=Bodies.rectangle(x,y,w,40,options);
        this.width=w;
        this.height=40;
        World.add(myworld,this.bodies);
       
    }


    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height);
    }
}