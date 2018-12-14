// 2.22 - snippet of code that measures the time passed 
//        using console.time and console.timeEnd functions.

console.time('timer');
setTimeout(function(){
   console.timeEnd('timer');
},1000)


/*
Output:
timer: 1002.393ms
timer: 1001.232ms
*/
