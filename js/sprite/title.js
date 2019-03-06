class Title {
	constructor(){
		this.posX = 40;
		this.posY = 0;
		this.speed = 0.1;
		this.velocity = 1.001;
		this.jump = -1;
		this.maxHeight = 50;
		this.jumpHeight = 5;
		this.size= 1;
		this.minHeight = this.maxHeight-this.jumpHeight;
		this.ascending=false;
		this.fullSize= false;

		this.e = document.createElement("div");
		this.e.setAttribute("class", "title");

		this.e.style.top = this.posY + 'px';
		this.e.style.left = this.posX + 'px';

		document.body.appendChild(this.e);
	}

	tick() {
		if(!this.ascending){
			this.speed*=this.velocity;
			this.posY+=this.speed;
			if(this.posY>=this.maxHeight){
				this.ascending=true;
			}
			this.sizeUp();
		}
		else{
			this.speed/=this.velocity;
			this.posY-=this.speed;
			if(this.posY<=this.minHeight){
				this.ascending=false;
			}
		}
		this.e.style.top = this.posY + 'px';
		this.e.style.left = this.posX + 'px';
	}

	sizeUp() {
		if(!this.fullSize){
			this.size+=0.0005;
			if(this.size>=1.2){
				this.fullSize=true;
			}
			this.e.style.transform ='scale('+this.size+')';
		}
	}
}