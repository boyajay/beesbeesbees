var Grub = function() {
    this.age  = 0,
	this.color = 'pink',
	this.food = 'jelly'
};

Grub.prototype.eat = function(){
	console.log ("This " +this.age + " year old bee is eating some " + this.food + "!");
}