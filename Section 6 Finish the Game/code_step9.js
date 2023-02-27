function clearButtonHandler() {
    console.log("Clear the game: stop playing, clear the grid");

    playing = false;
    var startButton = document.getElementById("start");
    startButton.innerHTML = "start";
    clearTimeout(timer);

    var cellsList = document.getElementsByClassName("live");
    // convert to array first, otherwise, you're working on a live node list
    // and the update doesn't work! 
    var cells = [];
    for (var i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetGrids();
}