(function() {

    //vaiables
    //let name = document.querySelectorAll(".username");
    window.addEventListener('DOMContentLoaded', () => {
        [...document.querySelectorAll(".btn")].forEach((button, i) => {
            button.addEventListener('click', () => {

                if (i === 0){
                    //begin button
                    console.log("begin button");
                    alertUser();
                }else if(i === 1){
                    //head coin
                    console.log("head button")
                }else{
                    //tail coin
                    console.log("tail button")
                }
            });
        });
    });


    //methods
    const alertUser = () => {

       let uname =  prompt("Enter your name to begin: ");
       console.log(uname);
        [...document.querySelectorAll(".username")].forEach(unit => unit.textContent = uname);
    }

    //guess logic
    const guess = () => {

    }
    
})();