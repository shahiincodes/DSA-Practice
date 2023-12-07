const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((element) => {
          // Your mapping logic that may return undefined

          // For example, let's say we return undefined for even numbers
          if (element % 2 === 0) {
                    return undefined;
          }

          // Your actual mapping logic here
          return element * 2;
});
// console.log("newArray",newArray)

// Filter out undefined values using Boolean constructor
// const filteredArray = newArray.filter(Boolean);

const filteredArray = newArray.filter((elm)=>elm!==undefined)
console.log(filteredArray);
