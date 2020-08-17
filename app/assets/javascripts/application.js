/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(document).ready(function () {
     $('.tabs ul.govuk-list li button.govuk-link').on('click',function(e) {
          $('.tabs ul.govuk-list li button.govuk-link').removeClass('selected');
          $(this).addClass('selected');
     });

     $('.read-more').on('click',function(e) {
          e.preventDefault();
          $(this).parent().find('.govuk-caption-m').toggleClass('truncate');
          $(this).html($(this).text() == 'Show less' ? 'Read more' : 'Show less');
     });

});

function openTab(tabNumber) {
     var i;
     var x = document.getElementsByClassName("tab-number");
     for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
     }
     document.getElementById(tabNumber).style.display = "block";
}
