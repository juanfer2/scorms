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
         window.parent.parent.SetThisPage(1);
         
         loader = new PxLoader();
         
         soundManager.setup({
         		url : 'swf/',
         		flashVersion : 9,
         		useHTML5Audio : true,
         		preferFlash : false,
         		useHighPerformance : true,
         		flashLoadTimeout : 500,
         		onready : function() {
         			loader.addSound('sonido1', 'media/page1.mp3');
         			loader.start();
         		}
         });
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "click", function(sym, e) {
         sym.$("btn_play").show();
         sym.$("btn_stop").hide();
         
         sym.getSymbol("mc_boca_hombre").stop("cero");
         
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
         
         sym.getSymbol("mc_boca_hombre").play("sale");
         
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
         $("#Stage_f_izquierda", window.parent.document).hide();
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","none");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","0.8");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1895, function(sym, e) {
         soundManager.play('sonido1', {
         onfinish : function() {
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","auto");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","1");
         sym.getSymbol("mc_boca_hombre").stop("cero");
         
         // Mostrar un elemento 
         sym.$("mc_brillo").show();
         sym.getSymbol("mc_brillo").play("ini");
         
         jQuery("#Stage_btn_stop2").css("pointer-events","none");
         jQuery("#Stage_btn_stop2").css("opacity","0.5");
         
         jQuery("#Stage_btn_play").css("pointer-events","none");
         jQuery("#Stage_btn_play").css("opacity","0.5");
         
         	}
         });

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
   
   //Edge symbol: 'f_derecha'
   (function(symbolName) {   
   
   })("f_derecha");
   //Edge symbol end:'f_derecha'

   //=========================================================
   
   //Edge symbol: 'mc_brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("mc_brillo");
   //Edge symbol end:'mc_brillo'

   //=========================================================
   
   //Edge symbol: 'brazoani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4180, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("brazoani");
   //Edge symbol end:'brazoani'

   //=========================================================
   
   //Edge symbol: 'arm'
   (function(symbolName) {   
   
   })("arm");
   //Edge symbol end:'arm'

   //=========================================================
   
   //Edge symbol: 'mc_boca_hombre_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         
         sym.play("sale");

      });
      //Edge binding end

   })("mc_boca_hombre_1");
   //Edge symbol end:'mc_boca_hombre_1'

   //=========================================================
   
   //Edge symbol: 'ani_audio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.play("sale");

      });
      //Edge binding end

   })("ani_audio");
   //Edge symbol end:'ani_audio'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");