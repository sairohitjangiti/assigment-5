 // IIFE function
 (function(){
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
 console.log(nums);
})();
