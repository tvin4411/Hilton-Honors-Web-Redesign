// Menu Icon will expand showing navigation links to other pages
function myMenu(x) {
    x.classList.toggle("extend");
}

// User Icon will open up buttons to navigate to the login or Sign up page
function myUser(x) {
    x.classList.toggle("open");
}

// Find a Hotel Pop-up will appear by clicking the button
function findbtn(x) {
    var x = document.getElementById("hotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function SMALLfindbtn(x) {
    var x = document.getElementById("SMALLhotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// Closes Find a Hotel Pop-up and returns to landing page
function exit(x) {
    var x = document.getElementById("hotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function SMALLexit(x) {
    var x = document.getElementById("SMALLhotel-opt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Perk Icons opens up a block text of information beside it
function EliteIcon(x) {
    var x = document.getElementById("speechR1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function LowIcon(x) {
    var x = document.getElementById("speechR2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function WifiIcon(x) {
    var x = document.getElementById("speechR3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function PointsIcon(x) {
    var x = document.getElementById("speechR4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function AppIcon(x) {
    var x = document.getElementById("speechR5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Member-Teirs will appear when button is preesed
function myDia(x) {
    var x = document.getElementById("D-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myGol(x) {
    var x = document.getElementById("G-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mySil(x) {
    var x = document.getElementById("S-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myBlu(x) {
    var x = document.getElementById("B-tier");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Gives a random 9 number for the member
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//Feedback overlay to open and close
function openFB() {
  document.getElementById("FB-pop").style.width = "100%";
}

function closeFB() {
  document.getElementById("FB-pop").style.width = "0%";
}
