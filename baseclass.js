class  BaseClass{
    constructor(x,y,w,h,angle){
        var options={
            restitution:0.7,
            friction:1.2,
            density:1
          }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height =h ;
        this.image=loadImage("sprites/base.png");
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var a = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(a);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}