//1.Remove discontinued products problem
let products=['Laptop','Mobile','Tablet','Camera','Watch'];
 products.splice(2,2);
 console.log(products);//output: [ 'Laptop', 'Mobile', 'Watch' ]


//2.Add new students in between
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,'Nina','Omar');
console.log(students);    //output: : ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']


//3 Extract Top Performers
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let Top=scores.splice(0,3);
console.log(Top);     //Output: ['Zainab', 'Ali', 'Farhan']


//4. Show Last 2 Days’ Sales
let sales = [220, 300, 280, 150, 400, 390, 310];
let last=sales.splice(5);
console.log(last);    //  Output: [390, 310]


//5. Get All Users Who Are Active 
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let active=users.filter(users=>users.active==true);
console.log(active);      // Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]


// 6.Block Short Phone Numbers Problem
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validating=phoneNumbers.filter(phoneNumbera=>phoneNumbers.length==10);
console.log(validating);  // Output: ['1234567890', '9876543210']



//7.Convert Price to With Tax Problem
let prices = [100, 200, 300];
let tax=prices.map(price=>prices+(prices*18/100));
console.log(tax);//Output: [118, 236, 354]


//8. Append “.com” to Website Names Problem
let sites = ['google', 'amazon', 'microsoft'];
let websites=sites.map(sites=>sites+'.com');
console.log(websites);        // Output: ['google.com', 'amazon.com', 'microsoft.com']


// 9. Calculate Total Cart Price Problem
let cart = [499, 1299, 299, 799];
let total=cart.reduce((sum,price)=>sum+price);
console.log(total);      // Output: 2896



//10. Count Frequency of Votes Problem
    let votes = ['A', 'B', 'A', 'C', 'B', 'A']; 
    let candidate=votes.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return acc;
    },{});b
console.log(candidate);  // Output: { A: 3, B: 2, C: 1 }