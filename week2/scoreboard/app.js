let home = 0
let away = 0


function reset(){
    let scorecard = document.getElementById("home-score");
    home = 0;
    scorecard.innerText = home;
    scorecard.innerText = away;
}


function plusOne(){
    let scorecard = document.getElementById("home-score");
    home ++;
    
    scorecard.innerText = home.toString();

}
function plusOneAway(){
    let scorecard = document.getElementById("visitor-score");
    away ++;

    scorecard.innerText = away.toString();

}