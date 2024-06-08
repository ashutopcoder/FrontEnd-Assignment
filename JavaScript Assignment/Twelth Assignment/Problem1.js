/*Write a program to create an object representing a bank account with
properties like account number, account holder name, balance, and
methods for deposit and withdrawal. Ensure proper validation for
withdrawal to prevent overdraft.
*/
var bankAcc = {
    accNum : "8732468725387",
    accHolderName : "Raju Yadav",
    accBalance : 28357,
    checkBalance : function(){
        console.log("Current Balance : "+bankAcc.accBalance);
    },
    deposit : function(amt){
        bankAcc.checkBalance();
        console.log("Deposit Amount : "+amt);
        bankAcc.accBalance = bankAcc.accBalance+amt;
        console.log("Deposit Successful!");
        bankAcc.checkBalance();
    },
    withdrawal : function(amt){
        bankAcc.checkBalance();
        console.log("Withdrawal Amount : "+amt);
        if(amt>bankAcc.accBalance)
            {
                console.log("Insufficient Balance!");
            }
        else{
            bankAcc.accBalance=bankAcc.accBalance-amt;
            console.log("Withdrawal Success!");
            bankAcc.checkBalance();
        }
    }
};
console.log("Acount Number : "+bankAcc.accNum);
console.log("Acount Holder Name : "+bankAcc.accHolderName);
bankAcc.deposit(12000);
bankAcc.withdrawal(32000);
bankAcc.withdrawal(12000);