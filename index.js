let home_score=0
let guest_score=0
let home_scoreEL=document.getElementById("home-score")
let guest_scoreEl= document.getElementById("guest-score")
function increment_home_score_1(){
    home_score +=1
    home_scoreEL.textContent= home_score
}
function increment_home_score_2(){
    home_score +=2
    home_scoreEL.textContent= home_score
}
function increment_home_score_3(){
    home_score +=3
    home_scoreEL.textContent= home_score
}
function increment_guest_score_1(){
    guest_score +=1
    guest_scoreEl.textContent= guest_score
}
function increment_guest_score_2(){
    guest_score +=2
    guest_scoreEl.textContent= guest_score
}
function increment_guest_score_3(){
    guest_score +=3
    guest_scoreEl.textContent= guest_score
}
