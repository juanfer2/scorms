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
         window.parent.parent.SetThisPage(8);
         
         loader = new PxLoader();
         
         soundManager.setup({
         		url : 'swf/',
         		flashVersion : 9,
         		useHTML5Audio : true,
         		preferFlash : false,
         		useHighPerformance : true,
         		flashLoadTimeout : 500,
         		onready : function() {
         			loader.addSound('sonido1', 'media/page8.mp3');
         			loader.start();
         		}
         });
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11567, function(sym, e) {
         sym.stop();
         
         
         sym.getSymbol("sombra1").play("ini");
         
         
         jQuery("#Stage_b2").css("pointer-events","none");
         jQuery("#Stage_b2").css("opacity","0.3");
         
         jQuery("#Stage_b3").css("pointer-events","none");
         jQuery("#Stage_b3").css("opacity","0.3");
         
         jQuery("#Stage_b4").css("pointer-events","none");
         jQuery("#Stage_b4").css("opacity","0.3");
         
         jQuery("#Stage_b5").css("pointer-events","none");
         jQuery("#Stage_b5").css("opacity","0.3");
         
         jQuery("#Stage_b6").css("pointer-events","none");
         jQuery("#Stage_b6").css("opacity","0.3");
         
         jQuery("#Stage_b7").css("pointer-events","none");
         jQuery("#Stage_b7").css("opacity","0.3");
         
         jQuery("#Stage_b8").css("pointer-events","none");
         jQuery("#Stage_b8").css("opacity","0.3");

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_stop}", "click", function(sym, e) {
         sym.$("btn_play").show();
         sym.$("btn_stop").hide();
         
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
         jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","none");
         jQuery("#Stage_f_derecha",window.parent.document).css("opacity","0.8");
         
         // Ocultar un elemento 
         sym.$("visto").hide();
         sym.$("visto2").hide();
         sym.$("visto3").hide();
         sym.$("visto4").hide();
         sym.$("visto5").hide();
         sym.$("visto6").hide();
         sym.$("visto7").hide();
         sym.$("visto8").hide();
         
         
         sym.$("l_1").hide();
         sym.$("l_2").hide();
         sym.$("l_3").hide();
         sym.$("l_4").hide();
         sym.$("l_5").hide();
         sym.$("l_6").hide();
         sym.$("l_7").hide();
         sym.$("l_8").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b1").$("_1ov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b1").$("_1ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "click", function(sym, e) {
         c1 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("sombra1").hide();
         
         sym.getSymbol("l_1").play();
         
         // Ocultar un elemento 
         sym.$("b1").hide();
         
         // Mostrar un elemento 
         sym.$("visto").show();
         
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "click", function(sym, e) {
         c2 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("b2").hide();
         
         // Ocultar un elemento 
         sym.$("sombra2").hide();
         
         sym.getSymbol("l_2").play();
         
         // Mostrar un elemento 
         sym.$("visto2").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "click", function(sym, e) {
         c3 = true;
         //
         sym.validar();
         sym.getSymbol("l_3").play();
         
         // Ocultar un elemento 
         sym.$("b3").hide();
         
         // Ocultar un elemento 
         sym.$("sombra3").hide();
         
         // Mostrar un elemento 
         sym.$("visto3").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b4}", "click", function(sym, e) {
         c4 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("sombra4").hide();
         
         // Ocultar un elemento 
         sym.$("b4").hide();
         
         sym.getSymbol("l_4").play();
         
         
         // Mostrar un elemento 
         sym.$("visto4").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b5}", "click", function(sym, e) {
         c5 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("sombra5").hide();
         
         // Ocultar un elemento 
         sym.$("b5").hide();
         
         sym.getSymbol("l_5").play();
         
         // Mostrar un elemento 
         sym.$("visto5").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b6}", "click", function(sym, e) {
         c6 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("b6").hide();
         
         // Ocultar un elemento 
         sym.$("sombra6").hide();
         
         sym.getSymbol("l_6").play();
         
         
         // Mostrar un elemento 
         sym.$("visto6").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b7}", "click", function(sym, e) {
         c7 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("sombra7").hide();
         
         // Ocultar un elemento 
         sym.$("b7").hide();
         
         sym.getSymbol("l_7").play();
         
         
         // Mostrar un elemento 
         sym.$("visto7").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b8}", "click", function(sym, e) {
         c8 = true;
         //
         sym.validar();
         
         // Ocultar un elemento 
         sym.$("sombra8").hide();
         
         // Ocultar un elemento 
         sym.$("b8").hide();
         
         sym.getSymbol("l_8").play();
         
         
         // Mostrar un elemento 
         sym.$("visto8").show();
         sym.getSymbol("mc_brillo2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b2").$("_2pv").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b3").$("_3ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b4}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b4").$("_4ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b5}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b5").$("_5ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b6}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b6").$("_6ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b7}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b7").$("_7ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b8}", "mouseout", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b8").$("finov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b2").$("_2pv").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b3").$("_3ov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b4}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b4").$("_4ov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b5}", "mouseover", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbol("b5").$("_5ov").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b6}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b6").$("_6ov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b7}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b7").$("_7ov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b8}", "mouseover", function(sym, e) {
         
         // Mostrar un elemento 
         sym.getSymbol("b8").$("finov").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto}", "click", function(sym, e) {
         sym.getSymbol("l_1").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_1").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto2}", "click", function(sym, e) {
         sym.getSymbol("l_2").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto3}", "click", function(sym, e) {
         sym.getSymbol("l_3").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto4}", "click", function(sym, e) {
         sym.getSymbol("l_4").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_4").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto5}", "click", function(sym, e) {
         sym.getSymbol("l_5").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_5").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto6}", "click", function(sym, e) {
         sym.getSymbol("l_6").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_6").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto7}", "click", function(sym, e) {
         sym.getSymbol("l_7").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_7").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto8}", "click", function(sym, e) {
         sym.getSymbol("l_8").play();
         
         sym.getSymbol("cont").play();
         
         // Mostrar un elemento 
         sym.$("l_8").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         soundManager.play('sonido1');

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         c1 = false; 
         c2 = false; 
         c3 = false; 
         c4 = false; 
         c5 = false; 
         c6 = false; 
         c7 = false; 
         c8 = false; 
         
         sym.validar = function(){
         	if (c1 == true && c2 == true && c3 == true && c4 == true && c5 == true && c6 == true && c7 == true && c8 == true) {
         
         		// Mostrar un elemento 
         		sym.$("mc_brillo2").show();
         		
         		jQuery("#Stage_f_derecha",window.parent.document).css("pointer-events","auto");
         		jQuery("#Stage_f_derecha",window.parent.document).css("opacity","1");
         
         		sym.getSymbol("mc_brillo2").play("sale");
         		jQuery("#Stage_btn_stop").css("pointer-events","none");
         		jQuery("#Stage_btn_stop").css("opacity","0.5");
         
         		jQuery("#Stage_btn_play").css("pointer-events","none");
         		jQuery("#Stage_btn_play").css("opacity","0.5");
         		$("#Stage_f_derecha", window.parent.document).show();
         	} 
         }

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
   
   //Edge symbol: 'b1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b1");
   //Edge symbol end:'b1'

   //=========================================================
   
   //Edge symbol: 'b2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2pv}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b2");
   //Edge symbol end:'b2'

   //=========================================================
   
   //Edge symbol: 'b3'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b3");
   //Edge symbol end:'b3'

   //=========================================================
   
   //Edge symbol: 'b4'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_4").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_4ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_4").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b4");
   //Edge symbol end:'b4'

   //=========================================================
   
   //Edge symbol: 'b5'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_5").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_5ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_5").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b5");
   //Edge symbol end:'b5'

   //=========================================================
   
   //Edge symbol: 'b6'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_6").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_6ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_6").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

      

   })("b6");
   //Edge symbol end:'b6'

   //=========================================================
   
   //Edge symbol: 'b7'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_7").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_7ov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_7").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b7");
   //Edge symbol end:'b7'

   //=========================================================
   
   //Edge symbol: 'b8'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${fin}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_8").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${finov}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_8").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
      //Edge binding end

      

   })("b8");
   //Edge symbol end:'b8'

   //=========================================================
   
   //Edge symbol: 'l1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b2").css("pointer-events","auto");
         jQuery("#Stage_b2").css("opacity","1");
         
         sym.getComposition().getStage().getSymbol("sombra2").play("ini");
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_1");
   //Edge symbol end:'l_1'

   //=========================================================
   
   //Edge symbol: 'cont'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77, function(sym, e) {
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_1").show();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         // Ocultar un elemento 
         sym.getComposition().getStage().$("l_3").show();
         sym.getComposition().getStage().$("l_4").show();
         sym.getComposition().getStage().$("l_5").show();
         sym.getComposition().getStage().$("l_6").show();
         sym.getComposition().getStage().$("l_7").show();
         sym.getComposition().getStage().$("l_8").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("cont");
   //Edge symbol end:'cont'

   //=========================================================
   
   //Edge symbol: 'l1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b3").css("pointer-events","auto");
         jQuery("#Stage_b3").css("opacity","1");
         
         sym.getComposition().getStage().getSymbol("sombra3").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b4").css("pointer-events","auto");
         jQuery("#Stage_b4").css("opacity","1");
         
         
         sym.getComposition().getStage().getSymbol("sombra4").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_3");
   //Edge symbol end:'l_3'

   //=========================================================
   
   //Edge symbol: 'l_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b5").css("pointer-events","auto");
         jQuery("#Stage_b5").css("opacity","1");
         
         
         sym.getComposition().getStage().getSymbol("sombra5").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_4");
   //Edge symbol end:'l_4'

   //=========================================================
   
   //Edge symbol: 'l_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b6").css("pointer-events","auto");
         jQuery("#Stage_b6").css("opacity","1");
         
         
         sym.getComposition().getStage().getSymbol("sombra6").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_5");
   //Edge symbol end:'l_5'

   //=========================================================
   
   //Edge symbol: 'l_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b7").css("pointer-events","auto");
         jQuery("#Stage_b7").css("opacity","1");
         
         
         sym.getComposition().getStage().getSymbol("sombra7").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_6");
   //Edge symbol end:'l_6'

   //=========================================================
   
   //Edge symbol: 'l_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         jQuery("#Stage_b8").css("pointer-events","auto");
         jQuery("#Stage_b8").css("opacity","1");
         
         
         sym.getComposition().getStage().getSymbol("sombra8").play("ini");
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_1").hide();
         sym.getComposition().getStage().$("l_8").hide();

      });
      //Edge binding end

   })("l_7");
   //Edge symbol end:'l_7'

   //=========================================================
   
   //Edge symbol: 'l_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.playReverse();
         
         
         sym.getComposition().getStage().getSymbol("cont").playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 442, function(sym, e) {
         sym.getComposition().getStage().$("l_2").hide();
         sym.getComposition().getStage().$("l_3").hide();
         sym.getComposition().getStage().$("l_4").hide();
         sym.getComposition().getStage().$("l_5").hide();
         sym.getComposition().getStage().$("l_6").hide();
         sym.getComposition().getStage().$("l_7").hide();
         sym.getComposition().getStage().$("l_1").hide();

      });
      //Edge binding end

   })("l_8");
   //Edge symbol end:'l_8'

   //=========================================================
   
   //Edge symbol: 'b2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 123, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         
         
         sym.getComposition().getStage().getSymbol("cont").play();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2pv}", "click", function(sym, e) {
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         sym.getComposition().getStage().getSymbol("cont").play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${visto}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getComposition().getStage().getSymbol("l_2").play();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("l_2").show();
         
         

      });
         //Edge binding end

      })("b2_1");
   //Edge symbol end:'b2_1'

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2416, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 337, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 469, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 569, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 737, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 819, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("mc_brillo");
   //Edge symbol end:'mc_brillo'

   //=========================================================
   
   //Edge symbol: 'cont_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 555, function(sym, e) {
         
         sym.stop();

      });
         //Edge binding end

      })("cont_1");
   //Edge symbol end:'cont_1'

   //=========================================================
   
   //Edge symbol: 'sombras'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1631, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("sombras");
   //Edge symbol end:'sombras'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");