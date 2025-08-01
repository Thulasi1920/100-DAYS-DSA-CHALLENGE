//100days of dsa challenge
//day-06

//problem-01:  Add Product to Cart
let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart);
//[ 101, 102, 103, 104, 105 ]

//problem-02:  Remove Sold Out Item
let newCart = [101, 102, 103, 104];
let index = newCart.indexOf(103);
if(index != -1){
    newCart.splice(index,1)
}
console.log(newCart)
//output:[ 101, 102, 104 ]

//problem-03: Insert at Specific Position
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2,0,"banana");
console.log(fruits);
//output:[ 'apple', 'orange', 'banana', 'grapes' ]

//problrm-04: Print All Students

let students = ["Ali", "Zara", "John"];
let eachStudent = students.forEach((student) => {
    console.log("hello, " + student + "!");
});
//output:
//hello, Ali!
//hello, Zara!
//hello, John!

//problem-05: Delete First Item from Queue
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);
//output:[ 'order2', 'order3' ]



