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
         window.parent.parent.SetThisPage(3);
         
         pop1 = false;
         pop2 = false;
         pop3 = false;
         
         loader = new PxLoader();
         
         soundManager.setup({
         		url : 'swf/',
         		flashVersion : 9,
         		useHTML5Audio : true,
         		preferFlash : false,
         		useHighPerformance : true,
         		flashLoadTimeout : 500,
         		onready : function() {
         			loader.addSound('sonido1', 'media/page3.mp3');
         			loader.start();
         		}
         });
         
         
         sym.validar = function(){
         	if (pop1 == true && pop2 == true && pop3 == true ) {
         		// Mostrar un elemento 
         		// Mostrar un elemento 
         		sym.$("mc_brillo").show();
         		sym.getSymbol("mc_brillo").play("ini");
         
         		jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","auto");
         		jQuery("#Stage_f_derecha",window.parent.document).css("opacity","1");
         
         	} 
         }

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34675, function(sym, e) {
         sym.stop();
         
         jQuery("#Stage_btn_stop").css("pointer-events","none");
         jQuery("#Stage_btn_stop").css("opacity","0.5");
         
         jQuery("#Stage_btn_play").css("pointer-events","none");
         jQuery("#Stage_btn_play").css("opacity","0.5");

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "click", function(sym, e) {
         sym.$("btn_play").show();
         sym.$("btn_stop").hide();
         
         sym.getSymbol("boca").stop("ini");
         
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
         
         sym.getSymbol("boca").play();
         
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

      Symbol.bindElementAction(compId, symbolName, "${bt_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("l_1").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("l_2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("l_3").play();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         soundManager.play('sonido1');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34348, function(sym, e) {
         
         sym.getSymbol("bocamale").stop("ini");
         

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
   
   //Edge symbol: 'bt_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 148, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_1_ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

   })("bt_1");
   //Edge symbol end:'bt_1'

   //=========================================================
   
   //Edge symbol: 'bt_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 166, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_2_ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
      //Edge binding end

   })("bt_2");
   //Edge symbol end:'bt_2'

   //=========================================================
   
   //Edge symbol: 'bt_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 136, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_3_ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
      //Edge binding end

   })("bt_3");
   //Edge symbol end:'bt_3'

   //=========================================================
   
   //Edge symbol: 'l_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 634, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pop1 = true;
         sym.getComposition().getStage().validar();
         sym.playReverse();
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 574, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_2").hide();
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_3").hide();

      });
      //Edge binding end

   })("l_1");
   //Edge symbol end:'l_1'

   //=========================================================
   
   //Edge symbol: 'l_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 634, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.playReverse();
         pop2 = true;
         sym.getComposition().getStage().validar();
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 574, function(sym, e) {
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").hide();
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_3").hide();

      });
      //Edge binding end

   })("l_2");
   //Edge symbol end:'l_2'

   //=========================================================
   
   //Edge symbol: 'l_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 634, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.playReverse();
         pop3 = true;
         sym.getComposition().getStage().validar();
         sym.getComposition().getStage().getSymbol("cont").playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 574, function(sym, e) {
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_2").hide();
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").hide();

      });
      //Edge binding end

   })("l_3");
   //Edge symbol end:'l_3'

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
   
   //Edge symbol: 'boca'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3677, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("boca");
   //Edge symbol end:'boca'

   //=========================================================
   
   //Edge symbol: 'bocamale'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2806, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("bocamale");
   //Edge symbol end:'bocamale'

   //=========================================================
   
   //Edge symbol: 'mc_brillo_1'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1404, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("mc_brillo_1");
   //Edge symbol end:'mc_brillo_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");