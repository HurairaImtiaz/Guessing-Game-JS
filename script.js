let maxNum = parseInt(prompt(" Hey Champ! Enter a Maximum number :"))

// if user enter a character instead of number , this ask for number again 

while(!maxNum){
    maxNum = parseInt(prompt("Enter a Valid Number:"))
}

// to generate a random number upto given maxNum 

const targetNum = Math.floor(Math.random() * maxNum) + 1;

// asked to guess the correct number

let yourGuess = parseInt(prompt("Enter your First Guess:"));

//to count the number of trails

let attempts = 1;

// checked if guess is not correct OR greater or lower to correct guess

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
//checked if user quit or successfully guess the number 

if(yourGuess === 'q'){
    prompt("Alas! Dont loose hope . Better Luck Next Time Champ!")
}
else{
    
    prompt(`COngratulations! You Got it! it took ${attempts} to guess. THANK YOU ! SEE YOU SOON CHAMP. ` )
    
}

