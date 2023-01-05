//  <!-- ----------js for menu---------------- -->
  
    var sm = document.getElementById("sidemenu");

    export function openmenu() {
     if(sm!="")
     {
      sm.style.right = "1px";
     }
    };
    
    export function closemenu() {
      if(sm!=null)
      {
        sm.style.right = "-200px";
      }
    };


   
   
  