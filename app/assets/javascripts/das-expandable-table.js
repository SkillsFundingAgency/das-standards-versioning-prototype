(function (global) {
  "use strict";

  var $ = global.jQuery;
  var DASFrontend = global.DASFrontend || {};

  DASFrontend.expandableTable = {
    init: function init() {
      // loop over table row and add relevant attributes
      $(".js-expand-table-row").each(function () {
        var ariaControlId = "table-content-" + $(this).data("expand-id");
        var $expandable = $(this)
          .closest("tr")
          .nextAll("tr.js-expandble-cell:first");
        var $arrow = $(this).find("i.arrow");
        $(this).attr({
          "aria-expanded": "false",
          "aria-controls": ariaControlId
        });
        $expandable.attr({ "aria-hidden": "true", id: ariaControlId });
        $arrow.attr("aria-hidden", "true");

        // show and hide based on click and update aria tags
        $(this).on("click keypress", function (event) {
          event.preventDefault();
          if (event.type === "keypress" && event.keyCode !== 13) return;
          if ($expandable.hasClass("expandble-cell--hidden")) {
            // SHOW CONTENT
            $(this).attr({
              "aria-expanded": "true",
              "aria-controls": ariaControlId
            });
            $expandable
              .removeClass("expandble-cell--hidden")
              .attr("aria-hidden", "false");
            $arrow
              .attr({ class: "arrow arrow-open", "aria-hidden": "false" })
              .text("\u25bc");
          } else {
            // HIDE CONTENT
            $(this).attr("aria-expanded", "false");
            $expandable
              .addClass("expandble-cell--hidden")
              .attr({ "aria-hidden": "true", id: ariaControlId });
            $arrow
              .attr({ class: "arrow arrow-closed", "aria-hidden": "true" })
              .text("\u25ba");
          }
        });
      });

      $(".js-expand-table-row-for-radio").each(function () {
        var ariaControlId = "table-content-" + $(this).data("expand-id");
        var $expandable = $(this)
          .closest("tr")
          .nextAll("tr.js-expandble-cell-for-radio:first");

        $(this).attr({
          "aria-expanded": "false",
          "aria-controls": ariaControlId
        });
        $expandable.attr({ "aria-hidden": "true", id: ariaControlId });
        // show and hide based on click and update aria tags
        $(this).on("click keypress", function (event) {
          if (event.type === "keypress" && event.keyCode !== 13) return
          var $optionContainer = $(this).parent().parent()[0];
          var $firstOption = $optionContainer.firstElementChild;
          var $lastOption = $optionContainer.lastElementChild;
          if (event.currentTarget.classList.contains("js-first-option")) {
            //Clear other option in case it is marked checked
            DASFrontend.expandableTable.clearOtherOption($lastOption);
            //If current option is checked then clear 
            if (event.currentTarget.classList.contains("checked")) {
              DASFrontend.expandableTable.clearOption($firstOption, event);
              DASFrontend.expandableTable.clearHiddenValue($firstOption);
            }
            else {
              //Current option was not checked so mark checked
              DASFrontend.expandableTable.checkOption($firstOption, event);
            }
          } else {
            //Clear other option in case it is marked checked
            DASFrontend.expandableTable.clearOtherOption($firstOption);
            //If current option is checked then clear option just hide reason in case it is showing
            if (event.currentTarget.classList.contains("checked")) {
              DASFrontend.expandableTable.clearOption($lastOption, event);
              DASFrontend.expandableTable.clearHiddenValue($lastOption);
              DASFrontend.expandableTable.hideContent($(this), ariaControlId, $expandable);
              return;
            }
            else {
              //Current option was not checked so mark checked
              DASFrontend.expandableTable.checkOption($lastOption, event);
            }
          }
          if ($(this).attr("data-hide")) {
            //FORCE HIDE CONTENT
            DASFrontend.expandableTable.hideContent($(this), ariaControlId, $expandable);
          }
          else if ($expandable.hasClass("js-hidden")) {
            // SHOW CONTENT
            $(this).attr({
              "aria-expanded": "true",
              "aria-controls": ariaControlId
            });
            $expandable.removeClass("js-hidden").attr("aria-hidden", "false");

          }
        });
      });
    },
    clearHiddenValue: function ($option) {
      if ($option.firstElementChild.getAttribute('data-clear-on-uncheck')) {
        $("input[name='" + $option.firstElementChild.name + "'][type='hidden']").val('');
      }
    },
    hideContent: function ($element, ariaControlId, $expandable) {
      $element.attr("aria-expanded", "false");
      $expandable
        .addClass("js-hidden")
        .attr({ "aria-hidden": "true", id: ariaControlId });
    },
    clearOtherOption: function ($option) {
      if ($option.firstElementChild.classList.contains("checked")) {
        $option.firstElementChild.checked = false;
        $option.firstElementChild.classList.remove("checked");
      }
    },
    checkOption: function ($option, event) {
      $option.firstElementChild.checked = true;
      event.currentTarget.classList.add("checked");
    },
    clearOption: function ($option, event) {
      $option.firstElementChild.checked = false;
      event.currentTarget.classList.remove("checked");
    }


  };

  global.DASFrontend = DASFrontend;
})(window);
