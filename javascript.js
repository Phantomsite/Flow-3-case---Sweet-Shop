// Countdown promo timer
let promoCounter = new Date("Mar 30, 2026 00:00:00").getTime();

// Opdater counter konstant med setInterval
let x = setInterval(function() {

  // Henter nuværende tid
  let now = new Date().getTime();
    
  // Regner forskellen imellem
  let distance = promoCounter - now;
    
  // Vores tal er nuværende i milisekunder. Derfor ganges de op for at få talene for dage, timer,  minutter, sekunder
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //% bruges for at fjerne det sidste regnet ud. Altså % fjerner her alle fulde dage
  let hours = Math.floor(( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Resultatet ender i promo-timer id
  document.getElementById("promo-timer").innerHTML = " " + days + "d " + hours + "t "
  + minutes + "m " + seconds + "s ";
    
  // Når timer er slut
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("promo-timer").innerHTML = "Vores påskeudsalg er skudt i gang!";
  }
}, 1000);


// Åben/lukketid real life timer

const d = new Date();
let day = d.getDay();
let time = d.getHours();
const storeOpen = "Åben";
const storeClosed ="Lukket";

function openClose(){
if ((day == 6 || day == 0 ) && time >= 10 && time < 17) {
  document.getElementById("openingHour").innerHTML = storeOpen;
} else if ((day >= 2 && day != 6 ) && time >= 9 && time < 18) {
  document.getElementById("openingHour").innerHTML = storeOpen;
}
else {
document.getElementById("openingHour").innerHTML = storeClosed;
}
}

document.addEventListener("DOMContentLoaded", openClose);


//billede slider

function showPicture1() {
  const bigPicture = document.getElementById("mainImg");
  bigPicture.src = "images/cake-type1-1.jpg";
}

function showPicture2() {
  const bigPicture = document.getElementById("mainImg");
  bigPicture.src = "images/cake-type1-2.jpg";
}

function showPicture3() {
  const bigPicture = document.getElementById("mainImg");
  bigPicture.src = "images/cake-type1-3.jpg"; 
}

// funktion for ændring af serving + pris
function pris(serveringer, normalpris) {
  return serveringer + normalpris;
}

let prisN1 = pris(0, 750);
let prisN2 = pris(650, 750);
let prisN3 = pris(1050, 750);

console.log(prisN1)
console.log(prisN2)
console.log(prisN3)



document.getElementById("priceBtn1").addEventListener("click", function () {
  document.getElementById("finalPrice").innerHTML = prisN1 + ",00 kr.";
  document.getElementById("priceBtn1").classList.add("highlighted");
  document.getElementById("priceBtn2").classList.remove("highlighted");
  document.getElementById("priceBtn3").classList.remove("highlighted");
});

document.getElementById("priceBtn2").addEventListener("click", function () {
  document.getElementById("finalPrice").innerHTML = prisN2 + ",00 kr.";
  document.getElementById("priceBtn1").classList.remove("highlighted");
  document.getElementById("priceBtn2").classList.add("highlighted");
  document.getElementById("priceBtn3").classList.remove("highlighted");
});

document.getElementById("priceBtn3").addEventListener("click", function () {
  document.getElementById("finalPrice").innerHTML = prisN3 + ",00 kr.";
  document.getElementById("priceBtn1").classList.remove("highlighted");
  document.getElementById("priceBtn2").classList.remove("highlighted");
  document.getElementById("priceBtn3").classList.add("highlighted");
});

//Checkout  





/*
function getValues {

}

document.getElementById("addToCart").addEventListener("click", function () {
  document.querySelector("#likeButton").classList.toggle("liked");
});

*/

/*

function selectEffect () {
  const input = document.getElementById("finalPrice").value; // henter inputText til jawascript dokumentet
  if (input == prisN1) {
    document.getElementById("priceBtn1").classList.toggle("highlighted");
  } else if (input == prisN2) {
    document.getElementById("priceBtn2").classList.toggle("highlighted");
  }
  else {
    document.getElementById("priceBtn3").classList.toggle("highlighted");
  }
}

console.log(input)

document.addEventListener("DOMContentLoaded", selectEffect);



knap.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("cross");
    }
  },
  false,
);


document.getElementsByClassName("btn1").addEventListener("click", function () {
  if ("btn1".className == "button btn1 highlighted") {
    "btn1".className == "button btn1 not-highlighted";
  }  else {
    "btn1".className == "button btn1 highlighted";
  };
});

console.log("btn1")



function btnHighlight() {
  const knap1 = document.getElementById("btn1");
  const knap2 = document.getElementById("btn2");
  const knap3 = document.getElementById("btn3");
  const displayPrice = document.getElementById("finalPrice");
}
*/
