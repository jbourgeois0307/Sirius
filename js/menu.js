let spriteList = [];

window.onload = () => {

	spriteList.push(new Doggo());
	spriteList.push(new Title());

	setTimeout(() => tickDoggo(), 3000);
	tickTitle();
}

tickDoggo = () => {
	spriteList[0].tick();
	window.requestAnimationFrame(tickDoggo);
}

tickTitle = () =>{
	spriteList[1].tick();
	window.requestAnimationFrame(tickTitle);
}