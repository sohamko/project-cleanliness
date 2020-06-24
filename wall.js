class Wall{
constructor(x,y,width,height){
var options={
density:50,
friction:5,
restitution:0.5,
isStatic:true,
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
fill("blue");
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)
stroke("green");
strokeWeight(10);
pop();

}


}