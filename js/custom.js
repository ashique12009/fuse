// Home page js
(function ($) {
  // Jquery code goes here
  // Login code
  $('.user-login-form input[type="text"]').attr('placeholder', 'Username');
  $('.user-login-form input[type="password"]').attr('placeholder', 'Password');
  
  // Register code
  $('.user-register-form input[type="email"]').attr('placeholder', 'Email');
  $('.user-register-form input[name="name"]').attr('placeholder', 'Username');
  $('.user-register-form input[name="pass[pass1]"]').attr('placeholder', 'Password');
  $('.user-register-form input[name="pass[pass2]"]').attr('placeholder', 'Confirm Password');
  
  // Sidebar
  $('.close-me').on('click', function(){
    $('.page-sidebar').hide();
  });
  $('.side-bar-button').on('click', function(){
    $('.page-sidebar').show();
  });
})(jQuery);