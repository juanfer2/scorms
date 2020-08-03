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
         $("#Stage_precargaInterna", window.parent.document).hide();
         window.parent.parent.SetThisPage(4);
         
         loader = new PxLoader();
         
         soundManager.setup({
         		url : 'swf/',
         		flashVersion : 9,
         		useHTML5Audio : true,
         		preferFlash : false,
         		useHighPerformance : true,
         		flashLoadTimeout : 500,
         		onready : function() {
         			loader.addSound('sonido1', 'media/page4.mp3');
         			loader.start();
         		}
         });
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18504, function(sym, e) {
         sym.stop();
         
         
         // Mostrar un elemento 
         sym.$("mc_brillo").show();
         
         sym.getSymbol("mc_brillo").play("ini");
         
         jQuery("#Stage_btn_stop").css("pointer-events","none");
         jQuery("#Stage_btn_stop").css("opacity","0.5");
         
         jQuery("#Stage_btn_play").css("pointer-events","none");
         jQuery("#Stage_btn_play").css("opacity","0.5");
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","auto");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","1");

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "click", function(sym, e) {
         sym.$("btn_play").show();
         sym.$("btn_stop").hide();
         
         sym.getSymbol("bocamale").stop("ini");
         
         sym.stop();
         
         soundManager.pauseAll();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "mouseenter", function(sym, e) {
         
         sym.getSymbol("btn_stop").$("b_stop_2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "mouseleave", function(sym, e) {
         
         sym.getSymbol("btn_stop").$("b_stop_2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_rebobinar}", "click", function(sym, e) {
         $("#Stage_precargaInterna", window.parent.document).show();
         location.reload();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_rebobinar}", "mouseenter", function(sym, e) {
         
         sym.getSymbol("btn_rebobinar").$("b_rebobinar_2").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_rebobinar}", "mouseleave", function(sym, e) {
         
         sym.getSymbol("btn_rebobinar").$("b_rebobinar_2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_play}", "click", function(sym, e) {
         sym.$("btn_play").hide();
         sym.$("btn_stop").show();
         
         sym.getSymbol("bocamale").play();
         
         sym.play();
         
         soundManager.resumeAll();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_play}", "mouseenter", function(sym, e) {
         
         sym.getSymbol("btn_play").$("b_play_2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_play}", "mouseleave", function(sym, e) {
         
         sym.getSymbol("btn_play").$("b_play_2").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.$("btn_play").hide();
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","none");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","0.8");
         
         // Ocultar un elemento 
         sym.$("l_1").hide();
         
         // Ocultar un elemento 
         sym.$("l_2").hide();
         
         // Ocultar un elemento 
         sym.$("l_3").hide();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 829, function(sym, e) {
         soundManager.play('sonido1');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18277, function(sym, e) {
         
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5579, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5915, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6636, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6868, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8481, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8801, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11424, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11734, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14137, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").stop("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("bocamale").play();

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
   
   //Edge symbol: 'btn_play'
   (function(symbolName) {   
   
   })("btn_play");
   //Edge symbol end:'btn_play'

   //=========================================================
   
   //Edge symbol: 'btn_rebibinar'
   (function(symbolName) {   
   
   })("btn_rebibinar");
   //Edge symbol end:'btn_rebibinar'

   //=========================================================
   
   //Edge symbol: 'btn_stop'
   (function(symbolName) {   
   
   })("btn_stop");
   //Edge symbol end:'btn_stop'

   //=========================================================
   
   //Edge symbol: 'btn_menu'
   (function(symbolName) {   
   
   })("btn_menu");
   //Edge symbol end:'btn_menu'

   //=========================================================
   
   //Edge symbol: 'cont'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 337, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         // Ocultar un elemento 
         sym.$("l_1").hide();
         
         // Ocultar un elemento 
         sym.$("l_2").hide();
         
         // Ocultar un elemento 
         sym.$("l_3").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").hide();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_2").hide();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_3").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77, function(sym, e) {
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         

      });
      //Edge binding end

   })("cont");
   //Edge symbol end:'cont'

   //=========================================================
   
   //Edge symbol: 'aniaudio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2307, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("aniaudio");
   //Edge symbol end:'aniaudio'

   //=========================================================
   
   //Edge symbol: 'bocamale'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("bocamale");
   //Edge symbol end:'bocamale'

   //=========================================================
   
   //Edge symbol: 'mc_Brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1361, function(sym, e) {
         // insert code here
         sym.play("sale");

      });
      //Edge binding end

   })("mc_Brillo");
   //Edge symbol end:'mc_Brillo'

   //=========================================================
   
   //Edge symbol: 'mc_brillo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("mc_brillo_1");
   //Edge symbol end:'mc_brillo_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");