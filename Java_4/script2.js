// function calculate(a,b){
//     let calculates = a +b;
//     return calculates;
// }
// let a = parseInt(prompt());
// let b = parseInt(prompt());
// let result = calculate(a,b);
// console.log(`Total = ${result}`);


function findMax(arr){
    let i=0;
    let maxVarr=arr[0];
    while(i<arr.length){
        if(arr[i]>maxVarr){
            maxVarr = arr[i];
        }
        i++;
    }
    return maxVarr;
}
console.log(findMax([1,2,3,4,5]));