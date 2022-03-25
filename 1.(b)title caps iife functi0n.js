 //IIFE function
   (function(){
   let str=("hello world".toLowerCase().split(" "));

 for (let i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 }
 console.log(str.join(" "));
})();
