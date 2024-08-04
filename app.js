





//                                                    closure

// function abc(){
//     let abc="";
//     function xyz(){
//         let xyz;
//         abc
//         function nana() {
//             abc 
//             xyz
//         }
//     }
// }


//                                                   destructuring;

// let onj ={
//     name:"areeb",
//     clas:"5",
//     section:"c"
//    }

//    let {name,section,clas} = onj;
//    console.log(name)
//    console.log(name,clas)
//    console.log(section)



// let array=["areeb","ahmed","osaja"];
// let [a,b,c]=array;
// console.log(a,b,c);



//                                                  defult parametr

// function abc(a="not available"){
// console.log(a)
// }
// abc( argument="helo word") if argument is not defined then a will console


// //                                                 rest parametr

// function abc(a="not available",...rest){
// console.log(a)
// console.log(rest)
// }
// abc("helo word","areeb","osaja")


// // //                                             Spread operator

// let array1=[1,2,3,4,5];
// let array2=[6,7,8,9];
// let merge=[...array1,...array2];
// console.log(merge)

// let studentInfo={
//     name:"areeb",
//     email:"zaidiareeb32@gmail.com",

// }
// let schoolInfo={
//     scoolName:"IHA",
//     Scoolemail:"Iha@gmail.com",

// }

// let merge={...schoolInfo,...studentInfo};
// console.log(merge)


// // //                                         Enhanced object literals

// dont need to defined keys in objects. the key will veplacle with variable name

// let stdName="areeb";
// let school="IHA";

// let student={
//     stdName,
//     school
// }

// console.log(student)

 
// // //                                       optional Chaining Operators 

// helping not generating error if error replace with undefined 

// let obj={
//     name :"areeb",
//     scool:[1,23,4]
// }
// console.log(obj?.scool[1]?.name?.hle);



// // //                                             CALL BACK
// {
// function abc(cb) {
//     setTimeout(() => {
//         console.log("helo im besy");
//         cb();
//     }, 5000);
// }

// function xyz() {
//     setTimeout(() => {
//         console.log("heloo");
//     }, 1000);
// }
// abc(xyz)

// }


// some method

// let array =["karachi","islamabad","india","aus"];
// array.forEach(function(city,i){
//     console.log(city,i)
// } for Each function first para metre recieve city and second number and third whole array



// let result = array.map(function (elem,i) {
//     return` ${elem},pakistan `
// })
// console.log(result) same as for each but return new array 


let arr =[
    {name:"areeb",age:18,fee:555},{name:"osaja",age:17,fee:566},{name:"akbr",age:24,fee:784}]

// let result=arr.filter(function (elem) {
// return elem.age>=18   
// })
// console.log(result)
// filter do loop . find and then return multiple elem or i on bases of condition 


// let result=arr.find(function (elem) {
// return elem.age>=18   
// })
// console.log(result)
// find is same as filter but return only one elem on the base of condition


// let result=arr.some(function (elem) {
// return elem.age>=18   
// })
// console.log(result)
// some return true if elem found,false if not found



// let result=arr.reduce(function (a,elem) {
// return a + elem.fee   
// },0)
// console.log(result)

// reduce parameter a has defult value after calculation return the value in para a .. mainly use for sum total
