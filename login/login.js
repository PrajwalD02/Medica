document.querySelector("#form").addEventListener("submit", mybtn1)
   
 
function mybtn1(){
  event.preventDefault()
     let num=document.querySelector("#num").value
     
     if(num==""){
         alert("Plesae enter 10 digit mobile number");
         return false;
     }
 
     if(isNaN(num)){
         alert("Enter only digit")
         return false;
     }
     if(num.length<10){
         alert("Invalid mobile number !")
         return false;
     }
     if(num.length>10){
        alert("Invalid mobile number !")
        return false;
    }
     if((num.charAt(0)!=9) && (num.charAt(0)!=8) && (num.charAt(0)!=7) && (num.charAt(0)!=6)){
         alert("Please enter a valid mobile number");
         return false;
     }

     else{
         window.location.href="/login/otp.html"
         return true;


     }
  
}
