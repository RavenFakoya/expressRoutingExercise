function validateNumbers(stringArray){

    let result = [];
    
    for(let i=0; i < stringArray.length; i++){
        let num = Number(stringArray[i]);
        
        if( Number.isNaN(num)) {
            return new Error(
                `${stringArray[i]} is not a valid number!!!`
            ); 
        }
        result.push(num);
    }
    return result;
}


function mean(arr){
    const sum =  arr.reduce((a, b) => a + b);
    return sum/(arr.length);
}

function median(arr){
    arr = arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0){
        
        let midIdx = (arr.length/2)-1;
        let median = (arr[midIdx] + arr[midIdx+1])/2;
        return median
    }else {
        let midIdx = (arr.length - 1)/2;
        let median = arr[midIdx];
        return median
    }  
}


function mode(arr){
    arr = arr.sort((a,b) => a - b);
    let counts = {}
    arr.forEach(element => {
        if(counts[element] === undefined){
            counts[element] = 0
        }
        counts[element] ++
    });

    let max = 0;
    let values = [];
    
    for(let key in counts) {
        if (counts.hasOwnProperty(key)){
            if (counts[key] > max){
                max = counts[key];
                
                values = [Number(key)];
            } else if (counts[key] === max) {
                max = counts[key];
                // console.log(typeof values)
                values.push(Number(key));
            }
        }
        
        if (values.length === Object.keys(counts).length) {
            values = "None";
        }

      
      
    }

    if(values.length === 1){
        values = values[0]
    }
    return values  
}




module.exports = { mean, median, mode, validateNumbers }