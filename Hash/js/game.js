let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageContent = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

function checkElement(player1, player2) {
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}



for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let el = checkElement(player1, player2);

        if (this.childNodes.length == 0) {
            if (player1 == player2) {
                el = x;
            } else {
                el = o;
            }
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if (player1 == player2) {
                player1++;

                if (secondPlayer == "ai-player"){
                    computerPlay();
                    player2++;
                }
            } 
            else {
                player2++;
            }
        }

        checkWinCondition();
    })

}

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click",  function() {
        secondPlayer = this.getAttribute("id");


        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        
        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
        
    } )
    
    
}
            

function checkWinCondition() {
    let s1 = document.querySelector("#square-1");
    let s2 = document.querySelector("#square-2");
    let s3 = document.querySelector("#square-3");
    let s4 = document.querySelector("#square-4");
    let s5 = document.querySelector("#square-5");
    let s6 = document.querySelector("#square-6");
    let s7 = document.querySelector("#square-7");
    let s8 = document.querySelector("#square-8");
    let s9 = document.querySelector("#square-9");

    if (s1.childNodes.length > 0 && s2.childNodes.length > 0 && s3.childNodes.length > 0) {

        let s1Child = s1.childNodes[0].className;
        let s2Child = s2.childNodes[0].className;
        let s3Child = s3.childNodes[0].className;

        if (s1Child == "x" && s2Child == "x" && s3Child == "x") {
            declareWinner('x')
        } else if (s1Child == "o" && s2Child == "o" && s3Child == "o") {
            declareWinner('o')
        }
    }

    if (s4.childNodes.length > 0 && s5.childNodes.length > 0 && s6.childNodes.length > 0) {

        let s4Child = s4.childNodes[0].className;
        let s5Child = s5.childNodes[0].className;
        let s6Child = s6.childNodes[0].className;

        if (s4Child == "x" && s5Child == "x" && s6Child == "x") {
            declareWinner('x')
        } else if (s4Child == "o" && s5Child == "o" && s6Child == "o") {
            declareWinner('o')
        }
    }

    if (s7.childNodes.length > 0 && s8.childNodes.length > 0 && s9.childNodes.length > 0) {

        let s7Child = s7.childNodes[0].className;
        let s8Child = s8.childNodes[0].className;
        let s9Child = s9.childNodes[0].className;

        if (s7Child == "x" && s8Child == "x" && s9Child == "x") {
            declareWinner('x')
        } else if (s7Child == "o" && s8Child == "o" && s9Child == "o") {
            declareWinner('o')
        }
    }

    if (s1.childNodes.length > 0 && s4.childNodes.length > 0 && s7.childNodes.length > 0) {

        let s1Child = s1.childNodes[0].className;
        let s4Child = s4.childNodes[0].className;
        let s7Child = s7.childNodes[0].className;

        if (s1Child == "x" && s4Child == "x" && s7Child == "x") {
            declareWinner('x')
        } else if (s1Child == "o" && s4Child == "o" && s7Child == "o") {
            declareWinner('o')
        }
    }

    if (s2.childNodes.length > 0 && s5.childNodes.length > 0 && s8.childNodes.length > 0) {

        let s2Child = s2.childNodes[0].className;
        let s5Child = s5.childNodes[0].className;
        let s8Child = s8.childNodes[0].className;

        if (s2Child == "x" && s5Child == "x" && s8Child == "x") {
            declareWinner('x')
        } else if (s2Child == "o" && s5Child == "o" && s8Child == "o") {
            declareWinner('o')
        }
    }

    if (s3.childNodes.length > 0 && s6.childNodes.length > 0 && s9.childNodes.length > 0) {

        let s3Child = s3.childNodes[0].className;
        let s6Child = s6.childNodes[0].className;
        let s9Child = s9.childNodes[0].className;

        if (s3Child == "x" && s6Child == "x" && s9Child == "x") {
            declareWinner('x')
        } else if (s3Child == "o" && s6Child == "o" && s9Child == "o") {
            declareWinner('o')
        }
    }

    if (s1.childNodes.length > 0 && s5.childNodes.length > 0 && s9.childNodes.length > 0) {

        let s1Child = s1.childNodes[0].className;
        let s5Child = s5.childNodes[0].className;
        let s9Child = s9.childNodes[0].className;

        if (s1Child == "x" && s5Child == "x" && s9Child == "x") {
            declareWinner('x')
        } else if (s1Child == "o" && s5Child == "o" && s9Child == "o") {
            declareWinner('o')
        }
    }

    if (s3.childNodes.length > 0 && s5.childNodes.length > 0 && s7.childNodes.length > 0) {

        let s3Child = s3.childNodes[0].className;
        let s5Child = s5.childNodes[0].className;
        let s7Child = s7.childNodes[0].className;

        if (s3Child == "x" && s5Child == "x" && s7Child == "x") {
            declareWinner('x')
        } else if (s3Child == "o" && s5Child == "o" && s7Child == "o") {
            declareWinner('o')
        }
    }

    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {

        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }

    }

    if (counter == 9) {
        declareWinner('deu velha');
    }
}

function declareWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1")
    let scoreboardO = document.querySelector("#scoreboard-2")
    let msg = "";

    if (winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner == "o") {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";

    } else {
        msg = "Deu velha!"
    }


    messageContainer.classList.remove("hide");
    messageContent.innerHTML = msg;

    setTimeout(() => {

        messageContainer.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPlay (){
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;
          
  for(let i = 0; i < boxes.length; i++) {

    let randomNumber = Math.floor(Math.random() * 5);

    if(boxes[i].childNodes[0] == undefined) {  
      if(randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }     
    } else {
      filled++;
    }

  }

  if(counter == 0 && filled < 9) {
    computerPlay();
  }

}