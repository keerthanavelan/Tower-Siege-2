class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("galaxy_square.png");
  }
  display(){
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(106, 13, 173,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, width, height);
       pop();
     }
  }
};
