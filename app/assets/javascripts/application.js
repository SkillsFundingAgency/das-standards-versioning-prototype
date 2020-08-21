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

// Tabs
function openTab(tabNumber) {
     var i;
     var x = document.getElementsByClassName("tab-number");
     for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
     }
     document.getElementById(tabNumber).style.display = "block";
}

// Multiple emails
$('.updates-emails, .updated-standard, .review-dates').hide();

$('input[name=what-emails]').on('click',function(e) {
     if ($('input[value="Planned updates to standards"]').is(':checked')) {
          $('.updates-emails').show();
     } else {
          $('.updates-emails').hide();
     }

     if ($('input[value="When an updated standard goes live"]').is(':checked')) {
          $('.updated-standard').show();
     } else {
          $('.updated-standard').hide();
     }

     if ($('input[value="Notice of review dates"]').is(':checked')) {
          $('.review-dates').show();
     } else {
          $('.review-dates').hide();
     }
});

// ONE
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

// TWO
function addAnotherEmailTwo() {
     event.preventDefault();
     emailNumberTwo++;
     $("#emailsTwo").append(`
          <div class="govuk-form-group">
               <label class="govuk-label" for="updates-emailTwo[urlTwo${emailNumberTwo}]">
                    Additional email address
               </label>
               <input class="govuk-input govuk-input--width-20" id="updates-emailTwo[urlTwo${emailNumberTwo}]" name="updates-emailTwo[urlTwo${emailNumberTwo}]" type="text" aria-describedby="updates-email-hint" spellcheck="false">
               <p class="govuk-body">
                    <a class="govuk-link govuk-link--no-visited-state" data-remove="urlTwo${emailNumberTwo}" href="#">remove</a>
               </p>
          </div>
     `).on("click", "[data-removeTwo]", function () {
     if ($("#emailsTwo").data("email-countTwo") === 1) {
          event.preventDefault();
          $(this).closest(".govuk-form-group").remove();
     }
     });
}

function removeEmailTwo() {
     event.preventDefault();
     var removeIdTwo = $(this).data("removeTwo");
     $("#emailsTwo").append(`
          <input id="updates-emailTwo[${removeIdTwo}]" name="updates-emailTwo[${removeIdTwo}]" type="hidden" value="" />`
     )
     $(this).closest(".govuk-form-group").remove();
}

var emailNumberTwo = $("#emailsTwo").data("email-countTwo");
$("#addAnotherEmailTwo").on("click", addAnotherEmailTwo);
$("[data-removeTwo]").on("click", removeEmailTwo);

// THREE
function addAnotherEmailThree() { 
     event.preventDefault();
     emailNumberThree++;
     $("#emailsThree").append(`
          <div class="govuk-form-group">
               <label class="govuk-label" for="updates-emailThree[urlThree${emailNumberThree}]">
                    Additional email address
               </label>
               <input class="govuk-input govuk-input--width-20" id="updates-emailThree[urlThree${emailNumberThree}]" name="updates-emailThree[urlThree${emailNumberThree}]" type="text" aria-describedby="updates-email-hint" spellcheck="false">
               <p class="govuk-body">
                    <a class="govuk-link govuk-link--no-visited-state" data-remove="urlThree${emailNumberThree}" href="#">remove</a>
               </p>
          </div>
     `).on("click", "[data-removeThree]", function () {
     if ($("#emailsThree").data("email-countThree") === 1) {
          event.preventDefault();
          $(this).closest(".govuk-form-group").remove();
     }
     });
}

function removeEmailThree() {
     event.preventDefault();
     var removeIdThree = $(this).data("removeThree");
     $("#emailsThree").append(`
          <input id="updates-emailThree[${removeIdThree}]" name="updates-emailThree[${removeIdThree}]" type="hidden" value="" />`
     )
     $(this).closest(".govuk-form-group").remove();
}

var emailNumberThree = $("#emailsThree").data("email-countThree");
$("#addAnotherEmailThree").on("click", addAnotherEmailThree);
$("[data-removeThree]").on("click", removeEmailThree);
