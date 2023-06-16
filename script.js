// Array ... ik hi type ki cheezon k liay used huta hy.. array k liay sqaure barkets used krty hain []..
// array k andar hum index ko ki value "0" sy start huta hy or 
// // agy agy jama huta jata hy... jeasy k "january" ki value 0 hy or december ki value 11 hy


// let month = ["january", "February", "March", "April"];
// month [4] = "May"; // this mothed not used 
//   let shouldStore = prompt("Should i used array value?")
// if(shouldStore === "yes"){
//     month.push("May");
// }


let month = ["january", "February", "sep", "March", "April"];

month.shift(); // remove 1st value

month.unshift("Jan"); // Add value on 1st index

month.push("jun"); // Add value on last 1 index
 
    month.pop(); // remove value on last
    month, length // Tells the quantity of value

    month.splice(2, 1, "June", "July", "August"); //  Remove or replace value

    month.slice(); // Provide a new copy of array

let newArray = month.slice(0, 3)


console.log(month);

console.log(newArray);



let arr = [ 1, 2, 3, 4, 5,];
// arr.forEach // loops through arrays values
arr.forEach(function (val, index, arr) {
    
    console.log(index, val, arr);
});

//// arr.filter()

let arry = [ 1, 2, 3, 4, 5];

let filterArry  = arry.filter(function (valu) {
 return valu % 2 === 0;   //// nichy waly kam k vijay hum sirf yh b istimal kr skty hain
//  if (valu % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
 })

console.log(filterArry, arry);


/// arry.sort()

let arry1 = [ 1, 2, 3, 4, 5, 10, 6, 11];
let sortedArry = arry1.sort(function (a, b) {
    if( a > b){
        return 1;
    }
    else{
        return -1;
    }
})


console.log(sortedArry);

//// reduce 







