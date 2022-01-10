let balance = 50000 
let withdraw = 50000

if(withdraw <= balance){
    console.log("perform withdrawal", withdraw) 
    balance -= withdraw;
    console.log("available amount", balance) 

}
else {
    console.log("insufficient balance") 
}