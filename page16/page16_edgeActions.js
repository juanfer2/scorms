/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var nFindAPITries = 0;
var API = null;
 function FindAPI(win) {
   while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
      nFindAPITries ++;
      if (nFindAPITries > 500) {
         alert("Error in finding API -- too deeply nested.");
         return null
      }
      win = win.parent
   }
      return win.API
 }


 function init() {
   if ((window.parent) && (window.parent != window)){
      API = FindAPI(window.parent)
   }
   if ((API == null) && (window.opener != null)){
      API = FindAPI(window.opener)
   }
   if (API == null) {
      alert("No API adapter found")
   } else {
      API.LMSInitialize("")
   }
 }


 init();

var user_id = API.LMSGetValue('cmi.core.student_id');


(function($, Edge, compId){
   var iframe = ''+
   '<iframe class="my_iframe" src="https://test-sao.firebaseapp.com/accounting/provisions?userid='+user_id+'" if="my_iframe" marginwidth="0" marginheight="0" name="ventana_iframe" scrolling="no" border="0"  frameborder="0" width="700" height="500"> '+
   '</iframe> '+
'';
 $('#root').html(iframe);
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      
      
        

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("#Stage_precargaInterna", window.parent.document).hide();
         window.parent.parent.SetThisPage(16);
         
         loader = new PxLoader();
         
         soundManager.setup({
         		url : 'swf/',
         		flashVersion : 9,
         		useHTML5Audio : true,
         		preferFlash : false,
         		useHighPerformance : true,
         		flashLoadTimeout : 500,
         		onready : function() {
         			loader.addSound('sonido1', 'media/page16.mp3');
         			loader.start();
         		}
         });

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19184, function(sym, e) {
         sym.stop();
         
         jQuery("#Stage_f_derecha").css("pointer-events","auto");
         jQuery("#Stage_f_derecha").css("opacity","1");
         
         // Mostrar un elemento 
         sym.$("mc_brillo").show();
         
         sym.getSymbol("mc_brillo").play("ini");
         
         jQuery("#Stage_btn_stop").css("pointer-events","none");
         jQuery("#Stage_btn_stop").css("opacity","0.5");
         
         jQuery("#Stage_btn_play").css("pointer-events","none");
         jQuery("#Stage_btn_play").css("opacity","0.5")

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
         $("#Stage_f_derecha", window.parent.document).show();
         $("#Stage_contenedor").load('html/_F_Contabilidad_Sesion4.html');
         jQuery("#Stage_f_derecha").css("pointer-events","none");
         jQuery("#Stage_f_derecha").css("opacity","0.5");
         $("#Stage_b1", window.parent.document).hide();
         $("#Stage_b2", window.parent.document).hide();
         $("#Stage_b3", window.parent.document).hide();
         $("#Stage_b4", window.parent.document).hide();
         $("#Stage_b5", window.parent.document).hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 305, function(sym, e) {
         soundManager.play('sonido1');

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1944, function(sym, e) {
         // introducir código aquí
         sym.play("ini");

      });
      //Edge binding end

   })("bocamale");
   //Edge symbol end:'bocamale'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2530226574");