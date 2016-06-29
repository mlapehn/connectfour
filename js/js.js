$(document).ready(function() {
    var elems = document.getElementsByClassName("hole");
    var check = jQuery.makeArray(elems);
    var playerWin = 0;
    var player2Win = 0;
    var win = false;
    var loss = false;
    // var player1 = black
    // var player2 = red
    var elemsOne = document.getElementById("row-one").getElementsByClassName(
        "hole");
    var rowOne = jQuery.makeArray(elemsOne);
    var elemsTwo = document.getElementById("row-two").getElementsByClassName(
        "hole");
    var rowTwo = jQuery.makeArray(elemsTwo);
    var elemsThree = document.getElementById("row-three").getElementsByClassName(
        "hole");
    var rowThree = jQuery.makeArray(elemsThree);
    var elemsFour = document.getElementById("row-four").getElementsByClassName(
        "hole");
    var rowFour = jQuery.makeArray(elemsFour);
    var elemsFive = document.getElementById("row-five").getElementsByClassName(
        "hole");
    var rowFive = jQuery.makeArray(elemsFive);
    var elemsSix = document.getElementById("row-six").getElementsByClassName(
        "hole");
    var rowSix = jQuery.makeArray(elemsSix);
    var elemsSeven = document.getElementById("row-seven").getElementsByClassName(
        "hole");
    var rowSeven = jQuery.makeArray(elemsSeven);

    var turn = "black";

    function switchTurn() {
        if (turn === "black") {turn = "red"}
         else if (turn === "red") {
                turn = "black"
            }
    }

    $("#row-one").on("click", function() {
        if (rowOne.length > 0) {
            $(rowOne[rowOne.length - 1]).addClass(turn);
            switchTurn();
            rowOne.splice(rowOne.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-two").on("click", function() {
        if (rowTwo.length > 0) {
            $(rowTwo[rowTwo.length - 1]).addClass(turn);
            rowTwo.splice(rowTwo.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-three").on("click", function() {
        if (rowThree.length > 0) {
            $(rowThree[rowThree.length - 1]).addClass(turn);
            rowThree.splice(rowThree.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-four").on("click", function() {
        if (rowFour.length > 0) {
            $(rowFour[rowFour.length - 1]).addClass(turn);
            rowFour.splice(rowFour.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-five").on("click", function() {
        if (rowFive.length > 0) {
            $(rowFive[rowFive.length - 1]).addClass(turn);
            rowFive.splice(rowFive.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-six").on("click", function() {
        if (rowSix.length > 0) {
            $(rowSix[rowSix.length - 1]).addClass(turn);
            rowSix.splice(rowSix.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });
    $("#row-seven").on("click", function() {
        if (rowSeven.length > 0) {
            $(rowSeven[rowSeven.length - 1]).addClass(turn);
            rowSeven.splice(rowSeven.indexOf(this), 1);
            checkForWin();
            checkForTie();
        }
    });

    function checkForWin() {
        for (var i = 0; i < 42; i++) {
            if ($(check[i]).hasClass("black") && $(check[(i + 5)]).hasClass(
                    "black") && $(check[(i + 10)]).hasClass("black") &&
                $(check[(i + 15)]).hasClass("black")) {
                if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !==
                    7 && i !== 8 && i !== 12 && i !== 13 && i !==
                    14 && i !== 18 && i !== 19 && i !== 20 && i !==
                    24 && i !== 25 && i !== 26) {
                    win = true;
                    console.log("forward")
                }
            } else if ($(check[i]).hasClass("black") && $(check[(i +
                7)]).hasClass("black") && $(check[(i + 14)]).hasClass(
                "black") && $(check[(i + 21)]).hasClass("black")) {
                if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !==
                    10 && i !== 11 && i !== 15 && i !== 16 && i !==
                    17 && i !== 21 && i !== 22 && i !== 23) {
                    win = true;
                    console.log("back")
                }
            } else if ($(check[i]).hasClass("black") && $(check[(i +
                6)]).hasClass("black") && $(check[(i + 12)]).hasClass(
                "black") && $(check[(i + 18)]).hasClass("black")) {
                win = true;
                console.log("horizontal")
            } else if ($(check[i]).hasClass("black") && $(check[(i +
                1)]).hasClass("black") && $(check[(i + 2)]).hasClass(
                "black") && $(check[(i + 3)]).hasClass("black")) {
                if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 &&
                    i != 11 && i != 15 && i != 16 && i != 17 && i !=
                    21 && i != 22 && i != 23 && i != 27 && i != 28 &&
                    i != 29 && i != 33 && i != 34 && i != 35) {
                    win = true;
                    console.log("vertical")
                }
            }
            console.log(win);
        }
        if (win === true) {
            alert("win");
            clearBoard();
            playerWin++;
            $("red").text(playerWin);
        }
    }

    function checkForLoss() {
        for (var i = 0; i < 42; i++) {
            if ($(check[i]).hasClass("red") && $(check[(i + 5)]).hasClass(
                    "red") && $(check[(i + 10)]).hasClass("red") &&
                $(check[(i + 15)]).hasClass("red")) {
                if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !==
                    7 && i !== 8 && i !== 12 && i !== 13 && i !==
                    14 && i !== 18 && i !== 19 && i !== 20 && i !==
                    24 && i !== 25 && i !== 26) {
                    loss = true;
                    console.log("forward")
                }
            } else if ($(check[i]).hasClass("red") && $(check[(i +
                7)]).hasClass("red") && $(check[(i + 14)]).hasClass(
                "red") && $(check[(i + 21)]).hasClass("red")) {
                if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !==
                    10 && i !== 11 && i !== 15 && i !== 16 && i !==
                    17 && i !== 21 && i !== 22 && i !== 23) {
                    loss = true;
                    console.log("back")
                }
            } else if ($(check[i]).hasClass("red") && $(check[(i +
                6)]).hasClass("red") && $(check[(i + 12)]).hasClass(
                "red") && $(check[(i + 18)]).hasClass("red")) {
                loss = true;
                console.log("horizontal")
            } else if ($(check[i]).hasClass("red") && $(check[(i +
                1)]).hasClass("red") && $(check[(i + 2)]).hasClass(
                "red") && $(check[(i + 3)]).hasClass("red")) {
                if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 &&
                    i != 11 && i != 15 && i != 16 && i != 17 && i !=
                    21 && i != 22 && i != 23 && i != 27 && i != 28 &&
                    i != 29 && i != 33 && i != 34 && i != 35) {
                    loss = true;
                    console.log("vertical")
                }
            }
            console.log(loss);
        }
        if (loss === true) {
            alert("You Lose");
            clearBoard();
            computerWin++;
            $("red").text(computerWin);
        }
    }

    function checkForTie() {
        if (win === false && loss === false && rowOne.length === 0 &&
            rowTwo.length === 0 && rowThree.length === 0 && rowFour
            .length === 0 && rowFive.length === 0 && rowSix.length ===
            0 && rowSeven.length === 0) {
            alert("Try Again!");
            tie++;
            clearBoard();
            $(".ties").text(playerWin);
        }
    }

    function clearBoard() {
        $(".hole").removeClass("black");
        $(".hole").removeClass("red");
        win = false;
        loss = false;
        rowOne = jQuery.makeArray(elemsOne);
        rowTwo = jQuery.makeArray(elemsTwo);
        rowThree = jQuery.makeArray(elemsThree);
        rowFour = jQuery.makeArray(elemsFour);
        rowFive = jQuery.makeArray(elemsFive);
        rowSix = jQuery.makeArray(elemsSix);
        rowSeven = jQuery.makeArray(elemsSeven);
    };
});