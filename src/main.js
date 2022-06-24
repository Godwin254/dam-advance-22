(function() {

    //vaiables
    let alert = document.getElementById("alert");
    let resultAlert = document.querySelector(".results");
    let img1 = document.querySelector(".image1");
    let img2 = document.querySelector(".image2");

    let player1 = '';
    let player2 = "Computer";
    //let name = document.querySelectorAll(".username");
    window.addEventListener('DOMContentLoaded', () => {
        [...document.querySelectorAll(".btn")].forEach((button, i) => {
            button.addEventListener('click', () => {

                if (i === 0){
                    //begin button
                    console.log("begin button");
                    promptUser();
                    alertUser("Click start button flip coin!");
                    beginGuess();

                }else if(i === 1){
                    //start flip
                    console.log("start button");
                    alertUser("Coin flip started ");
                }else{
                    //stop flip
                    console.log("restart button");
                    alertUser("Restarted game");
                    resultAlert.textContent = "Congratulation for completing the game";
                   
                }
            });
        });
    });


    //methods
    const promptUser = () => {
        player1 +=  prompt("Enter your name to begin: ");
       console.log(player1);
        [...document.querySelectorAll(".username")].forEach(unit => unit.textContent = player1);

    }

    //alert user
    const alertUser = (text) => {
        alert.textContent = text;
    }

    //guess logic
    const beginGuess = () => {
        let no_of_rounds = 1;
        let turn1 = 1;
        let turn2 = 2;

        while(no_of_rounds <= 5){

            if (no_of_rounds === 1){
                //round 1
            }else if (no_of_rounds === 2){
                //round 2
            }else if (no_of_rounds === 3){
                //round 3
            }else if (no_of_rounds === 4){
                //round 4
            }else{
                //last round
            }
            //resultAlert.textContent = "Congratulation for completing the game";
            console.log(no_of_rounds);

            no_of_rounds++; //increament no_of_rounds
        }

        //update scores
        const updateScores = (turn) => {
            let score_for_player1 = 0;
            let score_for_player2 = 0;
            (turn === 1) ? score_for_player1++ : score_for_player2++ ;
        }
    }
    
})();