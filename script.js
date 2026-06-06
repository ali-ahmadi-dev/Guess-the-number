'use strict';



// Method math
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
//  Method math End


let score = 20;
let highscore = 0;


const displayMessage = function( Class  , message){
       document.querySelector(Class).textContent = message;
}

// Start  Check Btn
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value);
    if (!guess) {
      displayMessage( '.message' ,'😒 عددی وجود ندارد')
        // document.querySelector('.message').textContent = ' 😒 عددی وجود ندارد'
    }else if(guess === secretNumber){
         displayMessage( '.message' , "درست حدس زدی ایول به تو  🤗🤗")
      //  document.querySelector('.message').textContent = "درست حدس زدی ایول به تو  🤗🤗"
         displayMessage( '.number' , secretNumber )
        // document.querySelector('.number').textContent = secretNumber;
       document.querySelector('body').style.backgroundColor = "green";
       if (score > highscore) {
        highscore = score;
         displayMessage( '.highscore' , highscore)
        // document.querySelector('.highscore').textContent = highscore ;
       }
 
    }else if (guess !== secretNumber) {
            if (score > 1) {
                  displayMessage( '.message' , guess > secretNumber ? "عدد خیلی بالا زدی  بیا پایین تر 🔺 " : "عدد خیلی پایین  زدی  بیا بالا تر 🔻 " )
      // document.querySelector('.message').textContent = guess > secretNumber ? "عدد خیلی بالا زدی  بیا پایین تر 🔺 " : "عدد خیلی پایین  زدی  بیا بالا تر 🔻 " 
       score--;
        document.querySelector('.score').textContent = score;
        }else{
             score = 0;
                displayMessage('.score' , score)
                displayMessage('.message' ,"شما بازی را باختید 😔")
            // document.querySelector('.score').textContent = score;
            // document.querySelector('.message').textContent = "شما بازی را باختید 😔";
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
    
    
    
    
    // else if(guess > secretNumber){
    //   if (score > 1) {
    //   document.querySelector('.message').textContent = "عدد خیلی بالا زدی  بیا پایین تر 🔺 "
    //    score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //          score = 0;
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = "شما بازی را باختید 😔";
    //               document.querySelector('body').style.backgroundColor = "red";
    //     }

    // }else if(guess < secretNumber){

    //   if (score > 1 ) {
    //    document.querySelector('.message').textContent = "عدد خیلی پایین  زدی  بیا بالا تر 🔻 "
    //   score--;
    //   document.querySelector('.score').textContent = score;

    //   }else{
    //    score = 0;
    //    document.querySelector('.score').textContent = score;
    //    document.querySelector('.message').textContent = "شما بازی را باختید 😔";
    //     document.querySelector('body').style.backgroundColor = "#b23737";
    //   }

    // }
});
// Check Btn End

document.querySelector('.again').addEventListener('click' , function(){

  score =20;
  secretNumber = Math.trunc(Math.random() * 20 ) + 1;
           displayMessage('.message' , 'حدس بزن  عدد چیه ....' )
  // document.querySelector('.message').textContent = 'حدس بزن  عدد چیه ....'
  document.querySelector('body').style.backgroundColor = "#2f2e2e";
         displayMessage('.score' ,  score)
  //  document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';
          displayMessage('.number' , "?" )
    // document.querySelector('.number').textContent = "?";

  
})