
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      person = data.results[0];
      let img = person.picture.large;
      let phone = person.phone;
      let locationStr = person.location.country+', '+person.location.state+', '+ person.location.city+', '+person.location.street.name+', ' +person.location.street.number;

      function updatePerson(avatar){
        $('.info_block .avatar img').attr('src',avatar);
        updateHtml('My name is', person.name.first + ' ' + person.name.last);
      }

      updatePerson(img);

      function updateHtml(title, value){
        $('.info_block .title').text(title);
        $('.info_block h2').text(value);
      }

      $('#user_fio').on('click', function(){
        updateHtml('My name is', person.name.first + ' ' + person.name.last);
      });

      $('#user_mail').on('click', function(){
        updateHtml('My mail is', person.email);
      });
      $('#user_bithday').on('click', function(){
        let date = person.dob.date.substring(0, 10);
        updateHtml('My bithday is', person.dob.age + ' age, ' + date);
      });

      $('#user_address').on('click', function(){
        updateHtml('My address is', locationStr);
      });
      
      $('#user_phone').on('click', function(){
        updateHtml('My phone is', person.phone);
      });

      $('#user_pass').on('click', function(){
        updateHtml('My password is', person.login.password);
      });

      $('.btn').on('click', function(){
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function(data) {
            person = data.results[0];
            
            let img = person.picture.large;
      
            updatePerson(img);
          }
        });
      });

      console.log(person);
    }});

