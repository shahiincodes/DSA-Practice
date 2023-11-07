const developer1 = {
          name: 'Habib',
          lag:{
                    a:'Node.js',
                    b:"Express.js",
                    c:"Mongodb",
                    d:"React.js",
                    e:"Redux"
          }
}

// let developer2 = developer1
// developer2.name = 'Shahin'
// console.log(developer1)
// let developer2 = {...developer1}
// developer2.lag.d = "Angular"
// console.log(developer1)

//Deep copy
let developer2 = JSON.parse(JSON.stringify(developer1))
developer2.lag.a = 'Python'
console.log(developer2)
console.log(developer1);
