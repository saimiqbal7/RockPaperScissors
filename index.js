

let user = 0;
let comp = 0;
const userID = document.getElementById("userScore");
const compID = document.getElementById("compScore");
const scoreClass = document.querySelector(".score");
const resultClass = document.querySelector(".result");
const rockID = document.getElementById("rock");
const paperID = document.getElementById("paper");
const scissorsID = document.getElementById("scissors");
const playerCard = document.getElementById("playerCard");
const compCard = document.getElementById("compCard");


function opponentPick(){
    const choices = ["r", "p", "s" ]
    return choices[Math.floor(Math.random()*3)];
}

function play(pick){


    const oppValue = opponentPick()
    const value = pick + oppValue;

    switch(value){
        case "pr":
        case "rs":   
        case "sp":
            userWin(pick, oppValue)
            break;
        case "rp":
        case "ps":
        case "sr":
            compWin(pick, oppValue)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(pick, oppValue)
            break

    }

}

function pick(){


    scissorsID.addEventListener('click', function(){
            play("s");
        
        })

    rockID.addEventListener('click', function(){
        play("r");
    
    })

    paperID.addEventListener('click', function(){
        play("p");

    })

}

function userWin(userChoice, compChoice){
    user++;
    userID.innerHTML = user;
    
   

    if(userChoice === 'r'){
        playerCard.innerHTML = "<img src=\"rock.png\">"
       
    }
    else if(userChoice === 'p'){
        playerCard.innerHTML = "<img src=\"paper.png\">"
     
    }
    else if(userChoice === 's'){
        playerCard.innerHTML = "<img src=\"scissor.png\">"
    
    }

    if(compChoice === 'r'){
        compCard.innerHTML = "<img src=\"rock.png\">"
    }
    else if(compChoice === 'p'){
        compCard.innerHTML = "<img src=\"paper.png\">"
    }
    else if(compChoice === 's'){
        compCard.innerHTML = "<img src=\"scissor.png\">"
    }

    console.log("user" + user );
    
  

}

function compWin(userChoice, compChoice){
    comp++;
    compID.innerHTML = comp;
    if(userChoice === 'r'){
        playerCard.innerHTML = "<img src=\"rock.png\">"
    }
    else if(userChoice === 'p'){
        playerCard.innerHTML = "<img src=\"paper.png\">"
    }
    else if(userChoice === 's'){
        playerCard.innerHTML = "<img src=\"scissor.png\">"
    }

    if(compChoice === 'r'){
        compCard.innerHTML = "<img src=\"rock.png\">"
    }
    else if(compChoice === 'p'){
        compCard.innerHTML = "<img src=\"paper.png\">"
    }
    else if(compChoice === 's'){
        compCard.innerHTML = "<img src=\"scissor.png\">"
    }

    console.log("comp" + comp);


}

function draw(userChoice, compChoice){
    console.log("draw")
    if(userChoice === 'r'){
        playerCard.innerHTML = "<img src=\"rock.png\">"
    }
    else if(userChoice === 'p'){
        playerCard.innerHTML = "<img src=\"paper.png\">"
    }
    else if(userChoice === 's'){
        playerCard.innerHTML = "<img src=\"scissor.png\">"
    }

    if(compChoice === 'r'){
        compCard.innerHTML = "<img src=\"rock.png\">"
    }
    else if(compChoice === 'p'){
        compCard.innerHTML = "<img src=\"paper.png\">"
    }
    else if(compChoice === 's'){
        compCard.innerHTML = "<img src=\"scissor.png\">"
    }



}

pick()