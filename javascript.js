$(document).ready(function(){

  $("#generar_numeros").click(function(){
    var primer_numero=parseInt($("#inicial").val());
    var segundo_numero=parseInt($("#final").val());
    if(isNaN(primer_numero) || isNaN(segundo_numero)){
      $("#header .titulo").hide().fadeIn(500).html("<h5 style='color: #BD1C1C'>" +"Tienes que introducir dos numeros"  +"</h5>");
    }
    else if(primer_numero>=segundo_numero){
      $("#header .titulo").hide().fadeIn(500).html("<h5 style='color: #BD1C1C'>" +"El primer numero debe ser menor que el segundo" +"</h5>");
    }
    else{
       var aleatorio=Math.floor(Math.random()*(segundo_numero-primer_numero+1) +primer_numero);
       $("#header .titulo").hide().fadeIn(500).html("<h1>" +aleatorio +"</h1>");
    }
  });

  $("#anadir").click(function(){
     $("#contenedor2").append("<input type='text' placeholder='Otra opcion' class='opcion'>" +"</input>");
   });

  $("#generar_palabras").click(function(){
    var opciones=[];
    $(".opcion").each(function(){
      if($(this).val()==""){
        //ignora el input
      }
      else{
        opciones.push($(this).val());
      }
    });
    if(opciones.length<=0){
      $("#header .titulo").hide().fadeIn(500).html("<h5 style='color: #BD1C1C'>" +"No hay opciones a elegir" +"</h5>")
    }
    else{
      var aleatorio=Math.floor(Math.random()*(opciones.length) +0);
      $("#header .titulo").hide().fadeIn(300).html("<h5>" +opciones[aleatorio] +"</h5>");
    }
  });

  $("div#opciones ul li").click(function(){
    var agregar=$(this).attr("id");
    if(agregar=="margin_numeros"){
      $("#margin_numeros").addClass("borde");
      $("#margin_letras").removeClass("borde");
    }
    else{
      $("#margin_letras").addClass("borde");
     $("#margin_numeros").removeClass("borde");
    }
  });

/*
  $("#margin_letras").click(function(){
    $("#numeros").animate({marginLeft: "-100%"},500,mostrar_letras);
  });

  function mostrar_letras(){
    $("#numeros").hide();
    $("#palabras").animate({marginLeft: "20%"},300);
  }

  $("#margin_numeros").click(function(){
    $("#palabras").animate({marginLeft: "100%"},500,mostrar_numeros);
  });

  function mostrar_numeros(){
    $("#numeros").show();
    $("#numeros").animate({marginLeft: "20%"},300);
  }
  */

  $("div#palabras").hide();

  $("#margin_letras").click(function(){
    $("div#numeros").fadeOut(200,function(){
      $("div#palabras").fadeIn(200);
    });
  });

  $("#margin_numeros").click(function(){
    $("div#palabras").fadeOut(200,function(){
      $("div#numeros").fadeIn(200);
    });
  });

});
