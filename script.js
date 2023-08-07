let maxNum = parseInt(prompt(" Hey Champ! Enter a Maximum number :"))

//

while(!maxNum){
    maxNum = parseInt(prompt("Enter a Valid Number:"))
}

//

const targetNum = Math.floor(Math.random() * maxNum) + 1;

//

let yourGuess = parseInt(prompt("Enter your First Guess:"))

let attempts = 1;

//

while (parseInt(yourGuess) !== targetNum){
    if(yourGuess === 'q') break;
    attempts++;
    if (yourGuess > targetNum){
        yourGuess = prompt("Too High! Guess again:")
    }
    else{
        yourGuess = prompt("Too Low! Guess again:")
    }
}
if(yourGuess === 'q'){
    prompt("Alas! Dont loose hope . Better Luck Next Time Champ!")
}
else{
    
    prompt(`COngratulations! You Got it! it took ${attempts} to guess. THANK YOU ! SEE YOU SOON CHAMP. ` )
    ("")
}

