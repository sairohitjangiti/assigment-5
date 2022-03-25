//anonymous function
 const palindrome=function(){
    var myArray = ['dad', 'cecarar', 'honda', 'malayalam'];   
   var b = myArray.filter(function(c,d,f){
   var Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( myArray[d] );
   }
   });
   }; palindrome();
   
