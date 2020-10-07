  $(document).ready(function(){

   $('#sname,#sclass,.count').focus(function(){
   $(this).css('background-color','lime');
   });


      $('#sname,#sclass,.count').blur(function(){
      $(this).css('background-color','');
      });


         $('.count').change(function(){
         $(this).css('background-color','pink');
         });



  });
