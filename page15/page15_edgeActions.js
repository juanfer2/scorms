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
         window.parent.parent.SetThisPage(15);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "click", function(sym, e) {
         sym.$("btn_play").show();
         sym.$("btn_stop").hide();
         sym.getSymbol("muneco").getSymbol("cabeza2").getSymbol("boca").stop(1);
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
         sym.getSymbol("muneco").getSymbol("cabeza2").getSymbol("boca").play(1);
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
         $("#Stage_f_derecha", window.parent.document).show();
         jQuery("#Stage_f_derecha").css("pointer-events","none");
         jQuery("#Stage_f_derecha").css("opacity","0.5");
         sym.getSymbol("muneco").getSymbol("cabeza2").getSymbol("boca").stop(1);
         
         $("#Stage_b1", window.parent.document).show();
         $("#Stage_b2", window.parent.document).show();
         $("#Stage_b3", window.parent.document).show();
         $("#Stage_b4", window.parent.document).show();
         $("#Stage_b5", window.parent.document).hide();
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1335, function(sym, e) {
         
         sym.stop();
         
         jQuery("#Stage_f_derecha").css("pointer-events","auto");
         jQuery("#Stage_f_derecha").css("opacity","1");
         
         jQuery("#Stage_btn_stop").css("pointer-events","none");
         jQuery("#Stage_btn_stop").css("opacity","0.5");
         
         jQuery("#Stage_btn_play").css("pointer-events","none");
         jQuery("#Stage_btn_play").css("opacity","0.5")

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
   
   //Edge symbol: 'mc_brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.play("sale");

      });
      //Edge binding end

   })("mc_brillo");
   //Edge symbol end:'mc_brillo'

   //=========================================================
   
   //Edge symbol: 'btn_menu'
   (function(symbolName) {   
   
   })("btn_menu");
   //Edge symbol end:'btn_menu'

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
   
   //Edge symbol: 'mc_brillo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2055, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("mc_brillo_1");
   //Edge symbol end:'mc_brillo_1'

   //=========================================================
   
   //Edge symbol: 'mc_brillo_1_1'
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

   })("mc_brillo_1_1");
   //Edge symbol end:'mc_brillo_1_1'

   //=========================================================
   
   //Edge symbol: 'contenedor'
   (function(symbolName) {   
   
   })("contenedor");
   //Edge symbol end:'contenedor'

   //=========================================================
   
   //Edge symbol: 'muneco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3695, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("muneco");
   //Edge symbol end:'muneco'

   //=========================================================
   
   //Edge symbol: 'cabeza'
   (function(symbolName) {   
   
   })("cabeza");
   //Edge symbol end:'cabeza'

   //=========================================================
   
   //Edge symbol: 'ojos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3333, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("ojos");
   //Edge symbol end:'ojos'

   //=========================================================
   
   //Edge symbol: 'boca'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 823, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("boca");
   //Edge symbol end:'boca'

   //=========================================================
   
   //Edge symbol: 'sombra2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("sombra2");
   //Edge symbol end:'sombra2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");