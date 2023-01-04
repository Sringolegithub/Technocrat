//  <!-- ----------js for menu---------------- -->
  
    var sm = document.getElementById("sidemenu");

    export function openmenu() {
     if(sm!=null)
     {
      sm.style.right = 0;
     }
    };
    
    export function closemenu() {
      if(sm!=null)
      {
        sm.style.right = "-240px";
      }
    };


   
   
  