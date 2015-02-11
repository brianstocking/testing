$(document).ready(function(){
  
  $('#welcomeMessage').on('click', function(){
    $('#welcomeMessage').css('font-size', '50px')
  });
  
  $('#submit').on('click', function(){
    var item = $('#newItemForm').val();
    var listItem = '<li>'+ item + '</li>';
    $('#items').append(listItem);
    $('#newItemForm').val('');
  });
  
  $('#newItemForm').on('focus', function() {
    $('#newItemForm').css('height', '30px');
    
  });
  
  $('#newItemForm').on('blur', function() {
    $('#newItemForm').css('height', '10px');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});