
>[!Note]
Index Html

    <head>
        <!-- Elementos que son necesarios -->
        <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
        <script src="https://code.jquery.com/ui/1.13.3/jquery-ui.js"></script>

    </head>

>[!Note]
Elemento al que se le aplicara el autocompletado



    <form>
        <label for="select">Selecciona un lenguaje de programacion: </label>
        <input id="select">
    </form>

>[!important]
Javascript


  $( "#select" ).autocomplete({
    source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
  });

