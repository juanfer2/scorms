/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      
      
        

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Variables scorm
         
         // Hide an element 
         
         var totPag = window.parent.znNavigablePages;
         var pagAct = window.parent.paginaActual;
         var porcentaje = (100 / totPag) * pagAct;
         
         
         // Carga el page correspondiente
         EC.loadComposition("page"+pagAct+"/page"+pagAct+".htm", sym.getSymbol("content"));
         
         // Centra el contenido
         $("#Stage").css("margin","0 auto");
         
         //Llamado de función que valida las flechas de navegación, cual aparece y cual no
         validarFlechas();
         
         // determina el porcetaje de width en primera instancia que va a tener la barra de progreso
         setTimeout(function(){$("#Stage_Rectangle02").css("width",porcentaje+"%");},0.5)
         
         // función que valida flechas y es llamada cada vez que se avanza en el curso o se retrocede
         function validarFlechas(){
         
         	pagAct = window.parent.paginaActual;
         	$("#Stage_progreso_Rectangle3").html(""+pagAct+" de "+totPag);
         	$("#Stage_progreso_Rectangle3").css("color","#a9d42d");
         	$("#Stage_progreso_Rectangle3").css("font-family","cabin");
         	$("#Stage_progreso_Rectangle3").css("text-align","center");
         	$("#Stage_progreso_Rectangle3").css("font-size","12px");
         
         	porcentaje = (100 / totPag) * pagAct;
         	$("#Stage_Rectangle02").css("width",porcentaje+"%");
         
         	if (totPag == 1) {
         		sym.$("f_izquierda").hide();
         		sym.$("f_derecha").hide();
         	} else if (totPag > 1 && pagAct == 1) {
         
         		sym.$("f_izquierda").hide();
         		sym.$("f_derecha").show();
         
         	} else if (totPag > 1 && pagAct == totPag) {
         		sym.$("f_izquierda").show();
         		sym.$("f_derecha").hide();
         
         	} else {
         		sym.$("f_izquierda").show();
         		sym.$("f_derecha").show();
         	}
         
         }
         
         // función que llama el evento de las flechas y que a su vez llama ala función principal de validar flechas
         sym.valFle = function(){
         	validarFlechas()
         }
         
         // función para avanzar
         sym.siguiente = function(){
         	pagAct++;
         	$("#Stage_precargaInterna").css("display","block");
         	EC.loadComposition("page"+pagAct+"/page"+pagAct+".htm", sym.getSymbol("content"));
         }
         
         // función para retroceder
         sym.anterior = function(){
         	pagAct--;
         	$("#Stage_precargaInterna").css("display","block");
         	EC.loadComposition("page"+pagAct+"/page"+pagAct+".htm", sym.getSymbol("content"));
         }
         
         
         
         //$("#Stage_f_derecha", window.parent.document).hide();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${f_izquierda}", "click", function(sym, e) {
         window.parent.PreviousPage();
         sym.anterior();
         sym.valFle();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${f_izquierda}", "mouseleave", function(sym, e) {
         // insertar código para que se ejecute cuando el ratón sale de un elemento
         sym.getSymbol("f_izquierda").$("b_atras_2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${f_izquierda}", "mouseenter", function(sym, e) {
         // insertar código para que se ejecute cuando el ratón entra en un elemento
         
         // Mostrar un elemento 
         sym.getSymbol("f_izquierda").$("b_atras_2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${f_derecha}", "click", function(sym, e) {
         //sym.$("Tranca_Adelante").show();
         window.parent.NextPage();
         sym.siguiente();
         sym.valFle();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${f_derecha}", "mouseenter", function(sym, e) {
          
         sym.getSymbol("f_derecha").$("b_siguiente_2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${f_derecha}", "mouseleave", function(sym, e) {
         sym.getSymbol("f_derecha").$("b_siguiente_2").hide();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.stop();
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle0}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(1);
         
         
         sym.getSymbol("btn_M_0").$("btn_0_0").show();
         sym.getSymbol("btn_M_1").$("btn_1_0").hide();
         sym.getSymbol("btn_M_2").$("btn_2_0").hide();
         sym.getSymbol("btn_M_3").$("btn_3_0").hide();
         sym.getSymbol("btn_M_4").$("btn_4_0").hide();
         sym.getSymbol("btn_M_5").$("btn_5_0").hide();
         sym.getSymbol("btn_M_6").$("btn_6_0").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle0}", "mouseenter", function(sym, e) {
         
         sym.$("btn_0_2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle0}", "mouseleave", function(sym, e) {
         
         sym.$("btn_0_2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.getSymbol("btn_home").$("h2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Hide an element 
         sym.getSymbol("btn_home").$("h2").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","none");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","0.8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         //sym.$("Tranca_Adelante").show();
         window.parent.NextPage();
         sym.siguiente();
         sym.valFle();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(10);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(12);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(14);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b4}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(16);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b5}", "click", function(sym, e) {
         window.parent.GoToPageEspecific(18);

      });
      //Edge binding end

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'precargaInterna'
   (function(symbolName) {   
   
   })("precargaInterna");
   //Edge symbol end:'precargaInterna'

   //=========================================================
   
   //Edge symbol: 'f_izquierda'
   (function(symbolName) {   
   
   })("f_izquierda");
   //Edge symbol end:'f_izquierda'

   //=========================================================
   
   //Edge symbol: 'f_derecha'
   (function(symbolName) {   
   
   })("f_derecha");
   //Edge symbol end:'f_derecha'

   //=========================================================
   
   //Edge symbol: 'content'
   (function(symbolName) {   
   
   })("content");
   //Edge symbol end:'content'

   //=========================================================
   
   //Edge symbol: 'Nivel inferior'
   (function(symbolName) {   
   
   })("Nivel inferior");
   //Edge symbol end:'Nivel inferior'

   //=========================================================
   
   //Edge symbol: 'btn_home'
   (function(symbolName) {   
   
   })("btn_home");
   //Edge symbol end:'btn_home'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");