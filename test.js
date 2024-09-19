

const selector = document.querySelector("#select");

console.log(selector);

/* $( ".select" ).autocomplete({
    appendTo: "#someElem"
  });
 */
/*   // Getter
var appendTo = $( ".selector" ).autocomplete( "option", "appendTo" );
 
// Setter
$( ".selector" ).autocomplete( "option", "appendTo", "#someElem" );
$( ".selector" ).autocomplete({
    autoFocus: true
  }); */

  $( "#select" ).autocomplete({
    source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
  });