let UserScore=0;
let CPUScore=0;
const userScore_span = document.getElementById("User-score");
const CPUScore_span = document.getElementById("CPU-score");
const ScoreBoard_div = document.querySelector("Score-Board");
const Result_div = document.querySelector("result");
const Rock_div = document.getElementById("R");
const Paper_div = document.getElementById("P");
const Scissors_div = document.getElementById("S");

function getComputer_Choice(){
    const Choices = ['R', 'P', 'S'];
    const read_Number = Math.floor(Math.random()*3);
    return Choices[read_Number];
}

function win(userChoice, computerChoice){
    UserScore++;
    userScore_span.innerHTML = UserScore; 
    CPUScore_span.innerHTML = CPUScore;
    console.log(userChoice, computerChoice);
}

function lose(){
    CPUScore++;
    CPUScore_span.innerHTML = CPUScore;
    userScore_span.innerHTML = UserScore; 
}

function draw(){
    userScore_span.innerHTML = UserScore; 
    CPUScore_span.innerHTML = CPUScore;
}

function Game(User_Choice) {
    const Computer_Choice = getComputer_Choice();
    switch(User_Choice+Computer_Choice){
    case "RS":
    case "SP":
    case "PR":
    win(User_Choice+Computer_Choice);
    break;
    
    case "SR":
    case "RP":
    case "PS":
    lose(User_Choice+Computer_Choice);
    break;

    case "SS":
    case "PP":
    case "RR":
    draw(User_Choice+Computer_Choice);
    break;
    }
    }         

    

    function Main() {
Rock_div.addEventListener('click', function() {
    
    Game("R");
})

Paper_div.addEventListener('click', function() {
    
    Game("P");
})

Scissors_div.addEventListener('click', function() {
    
    Game("S");
})
    }

    Main();
