var letters = '0123456789ABCDEF';

function getRandomColor(){
    
    let color = '#';
    let i = 0;

    while(i<6){
        color = color + letters[Math.floor(Math.random()*letters.length)];
        i++;
    }

    return color;
}

$('.btn').on('click', function(){
    let newColor = getRandomColor();
    $('.msg_bg span').text(newColor);
    $('.msg_bg').css('background',newColor);
    $('.msg_bg').css('filter','invert(1)');
    $('body').css('background',newColor);
});