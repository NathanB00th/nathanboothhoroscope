var signs = ["Capricorn", "Aquarius", "Pisces", "Pirate of Penzance", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
            "Scorpio", "Sagittarius", "Liar"];
var response = ["Wow, nice. You're a workaholic who likes making money and like, dirt, I guess? Maybe take some pottery" +
                " classes after work.", "You got the same sign of Oprah, and have been cured to have to carry water" +
                " buckets around forever. Don't blame me, blame your parents (congrats on Oprah though).", "You're an" +
                " emotional wreck, symbolised by two confused fish. Nice.", "Unfortunately you have joined the Pirates" +
                " of Penzance, and cannot be freed until you turn 21, which, due to your leap year birthday, will" +
                " not occur until you are 84.", "This means you're a big stronk goat, and will probably eat a tin can" +
                " before the end of the day. Have fun with that!", "You're strong, but apparently also gentle? You're" +
                " big into that money, but also like art. Maybe become an art collector?", "Looks like it's time to" +
                " get an exorcism.", "You're a crab, and are very emotionally sensitive but also have a big shell, and" +
                " also claws. Don't get rubber banded!", "You're a leader! Maybe you should become president.",
                "Remember the 40 year old virgin? You're like that, but you have to be a virgin always.", "You're" +
                " obsessed with weighing things. Don't weight horses though, they're too heavy for scales.", "You're" +
                " buck wild, and also the shrimp of the desert. Don't poison too many people, you'll give other" +
                " scorpions a bad rep.", "You will always play a ranger or a druid in D&D.", "That's not a date. Try" +
                " again!"];
var images = ["img/capricorn.jpg", "img/aquarius.jpg", "img/pisces.jpg", "img/pirates_of_penzance.jpg", "img/aries.jpg",
              "img/taurus.jpg", "img/gemini.jpg", "img/cancer.jpg", "img/leo.jpg", "img/virgo.jpg", "img/libra.jpg",
              "img/scorpio.jpg", "img/sagittarius.jpg", "img/liar.jpg"];

function buttonClick() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    var signNum = determineSign(day, month);
    var signText= response[signNum];
    var sign = signs[signNum];
    var image = images[signNum];
    if (name.length >= 1) {
        document.getElementById('sign').innerHTML = "You're a " + sign + " " + name + "!";
    } else {
        document.getElementById('sign').innerHTML = "You're a " + sign + "!";
    }
    document.getElementById('text').innerHTML = signText;
    document.getElementById('image').src = image;
}

function determineSign(day, month) {
    //january
    if (month == 0) {
        if (day > 30) {
            return 13;
        } else {
            if (day <= 19) {
                return 0;
            } else {
                return 1;
            }
        }
    }
    //february
    if (month == 1) {
        if (day > 28) {
            if (day == 29) {
                return 3;
            } else {
                return 13;
            }
        } else {
            if (day <= 18) {
                return 1;
            } else {
                return 2;
            }
        }
    }
    //march
    if (month == 2) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 20) {
                return 2;
            } else {
                return 4;
            }
        }
    }
    //april
    if (month == 3) {
        if (day > 30) {
            return 13;
        } else {
            if (day <= 19) {
                return 4;
            } else {
                return 5;
            }
        }
    }
    //may
    if (month == 4) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 20) {
                return 5;
            } else {
                return 6;
            }
        }
    }
    //june
    if (month == 5) {
        if (day > 30) {
            return 13;
        } else {
            if (day <= 20) {
                return 6;
            } else {
                return 7;
            }
        }
    }
    //july
    if (month == 6) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 22) {
                return 7;
            } else {
                return 8;
            }
        }
    }
    //august
    if (month == 7) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 22) {
                return 8;
            } else {
                return 9;
            }
        }
    }
    //september
    if (month == 8) {
        if (day > 30) {
            return 13;
        } else {
            if (day <= 22) {
                return 9;
            } else {
                return 10;
            }
        }
    }
    //october
    if (month == 9) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 22) {
                return 10;
            } else {
                return 11;
            }
        }
    }
    //november
    if (month == 10) {
        if (day > 30) {
            return 13;
        } else {
            if (day <= 21) {
                return 11;
            } else {
                return 12;
            }
        }
    }
    //december
    if (month == 11) {
        if (day > 31) {
            return 13;
        } else {
            if (day <= 21) {
                return 12;
            } else {
                return 0;
            }
        }
    }
}
