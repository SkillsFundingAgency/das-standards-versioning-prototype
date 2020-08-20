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

// Multiple emails
function addAnotherEmail() {
     event.preventDefault();
     emailNumber++;
     $("#emails").append(`
          <div class="govuk-form-group">
               <label class="govuk-label" for="updates-email[url${emailNumber}]">
                    Additional email address
               </label>
               <input class="govuk-input govuk-input--width-20" id="updates-email[url${emailNumber}]" name="updates-email[url${emailNumber}]" type="text" aria-describedby="updates-email-hint" spellcheck="false">
               <p class="govuk-body">
                    <a class="govuk-link govuk-link--no-visited-state" data-remove="url${emailNumber}" href="#">remove</a>
               </p>
          </div>
     `).on("click", "[data-remove]", function () {
     if ($("#emails").data("email-count") === 1) {
          event.preventDefault();
          $(this).closest(".govuk-form-group").remove();
     }
     });
}

function removeEmail() {
     event.preventDefault();
     var removeId = $(this).data("remove");
     $("#emails").append(`
          <input id="updates-email[${removeId}]" name="updates-email[${removeId}]" type="hidden" value="" />`
     )
     $(this).closest(".govuk-form-group").remove();
}

var emailNumber = $("#emails").data("email-count");
$("#addAnotherEmail").on("click", addAnotherEmail);
$("[data-remove]").on("click", removeEmail);
