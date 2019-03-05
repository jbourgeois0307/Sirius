let spriteList = [];

window.onload = () => {

	spriteList.push(new Doggo());
	setTimeout(() => tick(), 3000);
}

tick = () => {
	for(let i =0; i<spriteList.length; ++i){
		spriteList[i].tick();
	}
	window.requestAnimationFrame(tick);
}