$(document).ready(function(){
  
  
  $('#submit').on('click', function(){
    var item = '<li>' + $('#newItem').val() + '</li>';
    $('#list').append(item);
  
  });


});