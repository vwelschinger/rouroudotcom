// Custom JS
$(document).ready(function(){
  /* ==========================================================================
     Simple Form - Contact Form
     ========================================================================== */

  $('#mailbox').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "https://getsimpleform.com/instructions?api_token=0364f378fcb8dba735c43d065e8865d6",
      data: $("#mailbox").serialize(),
      error: function() {
        $('#mailbox').hide();
        $('#errormessage').show();
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $('#mailbox').hide();
      $('#greatsuccess').show();
    });
    return false; //to stop the form from submitting
  });
});