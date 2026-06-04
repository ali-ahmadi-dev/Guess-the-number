'use strict';



// Method math
const secretNumber = Math.trunc(Math.random() * 20 ) + 1;
//  Method math End


let score = 20;


// Start  Check Btn
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = ' 😒 عددی وجود ندارد'
    }else if(guess === secretNumber){
       document.querySelector('.message').textContent = "درست حدس زدی ایول به تو  🤗🤗"
       document.querySelector('body').style.backgroundColor = "green";
    }else if(guess > secretNumber){
      if (score > 1) {
      document.querySelector('.message').textContent = "عدد خیلی بالا زدی  بیا پایین تر 🔺 "
       score--;
        document.querySelector('.score').textContent = score;
        }else{
             score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "شما بازی را باختید 😔";
                  document.querySelector('body').style.backgroundColor = "red";
        }

    }else if(guess < secretNumber){

      if (score > 1 ) {
       document.querySelector('.message').textContent = "عدد خیلی پایین  زدی  بیا بالا تر 🔻 "
      score--;
      document.querySelector('.score').textContent = score;

      }else{
       score = 0;
       document.querySelector('.score').textContent = score;
       document.querySelector('.message').textContent = "شما بازی را باختید 😔";
        document.querySelector('body').style.backgroundColor = "#b23737";
      }

    }
});
// Check Btn End
