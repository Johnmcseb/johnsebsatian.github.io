/*************************************************
 *  Hugo Academic: an academic theme for Hugo.
 *  https://github.com/gcushen/hugo-academic
 **************************************************/

(function($){

  /* ---------------------------------------------------------------------------
   * Add smooth scrolling to all links inside the main navbar.
   * --------------------------------------------------------------------------- */

  $('#navbar-main li.nav-item a').on('click', function(event){

    // Store requested URL hash.
    var hash = this.hash;

    // If we are on the homepage and the navigation bar link is to a homepage section.
    if( hash && $(hash).length && ($("#homepage").length > 0)){
      // Prevent default click behavior
      event.preventDefault();

      var navbarHeight = $('.navbar-header').innerHeight();

      // Use jQuery's animate() method for smooth page scrolling.
      // The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbarHeight
      }, 800, function () {
        // Add hash (#) to URL once finished scrolling to hash position
        if (hash == "#top"){
          window.location.hash = ""
        }else {
          window.location.hash = hash;
        }
      });
    }
  });

  /* ---------------------------------------------------------------------------
   * Smooth scrolling for Back To Top link.
   * --------------------------------------------------------------------------- */

  $('#back_to_top').on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
      'scrollTop': 0
    }, 800, function(){
      window.location.hash = ""
    });
  });

  /* ---------------------------------------------------------------------------
   * Hide mobile collapsable menu on clicking a link.
   * --------------------------------------------------------------------------- */

  $(document).on('click','.navbar-collapse.in',function(e){
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ){
      $(this).collapse('hide');
    }
  });

  /* ---------------------------------------------------------------------------
   * On window load.
   * --------------------------------------------------------------------------- */

  $(window).load(function(){

    // When accessing homepage from another page and `#top` hash is set, show top of page (no hash).
    if (window.location.hash == "#top") {
      window.location.hash = ""
    }

  });

})(jQuery);
