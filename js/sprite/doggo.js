class Doggo {
	constructor(){
		this.posX = 300;
		this.posY = 500;
		this.speed = 1.5;
		this.velocity = 1.5;
		this.jump = -1;
		this.maxHeight = 200;
		this.jumpHeight = 10;
		this.size= 1.3;
		this.minHeight = this.maxHeight-this.jumpHeight;

		this.e = document.createElement("div");
		this.e.setAttribute("class", "doggo");


		this.e.style.top = this.posY + 'px';
		this.e.style.left = this.posX + 'px';

		this.e.onclick = () => {
			this.lowerDown();
		}

		this.e.style.transform ='scale('+this.size+')';
		document.body.appendChild(this.e);
	}

	tick() {
		if(this.jump==-1){
			this.posY-=this.speed;
			if(this.posY<=this.minHeight){
				this.e.style.transform ='scale('+this.size+')';
				this.size+=0.01;
				this.jump=1;
			}
		}
		else{
			this.posY+=this.speed;
			if(this.posY>=this.maxHeight){
				this.e.style.transform ='scale('+this.size+')';
				this.size-=0.01;
				this.jump=-1;
			}
		}
		this.e.style.top = this.posY + 'px';
	}
	lowerDown() {
		if(this.speed<5){
			this.speed*=1.5;
		}
		else{
			this.speed=1;
		}

		this.jumpHeight=25;
		this.maxHeight=600;
		this.minHeight=this.maxHeight-this.jumpHeight;
		this.jump=-1;
	}
}