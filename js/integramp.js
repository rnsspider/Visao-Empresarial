(function() {
    function $MPC_load() {
       window.$MPC_loaded !== true && (function() {
       var s = document.createElement("script");
       s.type = "text/javascript";
       s.async = true;
       s.src = document.location.protocol + "//secure.mlstatic.com/mptools/render.js";
       var x = document.getElementsByTagName('script')[0];
       x.parentNode.insertBefore(s, x);
       window.$MPC_loaded = true;
    })();
 }
 window.$MPC_loaded !== true ? (window.attachEvent ? window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;
 })();
/*
      // to receive event with message when closing modal from congrants back to site
      function $MPC_message(event) {
        // onclose modal ->CALLBACK FUNCTION
       // !!!!!!!!FUNCTION_CALLBACK HERE Received message: {event.data} preapproval_id !!!!!!!!
      }
      window.$MPC_loaded !== true ? (window.addEventListener("message", $MPC_message)) : null; 
      */