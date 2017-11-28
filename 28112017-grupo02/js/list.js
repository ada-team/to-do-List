

$(document).ready(function(){

	$("#myButton").on("click", function(){
		
		var myContent = $("#myInput").val();
		var myLi ='<li>. '+myContent+'<button class="btnDelete" type="button">x</button></li>';
		$("#myUl").append(myLi);
		$("#myInput").val("");
		if ($("#myCheckbox").is(":checked")) {
				$("li").last().addClass("myRed");
				//$(myLi).css("color","red");
			}
		$("#myCheckbox").prop('checked',false);	
		/*
		$(".btnDelete").on("click", function(){
			$(this).parent().remove();
		})	
	    
	    $("li").on("click", function(){
	    	$(this).toggleClass("underline");    		
    	})
    	*/
	});

	function deleteParent(){
		$(this).parent().remove();
	}
    $(document).on("click", ".btnDelete", deleteParent);

    function underline(){
    	$(this).toggleClass("underline");
    }
    $(document).on("click", "li", underline);
	
})
/*	
   var myArray = [];
   myArray.push($("#myInput").val());

   console.log(myArray);

	for (var i = 0; i < myArray.length; i++) {
		var myLi = '<li>'+myArray[i]+'<button class="btnDelete" type="button">x</button></li>';
        $("#myUl").append(myLi);
        $("#myInput").val("");
        if ($("#myCheckbox").is(":checked")) {
        	console.log("Entro al if")
			$("li").last().addClass("myRed");
		}
	}
	$("#myCheckbox").prop('checked',false);

	$(".btnDelete").on("click", function(){
		$(this).parent().remove();
	})
*/
	





/*
$(".btnDelete").on("click", function(){
	$(this).parent();
})
*/

/*

docuemnt ready tengo todas las variable cargadas.

Como la clase .btnDelete esta dentro de los li que son variables locales en las 
la funcion principal 
Si lo siguiente no esta dentro 
$(".btnDelete").on("click", function(){
		$(this).parent().remove();
	})	

Funcion anonima si lo que se hace se hace adentro
*/