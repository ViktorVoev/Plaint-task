function sequence(arr){

    let resultArr = [];
    let resultSum = 0;
    if (arr.length < 3) {
        return console.log('error');
    } 
        for(let i=0; i<arr.length; i++) {
            let current = arr[i]
            let next = arr[i+1];
            let afterNext = arr[i+2]
            if (current !== undefined && next !== undefined && afterNext !== undefined) {
                if (current + next + afterNext >= resultSum) {
                    resultArr = []
                    resultArr.push(current)
                    resultArr.push(next)
                    resultArr.push(afterNext)
                    resultSum = current + next + afterNext;
                } 
            }
        }
    
    console.log(`[${resultArr.join(', ')}], sum: ${resultSum}`);

    
};
sequence([11, 14, 10, 12]);