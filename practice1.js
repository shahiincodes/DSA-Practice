// let x=10
// let y=x++ //x is assigned to y and then x is incremented by 1
// let c=++x // x ix first incremented and then assigned to c
// console.log(x) //12
// console.log("first",y) // first 10
// console.log("scnd", c); //secnd 12

// Promises are objects in javascript to handle asynchronous code
// const promise = new Promise((resolve, reject) => {
//   let a = 2;
//   b = 3;
//   if (a + b == 6) {
//     const person = {name:'shahin'}
//     resolve(person);
//   } else {
//     const err = {error:"sgcdvjshbc"}
//     reject(err);
//   }
// });

// promise.then((val)=>{
// console.log(val)
// }).catch((val)=>{
// console.log(val)
// }).finally(()=>{
//     console.log("in the finaly")
// })


const p1 = Promise.resolve('hello')
p1.then((val)=>{
  console.log(val)
  return 'Shahin'
}).then((val)=>{
  console.log(val)
  return 'Good morning'
}).then((val)=>console.log(val))


