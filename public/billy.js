window.addEventListener("load", function () {
  //dom part
  let container = document.querySelector(".container");
  //div class images
  let loadImg = document.querySelector(".loadImg");
  let billyImg = document.querySelector(".billyInitial");
  let webDevImg = document.querySelector(".webDev");
  let liseImg = document.querySelector(".liserosSite");
  let creepImg = document.querySelector(".creepSite");
  let artImg = document.querySelector(".artSite");
  let minVibeImg = document.querySelector(".minVibe");
  let midoripol = document.querySelector(".midoripol");
  let cristianaFitness = document.querySelector(".cf");
  // left and right btn
  let leftBtn = this.document.querySelector(".l");
  let rightBtn = this.document.querySelector(".r");
  let adviceClick = document.getElementById("adviceClick");


  if (billyImg) { 
   //billy advice click btn
   setTimeout(function () {
    leftBtn.style.border = "dotted 2px #FFF"
    leftBtn.style.animation = " border-pulsate 10s infinite"
    adviceClick.style.animation = "appear-disappear 10s infinite"
  }, 1500);
  } else {
    disappearInfo();
  }
 
  function disappearInfo () { 
    adviceClick.style.display = "none"
    leftBtn.style.border = "none"
  }

  

  let dx = document.querySelectorAll(".dx");
  let sx = document.querySelectorAll(".sx");
  let site = document.querySelectorAll(".changeSite");
  console.log(dx, sx, site);

  // audio part
  let makeYourChoice = document.getElementById("makeYourChoice");
  var makeYourChoiceAudio = new Audio("audio/yourchoice.mp3");
  let playGame = new Audio("audio/game.mp3");
  let audioClick = new Audio("audio/click.mp3");
  makeYourChoice.addEventListener("click", audioFn);
  function audioFn() {
    if ((billyImg.style.display = "grid")) {
      makeYourChoiceAudio.play();
    }
  }

  //billy initial pic after 500ms
  setTimeout(function () {
    loadImg.style.display = "none";
    billyImg.style.display = "grid";
  }, 500);

  //ciclo i pulsanti tv
  for (let dxbtn = 0; dxbtn < dx.length; dxbtn++) {
    dx[dxbtn].addEventListener("click", updateImgDx);
  }
  for (let sxbtn = 0; sxbtn < sx.length; sxbtn++) {
    sx[sxbtn].addEventListener("click", updateImgSx);
  }
  // ciclo i div per andare ai siti
  for (let sites = 0; sites < site.length; sites++) {
    site[sites].addEventListener("click", siteSelected);
  }
  function updateImgDx() {
    if (billyImg.style.display == "grid") {
      billyImg.style.display = "none";
      liseImg.style.display = "grid";
      disappearInfo();
      console.log("1");
    } else if (liseImg.style.display == "grid") {
      liseImg.style.display = "none";
      creepImg.style.display = "grid";
      console.log("2");
    } else if (creepImg.style.display == "grid") {
      creepImg.style.display = "none";
      artImg.style.display = "grid";
      console.log("3");
    } else if (artImg.style.display == "grid") {
      artImg.style.display = "none";
      minVibeImg.style.display = "grid";
      console.log("4");
    } else if (minVibeImg.style.display == "grid") {
      minVibeImg.style.display = "none";
      webDevImg.style.display = "grid";
      console.log("5");
    } else if (webDevImg.style.display == "grid") {
      webDevImg.style.display = "none";
      midoripol.style.display = "grid";
      console.log("6");
    } else if (midoripol.style.display == "grid") {
      midoripol.style.display = "none";
      creepImg.style.display = "grid";
      console.log("7");
    } 
    /*
    else if (cristianaFitness.style.display == "grid") {
      cristianaFitness.style.display = "none";
      billyImg.style.display = "grid";
      console.log("8");
    }
      */
    audioClick.play();
  }
  function updateImgSx() {
    if (billyImg.style.display == "grid") {
      billyImg.style.display = "none";
      midoripol.style.display = "grid";
      disappearInfo();
      console.log("1");
    }
    /*  else if (cristianaFitness.style.display == "grid") {
      cristianaFitness.style.display = "none";
      midoripol.style.display = "grid";
      console.log("1");
      
    } */ else if (midoripol.style.display == "grid") {
      midoripol.style.display = "none";
      webDevImg.style.display = "grid";
      console.log("2");
    } else if (webDevImg.style.display == "grid") {
      webDevImg.style.display = "none";
      minVibeImg.style.display = "grid";
      console.log("3");
    } else if (minVibeImg.style.display == "grid") {
      minVibeImg.style.display = "none";
      artImg.style.display = "grid";
      console.log("4");
    } else if (artImg.style.display == "grid") {
      artImg.style.display = "none";
      creepImg.style.display = "grid";
      console.log("5");
    } else if (creepImg.style.display == "grid") {
      creepImg.style.display = "none";
      liseImg.style.display = "grid";
      console.log("6");
    } else if (liseImg.style.display == "grid") {
      liseImg.style.display = "none";
      billyImg.style.display = "grid";
      console.log("7");
    }
    audioClick.play();
  }
  function siteSelected() {
    if (liseImg.style.display == "grid") {
      window.location = "https://liseros.it/";
    } else if (creepImg.style.display == "grid") {
      window.location = "https://www.creeptone.it/";
    } else if (artImg.style.display == "grid") {
      window.location = "https://www.painter.liseros.it/";
    } else if (minVibeImg.style.display == "grid") {
      window.location = "https://www.minvibe.liseros.it/";
    } else if (webDevImg.style.display == "grid") {
      window.location = "https://liseroswebdev.onrender.com/";
    } else if (midoripol.style.display == "grid") {
      window.location = "https://midoripol.onrender.com/";
    } else if (cristianaFitness.style.display == "grid") {
      window.location = "";
    } else if (billyImg.style.display == "grid") {
      playGame.play();
    }
  }
});
