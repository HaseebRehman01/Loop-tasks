// Task 1
// var twoDArray = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(twoDArray)
// // task 2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// task 1

// for (var i = 0 ; i <= 5 ; i++){
//     console.log(i)
// }

// task 2
// for (var i = 1 ; i <= 10 ; i++){
//     console.log(i)}

// task 3
// var number = prompt("Enter any number ")
// var length = prompt("Enter length")
// for (var i = 1 ;i<=length ;i++){
//     console.log(number +" x " +i +" = " +number*i)
// }

// task 4
// var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for (var i = 0 ; i<a.length ; i++)
// {
//     console.log(a[i])
// }



// task 5 
//   var fruits = ["apple", "banana", "mango","orange", "strawberry"]
//   for (var i =0; i<fruits.length ; i++){
//     console.log(fruits[i])
//   }
//   for (var j = 0 ; j<fruits.length ; j++){
//     console.log("Element at index  " + fruits.indexOf(fruits[j]) +" is "+ fruits[j])
//   }

// task 6
// var arr = []
// var a = prompt("Enter number of items ")
// var b = prompt("Enter value for Index 0")
// var c = prompt("Enter value for index 1 ")
// var d = prompt("Enter value for index 2")
// var e = prompt("Enter value for index 3")

// var arr =[b.split(),c.split(),d.split(),e.split()]
// document.write("Number of items : "+a+" <br>")
// document.write("Items:"+"<br>")

// document.write(arr[0]+"<br>")
// document.write(arr[1]+"<br>")
// document.write(arr[2]+"<br>")
// document.write(arr[3]+"<br>")



// // Get the number of items from the user
// var N = parseInt(prompt("Enter the number of items:"));

// // Check if N is a valid number
// if (isNaN(N) || N <= 0) {
//     alert("Please enter a valid positive number.");
// } else {
//     // Initialize an empty array
//     var array = [];

//     // Use a loop to fill the array with user input
//     for (var i = 0; i < N; i++) {
//         var item = prompt("Enter item " + (i+1) +  + ":");
//         array.push(item);
//     }

//     // Display the array
//     console.log("Array contents:");
//     console.log(array);
// document.write("Number of items : "+N+" <br>")
// document.write("Items:"+"<br>")
//     document.write(array[0]+"<br>")
// document.write(array[1]+"<br>")
// document.write(array[2]+"<br>")
// document.write(array[3]+"<br>")
// }


// task 7
// for (var i =1 ;i<16;i++)
// {console.log(i)}

// for (var i =10;i>0;i--){
//     console.log(i)
// }
// for (var i =0; i<21 ; i+=2)
// {
//     console.log(i)
// }
// // qka teh 1 sa shroo hua

// for (var i =1; i<=19 ; i+=2)
// {
//     console.log(i)
// }
// for (var i =2 ; i<= 20; i+=2)
// {
//     console.log(i+"k")
// }

// task 8
// var found = false
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Enter what sweet do yo want")
// var cakeFound = false     // flag
// for (var i =0 ; i <a.length;i++){

//     console.log(a[i])
//     if(a[i]===b){

//     cakeFound = true// flag
//     alert("yes "+ b +" is avialable at "+ i + ' index' )
//     // "Here else running four times to control this problem we use"
//     // alert("yes " +a[i]+" is available at " + i +" index")
//     }
 
// }
// if(cakeFound=== false){// flag
//     alert("No "+ b +" is not available")
// }

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// for (var i =0 ; i<students.length ; i++){
//  console.log(students[i])
// for(var j =0; j<scores.length;j++){

// console.log(scores[j])

//    }
// }
// task 9
// var a  = [24, 53, 78, 91, 12]
// var compare = a[0]
// for (var i = 0 ; i<a.length;i++){
//     // i = 4
//     // 12
//     //  12 > 91
//     if(a[i]>a[0]) 
//     compare = a[i]//91

// }
// document.write ("array items : " +a+"<br>")
// document.write ("Largest : " +compare)


// Task 10
// var a  = [24, 53, 78, 91, 12,3]
// var compare = a[0]
// for (var i = 0 ; i<a.length;i++){
//     // i = 5
//     // 12
//     //  12 < 3
//     if(a[i]<a[0]) 
//     compare = a[i]//91

// }
// document.write ("array items : " +a+"<br>")
// document.write ("Shortest : " +compare)


// task 11

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// for (var i =0 ; i<students.length;i++){
//     console.log(students[i]+" - "+scores[i])
// }


// task 12
// for (var i =5 ; i<=100;i+=5){
 
//     console.log(i)
// }

// task 13
// var scores = [12, 45, 3, 22, 34, 50];
// var  b =  prompt("Write num")
// for (var i =0 ; i<scores.length; i++){
//     // 3
// //    dry run
// //  3==12
// //     3===45
// //     3==3
// //     break
//      console.log(scores[i])
// if (b==scores[i]){
// //   yaha is lya console nahi lagaya qka hama prompt ka number tak chalana hia or usssa pechla bhi dekhana
// break

// }   

// }
