$(function(){
  var currencies = [
    { value: "Happy Valley Forder Lane Bishopsteignton, Teignmouth, TQ14 9SA" },
    { value: "Happy Bottom Corfe Mullen, Wimborne, BH21 3DP" },
    { value: "Happy Close Veverington, Wisbech, PE13 5FR" },
    { value: "Happy Island Way Bridport, DT6 4JZ" },
    { value: "Happy Land Asthton Keynes, Swindon, SN6 6PN" },
    { value: "Happyhills West Kilbride, KA23" }

  ];

     // setup autocomplete function pulling from currencies[] array
     $('#epao-address').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#outputcontent').html(thehtml);
          }
     });

});
