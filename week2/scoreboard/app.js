let home = 0
let away = 0


function reset(){
    let scorecard = document.getElementById("home-score");
    let scorecardAway = document.getElementById("visitor-score");
    home = 0;
    away = 0;
    scorecard.innerText = home;
    scorecardAway.innerText = away;
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
function plusThree(){
    let scorecard = document.getElementById("home-score");
    home += 3;
    
    scorecard.innerText = home.toString();

}
function plusThreeAway(){
    let scorecard = document.getElementById("visitor-score");
    away +=3;

    scorecard.innerText = away.toString();

}