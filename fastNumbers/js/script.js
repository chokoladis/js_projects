// let i = 0;
// function myLoop(numElement, number) {
//     console.log('number - '+ number);
//     setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        
//         console.log(numElement);
//         $(numElement).text(i);
        
//         i++;                    //  increment the counter
//         if (i < number) {
//             myLoop(number);             //  ..  again which will trigger another 
//         }                       //  ..  setTimeout()
//     }, 100)
// }

// for (let number of $('.block h2')){
    
//     let num = $(number).text();
//     let j = 0;

//     var numEl = parseInt(num.match(/\d+/));

//     // $(number).text('00');

//     myLoop($(number), numEl);
//     console.log('end for number ');
// }

// Код спизжен из интернета
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    if (stepTime<3){
        stepTime = 0.01;
        increment = 10;
    }
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            obj.innerText += '+'
        }
    }, stepTime);
}

animateValue("500", 0, 500, 2000);
animateValue("17140", 0, 17140, 2000);
animateValue("1500", 0, 1500, 2000);