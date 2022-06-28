(function() {

    //vaiables
    let alert = document.getElementById("alert");
    let resultAlert = document.querySelector(".results");
    let img1 = document.querySelector(".image1");
    let img2 = document.querySelector(".image2");

    let user = '';
    let comp = "Computer";
    let userScore = 0;
    let compScore = 0;
    let user_flip;
    let comp_flip = Math.floor(Math.random() * 5 +2);
    let rounds = 1;
    //let name = document.querySelectorAll(".username");
    window.addEventListener('DOMContentLoaded', () => {
        [...document.querySelectorAll(".btn")].forEach((button, i) => {
            button.addEventListener('click', () => {

                if (i === 0){
                    //begin button
                    console.log("begin button");
                    promptUser();
                    alertUser("Click start button flip coin, 5 rounds to play!");
                   // playGame();

                }else if(i === 1){
                    //start flip
                    console.log("start button");
                    alertUser("Coin flip started ");

                    alertUser(`Started round ${rounds}`);
                    playGame();

                    console.log(rounds);
                    alertUser("Click button to begin next round! ");
                    setTimeout(() => { alertUser(`Started round ${rounds}`); }, 2000);
                    

                    rounds++;
                }else{
                    //stop flip
                    console.log("restart button");
                    alertUser("Started Game!!");
                    
                }
            });
        });
    });


    //methods
    const promptUser = () => {
        user +=  prompt("Enter your name to begin: ");
       console.log(user);
        [...document.querySelectorAll(".username")].forEach(unit => unit.innerHTML = user);

    }

    //alert user
    const alertUser = (text) => {
        alert.textContent = text;
    }

    const winner = () => {
        if (userScore > compScore){
            //user wins
            resultAlert.textContent = `Congratulations ${user}, You won with ${userScore} points!`;
            resultAlert.style.color = "yellowgreen"
            document.querySelector(".score1").textContent = userScore
        }else{
            //computer wins
            resultAlert.textContent = `Ooops ${user},\n Computer won with ${compScore} points`;
            document.querySelector(".score2").textContent = compScore
        }
    }

    //determine coin side
    const coinSide = (coin_side) => {
        if (coin_side % 2 == 0){
            //tails side
            document.querySelector(".img").src = "../assets/images/tail-side.png";
        }else{
            //head side
            document.querySelector(".img").src = "../assets/images/head-side.png";
        }

        return coin_side % 2;
    }

    //user turn to flip coin
    const userTurn = () => {
        //update user score
        let side = coinSide(user_flip);
        userScore += side;
    }

    const compTurn = () => {
        //update comp score
        let side = coinSide(comp_flip);
        compScore += side;

    }

    const playGame = () => {
        //let gameON = true;
        
        alertUser(`Started round ${rounds}`);
        document.querySelector(".startbtn").style.backgroundColor = "grey";
        user_flip = parseInt(prompt("enter number of flips"));
        userTurn();
        compTurn();
        
        //console.log("Game over");
        if (rounds == 5){
            winner() //
            alertUser(`Game over`);
        }
    }
    
})();