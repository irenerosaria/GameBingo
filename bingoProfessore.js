var bingo = require('bingo-extract');

exports.table = bingo;

exports.createTable = function(){
    bingo.reset();
    for (var i=0; i<15; i++) {
        bingo.extract();
    }
    return bingo.getExtracted();
}

exports.createPlayers = function(n) {
    var players = [];
    for(var i=0; i<n; i++) {
        players.push(createTable());
    }
    return players;
}

exports.createMatch = function(players) {
    bingo.reset();
    while(true) {
        var extractedNumber = bingo.extract();
        for(var i=0; i<players.length; i++) {
            var index = players[i].indexOf(extractedNumber);
            if (index >= 0) {
                players[i].splice(index, 1);
                if (players[i].length === 0) {
                    return i;
                }
            }
        }
    }
}