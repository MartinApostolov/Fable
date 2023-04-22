// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var container1 = document.querySelector(".npc_dialog_text");
var conteiner2 = document.querySelector(".sistem_m1");
var conteiner3 = document.querySelector(".sistem_m2");
var conteiner4 = document.querySelector(".sistem_m3");
var conteiner5 = document.querySelector(".pc_dialog_text");

var x = 0;

var coin = 100;
var coinActual = 100;

var people = 100;
var peopleActual = 100;

var trust = 100;
var trustActual = 100;

function statCheck(){

    document.getElementById("num1").innerHTML = coin;
    document.getElementById("num2").innerHTML = people;
    document.getElementById("num3").innerHTML = trust;

    while (coin < coinActual) {
        coin++;
        document.getElementById("num1").innerHTML = coin;
        setTimeout(100);
    }

    while (people < peopleActual) {
        people++;
        document.getElementById("num2").innerHTML = people;
        setTimeout(100);
    }

    while (trust < trustActual) {
        trust++;
        document.getElementById("num3").innerHTML = trust;
        setTimeout(100);
    }

    while (coin > coinActual) {
        coin--;
        document.getElementById("num1").innerHTML = coin;
        setTimeout(100);
    }

    while (people > peopleActual) {
        people--;
        document.getElementById("num2").innerHTML = people;
        setTimeout(100);
    }

    while (trust > trustActual) {
        trust--;
        document.getElementById("num3").innerHTML = trust;
        setTimeout(100);
    }

    gameControl();
}

function roll() {
    x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    statCheck()
}

var speeds = {
    pause: 600, //Higher number = longer delay
    slow: 120,
    normal: 90,
    fast: 40,
    superFast: 10
};

var textLines1 = [
    { speed: speeds.slow, string: "Здравейте кралю" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "нося данъците ми защото нямах мъзможност да ги дам когато ги събирахте?" }
];

var textLines2 = [
    { speed: speeds.slow, string: "1-->" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Добре благодаря и гледайте следващия път да сте навреме!", classes: ["green"] }
];

var textLines3 = [
    { speed: speeds.slow, string: "2-->" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Добре благодаря,", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "но заради забавянето Ви ще се наложи като глоба да заплатите двойно или ще има добълнителни санкции.", classes: ["red"] },
];

var textLines4 = [
    { speed: speeds.normal, string: "Добре благодаря и гледайте следващия път да сте навреме!" }
];

var textLines5 = [
    { speed: speeds.normal, string: "Добре благодаря,", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "но заради забавянето Ви ще се наложи като глоба да заплатите двойно или ще има добълнителни санкции."},
];

var characters = [];

function NewCharectors(strings, containers) {
    strings.forEach((line, index) => {
        if (index < strings.length - 1) {
            line.string += " "; //Add a space between lines
        }

        line.string.split("").forEach((character) => {
            var span = document.createElement("span");
            span.textContent = character;
            containers.appendChild(span);
            characters.push({
                span: span,
                isSpace: character === " " && !line.pause,
                delayAfter: line.speed,
                classes: line.classes || []
            });
        });
    });
}

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");
    next.classes.forEach((c) => {
        next.span.classList.add(c);
    });
    var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(function () {
            revealOneCharacter(list);
        }, delay);
    }
}

function gameControl() {
    switch (x) {
        case 0:

            console.log(x);

            roll();

            break;

        case 1:

            document.getElementById("npc_dialog_text").innerHTML = "";//container1
            document.getElementById("sistem_m1").innerHTML = "";//container2
            document.getElementById("sistem_m2").innerHTML = "";//container3
            document.getElementById("sistem_m3").innerHTML = "";//container4
            document.getElementById("pc_dialog_text").innerHTML = "";//container5

            NewCharectors(textLines1, container1);

            setTimeout(() => {
                revealOneCharacter(characters);
            }, 600)

            console.log(x);
            document.addEventListener('keydown', onKeyHandler);
            function onKeyHandler(e) {
                if (e.keyCode === 13) {
                    document.removeEventListener('keydown', onKeyHandler);

                    NewCharectors(textLines2, conteiner2);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    NewCharectors(textLines3, conteiner3);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    document.addEventListener('keydown', onKeyHandler2);
                    function onKeyHandler2(e) {
                        if (e.keyCode === 97) {
                            document.removeEventListener('keydown', onKeyHandler2);

                            document.getElementById("npc_dialog_text").innerHTML = "";//container1
                            document.getElementById("sistem_m1").innerHTML = "";//container2
                            document.getElementById("sistem_m2").innerHTML = "";//container3

                            NewCharectors(textLines4, conteiner5);

                            setTimeout(() => {
                                revealOneCharacter(characters);
                            }, 600)

                            coinActual = coinActual + 20;
                            console.log(coinActual);

                            document.addEventListener('keydown', onKeyHandler);
                            function onKeyHandler(e) {
                                if (e.keyCode === 13) {
                                    document.removeEventListener('keydown', onKeyHandler);

                                    roll();
                                }
                            }

                        } else if (e.keyCode === 98) {
                            document.removeEventListener2('keydown', onKeyHandler2);

                            document.getElementById("npc_dialog_text").innerHTML = "";//container1
                            document.getElementById("sistem_m1").innerHTML = "";//container2
                            document.getElementById("sistem_m2").innerHTML = "";//container3

                            NewCharectors(textLines5, conteiner5);

                            setTimeout(() => {
                                revealOneCharacter(characters);
                            }, 600)

                            coinActual = coinActual + 20;
                            trustActual = trustActual - 5;
                            console.log(coinActual);
                            console.log(trustActual);

                            document.addEventListener('keydown', onKeyHandler);
                            function onKeyHandler(e) {
                                if (e.keyCode === 13) {
                                    document.removeEventListener('keydown', onKeyHandler);

                                    roll();
                                }
                            }
                        }
                    }
                }
            }

            console.log(x);

            break;

        case 2:

            console.log(x);

            roll();

            break;

        case 3:

            console.log(x);

            roll();

            break;

        case 4:

            console.log(x);

            roll();

            break;

        case 5:

            console.log(x);

            roll();

            break;

        case 6:

            console.log(x);

            roll();

            break;
    }
}

gameControl();