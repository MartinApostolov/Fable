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

var people = 100;

var trust = 100;

function roll() {
    x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    gameControl();
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
    { speed: speeds.normal, string: "Добре благодаря,"},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "но заради забавянето Ви ще се наложи като глоба да заплатите двойно или ще има добълнителни санкции."},
];

var textLines6 = [
    { speed: speeds.slow, string: "Здравейте кралю." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "От няколко дни имам проблеми с животните в кралството и храната може да ни свърши освен ако не направим нещо." },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Какво бихте предложил?" }
];

var textLines7 = [
    { speed: speeds.slow, string: "1-->" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Благодаря за информация ще мина на проверка за да видя какво се случва и с какво мога да помогна.", classes: ["green"] }
];

var textLines8 = [
    { speed: speeds.slow, string: "2-->" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Добре ще изпратя някой да види какво става."}
];

var textLines9 = [
    { speed: speeds.slow, string: "3-->" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Добре но,", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "аз съм крал не фермер оправяите сами вашите проблеми!", classes: ["red"] }
];

var textLines10 = [
    { speed: speeds.normal, string: "Благодаря за информация ще мина на проверка за да видя какво се случва и с какво мога да помогна." }
];

var textLines11 = [
    { speed: speeds.normal, string: "Добре ще ще изпратя някой да види какво става." }
];

var textLines12 = [
    { speed: speeds.normal, string: "Добре но,"},
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "аз съм крал не фермер оправяите сами вашите проблеми!"}
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

            document.getElementById("num1").innerHTML = coin;
            document.getElementById("num2").innerHTML = people;
            document.getElementById("num3").innerHTML = trust;

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

            document.addEventListener('keydown', onKeyHandler1);
            function onKeyHandler1(e1) {
                if (e1.keyCode === 13) {
                    document.removeEventListener('keydown', onKeyHandler1);

                    NewCharectors(textLines2, conteiner2);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    NewCharectors(textLines3, conteiner3);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    document.addEventListener('keydown', onKeyHandler11);
                    function onKeyHandler11(e11) {
                        var y = 0;
                        if (e11.keyCode === 97) { y = 97; }
                        if (e11.keyCode === 98) { y = 98; }
                        switch (y) {

                            case 97:
                                document.removeEventListener('keydown', onKeyHandler11);

                                document.getElementById("npc_dialog_text").innerHTML = "";//container1
                                document.getElementById("sistem_m1").innerHTML = "";//container2
                                document.getElementById("sistem_m2").innerHTML = "";//container3
                                document.getElementById("sistem_m3").innerHTML = "";//container4

                                NewCharectors(textLines4, conteiner5);

                                setTimeout(() => {
                                    revealOneCharacter(characters);
                                }, 600)

                                coin = coin + 20;
                                document.getElementById("num1").innerHTML = coin;
                                document.getElementById("num2").innerHTML = people;
                                document.getElementById("num3").innerHTML = trust;

                                document.addEventListener('keydown', onKeyHandler111);
                                function onKeyHandler111(e111) {
                                    if (e111.keyCode === 13) {
                                        document.removeEventListener('keydown', onKeyHandler111);

                                        roll();
                                    }
                                }
                                break;

                            case 98:
                                document.removeEventListener('keydown', onKeyHandler11);

                                document.getElementById("npc_dialog_text").innerHTML = "";//container1
                                document.getElementById("sistem_m1").innerHTML = "";//container2
                                document.getElementById("sistem_m2").innerHTML = "";//container3
                                document.getElementById("sistem_m3").innerHTML = "";//container4

                                NewCharectors(textLines5, conteiner5);

                                setTimeout(() => {
                                    revealOneCharacter(characters);
                                }, 600)

                                coin = coin + 25;
                                trust = trust - 5;
                                document.getElementById("num1").innerHTML = coin;
                                document.getElementById("num2").innerHTML = people;
                                document.getElementById("num3").innerHTML = trust;

                                document.addEventListener('keydown', onKeyHandler121);
                                function onKeyHandler121(e121) {
                                    if (e121.keyCode === 13) {
                                        document.removeEventListener('keydown', onKeyHandler121);

                                        roll();
                                    }
                                }
                                break;

                        }
                    }
                }
            }

            console.log(x);

            break;

        case 2:

            document.getElementById("npc_dialog_text").innerHTML = "";//container1
            document.getElementById("sistem_m1").innerHTML = "";//container2
            document.getElementById("sistem_m2").innerHTML = "";//container3
            document.getElementById("sistem_m3").innerHTML = "";//container4
            document.getElementById("pc_dialog_text").innerHTML = "";//container5

            NewCharectors(textLines6, container1);

            setTimeout(() => {
                revealOneCharacter(characters);
            }, 600)

            document.addEventListener('keydown', onKeyHandler2);
            function onKeyHandler2(e2) {
                if (e2.keyCode === 13) {
                    document.removeEventListener('keydown', onKeyHandler2);

                    NewCharectors(textLines7, conteiner2);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    NewCharectors(textLines8, conteiner3);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    NewCharectors(textLines9, conteiner4);

                    setTimeout(() => {
                        revealOneCharacter(characters);
                    }, 600)

                    document.addEventListener('keydown', onKeyHandler21);
                    function onKeyHandler21(e21) {
                        var y = 0;
                        if (e21.keyCode === 97) { y = 97; }
                        if (e21.keyCode === 98) { y = 98; }
                        if (e21.keyCode === 99) { y = 99; }
                        switch (y) {

                            case 97:
                                document.removeEventListener('keydown', onKeyHandler21);

                                document.getElementById("npc_dialog_text").innerHTML = "";//container1
                                document.getElementById("sistem_m1").innerHTML = "";//container2
                                document.getElementById("sistem_m2").innerHTML = "";//container3
                                document.getElementById("sistem_m3").innerHTML = "";//container4

                                NewCharectors(textLines10, conteiner5);

                                setTimeout(() => {
                                    revealOneCharacter(characters);
                                }, 600)

                                coin = coin - 25;
                                people = people + 5;
                                trust = trust + 5;
                                document.getElementById("num1").innerHTML = coin;
                                document.getElementById("num2").innerHTML = people;
                                document.getElementById("num3").innerHTML = trust;

                                document.addEventListener('keydown', onKeyHandler111);
                                function onKeyHandler111(e111) {
                                    if (e111.keyCode === 13) {
                                        document.removeEventListener('keydown', onKeyHandler111);

                                        roll();
                                    }
                                }
                                break;

                            case 98:
                                document.removeEventListener('keydown', onKeyHandler21);

                                document.getElementById("npc_dialog_text").innerHTML = "";//container1
                                document.getElementById("sistem_m1").innerHTML = "";//container2
                                document.getElementById("sistem_m2").innerHTML = "";//container3
                                document.getElementById("sistem_m3").innerHTML = "";//container4

                                NewCharectors(textLines11, conteiner5);

                                setTimeout(() => {
                                    revealOneCharacter(characters);
                                }, 600)

                                trust = trust + 5;
                                document.getElementById("num1").innerHTML = coin;
                                document.getElementById("num2").innerHTML = people;
                                document.getElementById("num3").innerHTML = trust;

                                document.addEventListener('keydown', onKeyHandler121);
                                function onKeyHandler121(e121) {
                                    if (e121.keyCode === 13) {
                                        document.removeEventListener('keydown', onKeyHandler121);

                                        roll();
                                    }
                                }
                                break;

                            case 99:
                                document.removeEventListener('keydown', onKeyHandler21);

                                document.getElementById("npc_dialog_text").innerHTML = "";//container1
                                document.getElementById("sistem_m1").innerHTML = "";//container2
                                document.getElementById("sistem_m2").innerHTML = "";//container3
                                document.getElementById("sistem_m3").innerHTML = "";//container4

                                NewCharectors(textLines12, conteiner5);

                                setTimeout(() => {
                                    revealOneCharacter(characters);
                                }, 600)

                                trust = trust - 10;
                                document.getElementById("num1").innerHTML = coin;
                                document.getElementById("num2").innerHTML = people;
                                document.getElementById("num3").innerHTML = trust;

                                document.addEventListener('keydown', onKeyHandler231);
                                function onKeyHandler231(e231) {
                                    if (e231.keyCode === 13) {
                                        document.removeEventListener('keydown', onKeyHandler231);

                                        roll();
                                    }
                                }
                                break;
                        }
                    }
                }
            }

            console.log(x);

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