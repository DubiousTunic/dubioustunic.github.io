$(document).ready( function () {
    $('.data_table').DataTable({
      pageLength:25,
      responsive:true
    });

    $(function(){

      $('#main_content').glossarizer({
        sourceURL: '../glossary/glossary.json',
        lookupTagName: "td, th, li, span",
        callback: function(){

          // Callback fired after glossarizer finishes its job

          new tooltip();

        }
      });


    });
} );
