/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
alert('asdf');
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


console.log(SCOGetValue("cmi.core.student_id"));