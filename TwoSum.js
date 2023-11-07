function TwoSum (arr,target){
for (let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[i]+arr[j]==target){
            return [i,j]
        }
    }
    
}

}
let arrrrr=[1,2,3,4,45,6,7,8,9,11]
const res = TwoSum(arrrrr,48)
console.log(res)