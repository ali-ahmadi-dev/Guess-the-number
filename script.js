'use strict';



// Method math
const secretNumber =Math.trunc(Math.random() * 20 ) + 1;
//  Method math End



// Start  Check Btn
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = ' 😒 عددی وجود ندارد'
    }else if(guess === secretNumber){
       document.querySelector('.message').textContent = "درست حدس زدی ایول به تو  🤗🤗"
    }else if(guess > secretNumber){
      document.querySelector('.message').textContent = "عدد خیلی بالا زدی  بیا پایین تر 🔺 "
    }else if(guess < secretNumber){
      document.querySelector('.message').textContent = "عدد خیلی پایین  زدی  بیا بالا تر 🔻 "
    }
});
// Check Btn End
