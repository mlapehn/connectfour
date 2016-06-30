$(document).ready(function() {

    $(document).ready(function(){
    $("form").submit(function(){
        //id pl1 = player1
        player1 = document.getElementById("pl1").getElementsByClassName("play1");
        //id pl2 = player2
        player1 = document.getElementById("pl2").getElementsByClassName("play2");
        //id pl3
        player1 = document.getElementById("pl3").getElementsByClassName("play3");
        //id pl4
        player2 = document.getElementById("pl4").getElementsByClassName("play4");


        alert("It's go time!!!");
        });
    });



    function switchTurn() {
        if (turn === "black") {
            turn = "red";
        } else if (turn === "red") {
            turn = "black";
        }
    }
    var elems = document.getElementsByClassName("hole");
    var check = jQuery.makeArray(elems);
    var playerWin = 0;
    var player2Win = 0;
    var win = false;
    var loss = false;
    
    var elemsOne = document.getElementById("colm-one").getElementsByClassName(
        "hole");
    var colmOne = jQuery.makeArray(elemsOne);
    var elemsTwo = document.getElementById("colm-two").getElementsByClassName(
        "hole");
    var colmTwo = jQuery.makeArray(elemsTwo);
    var elemsThree = document.getElementById("colm-three").getElementsByClassName(
        "hole");
    var colmThree = jQuery.makeArray(elemsThree);
    var elemsFour = document.getElementById("colm-four").getElementsByClassName(
        "hole");
    var colmFour = jQuery.makeArray(elemsFour);
    var elemsFive = document.getElementById("colm-five").getElementsByClassName(
        "hole");
    var colmFive = jQuery.makeArray(elemsFive);
    var elemsSix = document.getElementById("colm-six").getElementsByClassName(
        "hole");
    var colmSix = jQuery.makeArray(elemsSix);
    var elemsSeven = document.getElementById("colm-seven").getElementsByClassName(
        "hole");
    var colmSeven = jQuery.makeArray(elemsSeven);
    var turn = "black";
    var black = "player1";
    var red = "player2";
    function setMessage(msg) {
            document.getElementById("message").innerText = msg;
        }
    $("#colm-one").on("click", function() {
        if (colmOne.length > 0) {
            $(colmOne[colmOne.length - 1]).addClass(turn);
            colmOne.splice(colmOne.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-two").on("click", function() {
        if (colmTwo.length > 0) {
            $(colmTwo[colmTwo.length - 1]).addClass(turn);
            colmTwo.splice(colmTwo.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-three").on("click", function() {
        if (colmThree.length > 0) {
            $(colmThree[colmThree.length - 1]).addClass(turn);
            colmThree.splice(colmThree.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-four").on("click", function() {
        if (colmFour.length > 0) {
            $(colmFour[colmFour.length - 1]).addClass(turn);
            colmFour.splice(colmFour.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-five").on("click", function() {
        if (colmFive.length > 0) {
            $(colmFive[colmFive.length - 1]).addClass(turn);
            colmFive.splice(colmFive.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-six").on("click", function() {
        if (colmSix.length > 0) {
            $(colmSix[colmSix.length - 1]).addClass(turn);
            colmSix.splice(colmSix.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });
    $("#colm-seven").on("click", function() {
        if (colmSeven.length > 0) {
            $(colmSeven[colmSeven.length - 1]).addClass(turn);
            colmSeven.splice(colmSeven.indexOf(this), 1);
            checkForWin();
            checkForTie();
            switchTurn();
        }
    });

    function checkForWin() {
        for (var i = 0; i < 42; i++) {
            if ($(check[i]).hasClass(turn) && $(check[(i + 5)]).hasClass(
                turn) && $(check[(i + 10)]).hasClass(turn) && $(
                check[(i + 15)]).hasClass(turn)) {
                if (i !== 0 && i !== 1 && i !== 2 && i !== 6 && i !==
                    7 && i !== 8 && i !== 12 && i !== 13 && i !==
                    14 && i !== 18 && i !== 19 && i !== 20 && i !==
                    24 && i !== 25 && i !== 26) {
                    win = true;
                    console.log("forward");
                }
            } else if ($(check[i]).hasClass(turn) && $(check[(i + 7)])
                .hasClass(turn) && $(check[(i + 14)]).hasClass(turn) &&
                $(check[(i + 21)]).hasClass(turn)) {
                if (i !== 3 && i !== 4 && i !== 5 && i !== 9 && i !==
                    10 && i !== 11 && i !== 15 && i !== 16 && i !==
                    17 && i !== 21 && i !== 22 && i !== 23) {
                    win = true;
                    console.log("back");
                }
            } else if ($(check[i]).hasClass(turn) && $(check[(i + 6)])
                .hasClass("turn") && $(check[(i + 12)]).hasClass(
                    turn) && $(check[(i + 18)]).hasClass(turn)) {
                if (i !== 6 && i !== 12 && i !== 18) {
                win = true;
                console.log("horizontal");
                }
            } else if ($(check[i]).hasClass(turn) && $(check[(i + 1)])
                .hasClass(turn) && $(check[(i + 2)]).hasClass(turn) &&
                $(check[(i + 3)]).hasClass(turn)) {
                if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 &&
                    i != 11 && i != 15 && i != 16 && i != 17 && i !=
                    21 && i != 22 && i != 23 && i != 27 && i != 28 &&
                    i != 29 && i != 33 && i != 34 && i != 35) {
                    win = true;
                    console.log("vertical");
                }
            }
            console.log(win);
        }
        if (win === true) {
            if (turn === "black") {
            setMessage("Congratulations, " + black + "!  You win!");
            }  else if (turn === "red"){
            setMessage("Congratulations, " + red + "!  You win!");
            }
            clearBoard();
            playerWin++;
            $(turn).text(playerWin); 
        } 
      
    }

    function checkForTie() {
        if (win === false && loss === false && colmOne.length === 0 &&
            colmTwo.length === 0 && colmThree.length === 0 && colmFour
            .length === 0 && colmFive.length === 0 && colmSix.length ===
            0 && colmSeven.length === 0) {
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
        colmOne = jQuery.makeArray(elemsOne);
        colmTwo = jQuery.makeArray(elemsTwo);
        colmThree = jQuery.makeArray(elemsThree);
        colmFour = jQuery.makeArray(elemsFour);
        colmFive = jQuery.makeArray(elemsFive);
        colmSix = jQuery.makeArray(elemsSix);
        colmSeven = jQuery.makeArray(elemsSeven);
    };
});

