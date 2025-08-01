//100days of dsa challenge
//day-03


//problem-01: Detect and Merge Duplicate Product Entries (Advanced Cleanup).

let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
let repeated=[];
let cleanedInventory =inventory.filter((product)=>{
    let lowerName=product.name.toLowerCase();
    if(repeated.includes(lowerName)){
        return false;
    }else{
        repeated.push(lowerName);
        return true;
    }
})
console.log(cleanedInventory);
//output:
//[
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]


//problem-02: Group Transactions by Category and Sum Amounts

let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
let group=transactions.reduce((acc,curr)=>{
    let category=curr.category;
    let amount=curr.amount;
    if(!acc[category]){
        acc[category]=amount;
    }else{
        acc[category]+=amount;
    }
    return acc;
},{});
console.log(group);

//output: { Food: 200, Transport: 120, Shopping: 300 }
