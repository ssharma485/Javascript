'use strict';
const temperature = [3,4,-2,'error', 9,13,9];


const amplitude = function(temp){
    let max = temp[0];
    let min = temp[0];  
 for( let i = 0; i < temp.length; i++)
 {
    if(max < temp[i])
    {
        max = temp[i];
    }else if(i!== Number)
    {
       continue;
    }
    else
    {   
        
        if( min > temp[i])
        {
            min = temp[i]
        }
    }

 }
 console.log(`Maximum temp is ${max}`)
 console.log(`Minimum temp is ${min}`);
 console.log(`Amplitude is ${max - min}`)
}
amplitude(temperature);