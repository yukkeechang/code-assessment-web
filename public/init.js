(function($){
  $(function(){

    var elem = document.querySelector('.modal');
    var instance = M.Modal.init(elem, {});

    $(document).ready(function(){
      $('.modal').modal();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
