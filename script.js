var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0, 2, 1, 2, 3, 3, 2, 1, 2, 0, 0, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0, 2, 1, 2, 2, 2, 2, 1, 2, 0, 0, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0, 2, 1, 2, 1, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var score = 0;
var pacman = {
    x: 3,
    y: 3
}
var redghost = {
    x: 21,
    y: 5
}
var blueghost = {
    x: 11,
    y: 5
}

function displayworld() {
    var output = '';

    for (var i = "0"; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = "0"; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if (world[i][j] == 0)
                output += "<div class='empty'></div>";
            else if (world[i][j] == 3)
                output += "<div class='furit'></div>";
            // else if (world[i][j] == 4)
            //     output += "<div id='blueghost'></div>";
        }
        output += "</div>";
    }
    // console.log(document);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}

function displayGhost() {
    document.getElementById('redghost').style.top = redghost.y * 20 + "px";
    document.getElementById('redghost').style.left = redghost.x * 20 + "px";
    document.getElementById('blueghost').style.top = blueghost.y * 20 + "px";
    document.getElementById('blueghost').style.left = blueghost.x * 20 + "px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}


displayworld();
displayPacman();
displayGhost();
displayScore();

document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--
            $("pacman").rotate(90);
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
    } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
    }
    var angle = 0;

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayScore();
        displayworld();
    }
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayScore();
        displayworld();
    }

    // console.log(e.keyCode);
    displayworld();
    displayPacman();

}