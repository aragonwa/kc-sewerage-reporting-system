

(function($){
  'use strict';
  // bind a click event to the 'skip' link
  $('a.skip-contents').click(function(){ // Need to add a class to skip to links 
    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo = '#'+this.href.split('#')[1];
    // Setting 'tabindex' to -1 takes an element out of normal 
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
      // when focus leaves this element, 
      // remove the tabindex attribute
      $(this).removeAttr('tabindex');
    }).focus(); // focus on the content container
    return false;
  });
})(jQuery);


$(function(){
    //Small scripts or setup for plugins

    /* Prevent click event on empty a href tags */
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });

    /* Prevent Safari opening links when viewing as a Mobile App */
    (function (a, b, c) {
        if (c in b && b[c]) {
            var d, e = a.location,
                f = /^(a|html)$/i;
            a.addEventListener('click', function (a) {
                d = a.target;
                while (!f.test(d.nodeName)) d = d.parentNode
                "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href);
            }, !1);
        }
    })(document, window.navigator, 'standalone');

    //http://getbootstrap.com/getting-started/#support-ie10-width
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
            '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }
});
//Funciton to choose Background on body: modified for Internal Apps
(function( $ ){
  'use strict';
  $.fn.chooseBG = function( options ) {
    var $this = this;
    return this.each(function() {
      $this.css('background-image', 'url("' + options.img + '")');
    });
  };
})(jQuery);