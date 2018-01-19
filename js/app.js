// Set the date we're counting down to
var expireDate = [  new Date("Jan 20, 2018 15:37:25").getTime(),
                    new Date("Jan 5, 2018 15:37:25").getTime(),
                    new Date("Jan 18, 2018 15:37:25").getTime(),
                    new Date("Jan 19, 2018 15:37:25").getTime(),
                    new Date("Jan 20, 2018 15:37:25").getTime(),];


// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    


    // Output the result in an element with id="demo"
    var articles = document.getElementsByClassName("article");
    var count = articles.length;


    for(var i=1;i<=count;i++){
        // If the count down is over, write some text 
        var distance = expireDate[i] - now;
        console.log(distance + " dagen");

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
        console.log(days);   
        
        // Timer countdown text
        document.getElementsByClassName("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m ";
    }
    // Find the distance between now an the count down date

    
    if (distance < 0) {
        clearInterval(x);
        var expired = document.getElementById("expired");
        // expired.className += " hide";
    }
}, 1000);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 