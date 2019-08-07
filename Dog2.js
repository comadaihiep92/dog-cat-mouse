function Dog2() {
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
}