function playAgame(){
    var button = document.querySelector(".button")
    var imagePlayer = document.querySelector(".imagePlayer")
    var imageBot = document.querySelector(".imageBot")
    var mathRandomPlayer = Math.floor(Math.random() * 3) + 1;
    var mathRandomBot = Math.floor(Math.random() * 3) + 1;
    var result = document.querySelector(".result")
    button.addEventListener("click", () =>{
        if(mathRandomPlayer == 1 ){
            imagePlayer.src = "images/gunting.jpg"
        }
        if(mathRandomPlayer == 2){
            imagePlayer.src = "images/batu.png"
        }
        if(mathRandomPlayer == 3){
            imagePlayer.src = "images/kertas.jpg"
        }
        // Image Bot
        if(mathRandomBot == 1 ){
            imageBot.src = "images/gunting.jpg"
        }
        if(mathRandomBot == 2){
            imageBot.src = "images/batu.png"
        }
        if(mathRandomBot == 3){
            imageBot.src = "images/kertas.jpg"
        }
        // RESULT
        if(mathRandomBot == mathRandomPlayer){
            result.innerHTML = "Anda Seri"
        }
        if(mathRandomPlayer == 1 && mathRandomBot == 2){
            result.innerHTML = "Anda Kalah"
        }
        if(mathRandomPlayer == 1 && mathRandomBot== 3){
            result.innerHTML = "Anda Menang"
        }
        if(mathRandomPlayer == 2 && mathRandomBot== 1){
            result.innerHTML = "Anda Menang"
        }
        if(mathRandomPlayer == 2 && mathRandomBot== 3){
            result.innerHTML = "Anda Kalah"
        }
        if(mathRandomPlayer == 3 && mathRandomBot== 1){
            result.innerHTML = "Anda Kalah"
        }
        if(mathRandomPlayer == 3 && mathRandomBot== 2){
            result.innerHTML = "Anda Menang"
        }
    })
}