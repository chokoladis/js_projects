
function fSearch(param){
  
  if (param != ''){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&options&search='+param+'&format=json&callback=?',
      dataType: 'json',
      success: function(data) {

        console.log(data);
        if (data[1].length < 1 && data[3].length < 1 ){
          UIkit.notification({
            message: 'По вашему запросу ничего не найдено',
            status: 'warning',
            pos: 'bottom-left',
            timeout: 4000
          });
          return;
        }
  
        // подготовка 
        let i = 0;
        let out1 = [];
        let out2 = [];
  
        let arr1 = data[1];
        let arr2 = data[3];
  
        for ( let key of arr2 ){
          out2[i] = key;
          i++;
        }
  
        i=0;
  
        for ( let key of arr1 ){
          
          out1[i] = [key,out2[i]];
          
          i++;
        }
  
        i=0;
  
  
        // Вывод результатов  
        for ( let key of out1 ){
         
          $('.results').append('<div class="block" id="block_'+i+'" data-id="'+i+'"></div>');
          $('.results #block_'+i).append('<h2>'+key[0]+'</h2><a href="'+key[1]+'">'+key[1]+'</a>');
  
          i++;
        }
  
      }
    });
  } else {
    UIkit.notification({
      message: 'Заполните строку поиска',
      status: 'primary',
      pos: 'bottom-left',
      timeout: 4000
    });

  }
 
}


$('#send').on('click', function(e){
  
  e.preventDefault();

  $('.results').empty();

  let search = $('input#search').val();
  fSearch(search);

});

$('header .btn').on('click', () => {
  $('html').toggleClass('dark');
})