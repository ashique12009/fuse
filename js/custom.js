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
  
  // Reset password
  $('.user-form input[type="email"]').attr('placeholder', 'Email');
  $('.user-form input[name="name"]').attr('placeholder', 'Username');

  // Sidebar
  $('.page-sidebar').hide();
  $('.close-me').on('click', function(){
    $('.page-sidebar').hide();
  });
  
  $('.side-bar-button').on('click', function(){
    $('.page-sidebar').toggle();
  });

  // Badges
  // Get sessionStorage to store tmembers
  var tmembers = sessionStorage.getItem("tmembers");
  //console.log(tmembers);
  var tmembers_by_html = $('#tmembers').val();
  if ( tmembers == null ) {
    sessionStorage.setItem("tmembers", tmembers_by_html);
    tmembers = tmembers_by_html;
  }
  
  $('#block-frontusermenu li').each(function(){
    var li = $(this);
    var textValue = li.children('.nav-link').children('.itemtitle').text();
    if ( textValue == "Users" ) {
      if ( tmembers != "undefined" ) {
        li.children('.nav-link').children('.unumber').text(tmembers);
      }
    }
  });

  // Get base url
  /*var base_url = $('#base_url').val();
  $.ajax({
    type : "GET",
    url : base_url + 'ajax/callback/path',
    success : function (res) {
      //$("#edit-result").html(res);
      // put the response to label text
      $('#block-frontusermenu li').each(function(){
        var li = $(this);
        var textValue = li.children('.nav-link').children('.itemtitle').text();
        if ( textValue == "Users" ) {
          li.children('.nav-link').children('.unumber').text(res);
        }
      });
    },
    error : function (res) {
      alert("error");
    }
  });*/
  
})(jQuery);