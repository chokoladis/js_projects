$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      let person = data.results[0];
      let img = person.picture.large;
      let phone = person.phone;


      function updatePerson(avatar){
        $('.info_block .avatar img').attr('src',img);
        $('.info_block .title').text('my phone is');
        $('.info_block h2').text(phone);
      }

      updatePerson(img);

      console.log(person);
    }
});

