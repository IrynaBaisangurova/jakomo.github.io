 //https://api.telegram.org/bot5068944020:AAGMQk47qVyjDCwQI1Uf2-f-7Oo3MLSoRiM/getUpdates

$('#button').on('click', function(e){
     e.preventDefault();

     let name=$('#name').val().trim();
     let email=$('#email').val().trim();

     if(name == ""){
         $('#error-name').text('Enter your name')
     }else if(email == "") {
         $('#error-email').text('Enter your email');
         return false
     }
     $.ajax({
         url:'ajax/telegram.php',
         type:'POST',
         cache: false, 
         data:{'email': email, 'name': name},
         dataType: 'html',
         beforeSend: function(){
            $('#button').prop('disabled', true)
        },
         success: function(){
           alert('its okey')
           $('.modal-overlay').fadeIn();
           $('#name').val('');
      $('#email').val('');
      $('#error-email').text('');
      $('#error-name').text('');
      $('#button').prop('disabled', false);

        }
    })
})