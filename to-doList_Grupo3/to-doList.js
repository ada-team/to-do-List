/*$(document).ready(function(){


    $("#btn_agregar").on('click',function(){

        var array=[];
    	array.push($('#lista').val());
        console.log(array);
        for (var i=0; i<array.length; i++) {
          var li= "<li>"+ array[i]+ "<button class='borrar' type='button'> X </button>"+"</li>";
	      $('#myUL').append(li);
	      $('#lista').val("");
	      if ($('#check').is(':checked')){

	          	$('li').last().addClass('rojo');
	         }

          $('li').on('click',function(){
          $(this).addClass('tachado');


            });
          $('li').on('click',function(){
          $(this).toggleClass('destachado');


            });    
      


	     }

        $('#check').prop('checked',false)
        $('.borrar').on('click',function(){
          $(this).parent().remove();//$(this).remove() me borra el boton, tengo .parent o para los hijos .children
       
       

        });
     
    });



});// prop('checked',false);


    SIN FOR*/

$(document).ready(function(){

    
    $("#btn_agregar").on('click',function(){
        var texto=$('#lista').val();
        console.log(texto)
        var li= "<li class='destachado'>"+texto+"<button class='borrar ' type='button'> X </button>"+"</li>";
        $('#myUL').append(li);   
        if ($('#check').is(':checked')){

	          	$('li').last().addClass('rojo');
	         }
        $('#check').prop('checked',false);     
	    
        $('#lista').val("");
        $('.borrar').on('click',function(){

        	$(this).parent().remove();//$(this).remove() me


        	//tengo .parent o para los hijos .children
        });
        

        $('li').on('click',function(){
           $(this).toggleClass('tachado');


            });
        $('li').on('click',function(){
          $(this).toggleClass('destachado');


            });  

      
     
   });// prop('checked',false);
   
          

});


