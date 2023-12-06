// function equalTo100(num1, num2) {
//           if (num1 == 100 || num2 == 100) {
//                     return true
//           } else if ((num1 + num2) == 100) {
//                     return true
//           }
// }
// let x = equalTo100(100, 1)
// console.log(x)


//Q.1
// using arrow function
// const equalTo100= (num1,num2)=>num1===100 || num2===100 || (num1+num2) ===100
// console.log(equalTo100(10,90))



//Q2. to find the extension name of a file
const extansion = filenme=>filenme.split(".")[filenme.split(".").length-1]
console.log(extansion("dvcsdm.cv.hbs.js"))
// const extansion = filename=> filename.slice(filename.lastIndexOf("."))
// console.log(extansion("dvcsdmcv.jgchjgv.hbs"))



//Q3. write a programme to replace every char of the string with the next char
// const changesStr = (str)=>{
//           let alphArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//           let newStr = str.split("").map((char)=>{
//                     return alphArr[alphArr.indexOf(char)+1]
//           }).join("")
// return newStr
// }
// console.log(changesStr('hello'))
// const changedStr = str=> str.split("").map(char=>String.fromCharCode(char.charCodeAt(0)+1)).join("")
// console.log(changedStr('abcde'))


//Q.5
//  const formatDate = ()=>{
//           const date = new Date()
//           const day = date.getDate()
//           const month = date.getMonth()
//           const year = date.getFullYear()
//          return [day,month,year].join("/")
//  }
//  console.log(formatDate())

// //Q. 6
// const newStr = str => str.indexOf("New!") === 0 ? str : "New!" + " " + str

// console.log(newStr('New hello'))