/*var Grub = function() {
    this.age  = 0,
	this.color = 'pink',
	this.food = 'jelly'
};

Grub.prototype.eat = function(){
	console.log ("This " +this.age + " year old bee is eating some " + this.food + "!");
}*/


var Bee = function() {
    Grub.call(this);
    this.age  = 5,
	this.color = 'yellow',
	this.job = "keep on growing";
};
Bee.prototype = new Grub();
Bee.prototype.constructor = Bee;

/* var HoneyMakerBee = function(){
	Bee.call(this);
	this.age = 10;
	this.job = "make honey";
	this.honeyPot = 0;
}
HoneyMakerBee.prototype = new Bee();
HoneyMakerBee.prototype.constructor= HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function (){
	this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function (){
	this.honeyPot--;
}

var ForagerBee = function(){
	Bee.call(this);
	this.age = 10;
	this.job = "find pollen";
	this.canFly = true;
	this.treasureChest  = [];
}
ForagerBee.prototype = new Bee();
ForagerBee.prototype.constructor= ForagerBee;
ForagerBee.prototype.forage = function (treasure){
	this.treasureChest.push(treasure);
    return treasure;
}

var RetiredForagerBee = function(){
	ForagerBee.call(this);
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = "grey"; 
}
RetiredForagerBee.prototype = new ForagerBee();
RetiredForagerBee.prototype.constructor= RetiredForagerBee;
RetiredForagerBee.prototype.forage = function (treasure){
	return "I am too old, let me play cards instead";
}
RetiredForagerBee.prototype.gamble = function (treasure){
	this.treasureChest.push(treasure);
}




