// import chalk from "chalk";
var chalk = require('chalk');

function Dog2() {
    this.name = name;
    this.stomach = [];
}

Dog2.prototype.eat = function(cat) {
    this.stomach.push(cat);
}

Dog2.prototype.sayHi = function() {
    console.log('Hi! I am a dog. My name is ' + chalk.red(this.name));
}

module.exports = Dog2;