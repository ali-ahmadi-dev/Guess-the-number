'use strict';



// Method math
const secretNumber =Math.trunc(Math.random() * 20 ) + 1;
//  Method math End



// Start  Check Btn
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number( document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = ' 😒 عددی وجود ندارد'
    }
});
// Check Btn End
