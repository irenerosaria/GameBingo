var bag = [];
var extracted = [];

exports.init = function() {
    bag = [];
    extracted = [];
    for(var i=1; i<=90; i++) {
        bag.push(i);
    }
}

exports.extract = function() {
    if (bag.length === 0) {
        return null;
    }
    var index = parseInt(Math.random() * bag.length);
    var result = bag.splice(index, 1);
    var n = result[0];
    extracted.push(n);
    return n;
}

exports.getExtracted = function() {
    return extracted;
}

exports.getBag = function() {
    return bag;
}

this.init();
console.log(this.extract());
console.log(this.getExtracted());
