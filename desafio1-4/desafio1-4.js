const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

  function createTransaction(transaction) {
      user.transactions.push(transaction);  
      if(transaction.type == "credit"){
          user.balance += transaction.value
      }else{
          user.balance -= transaction.value
      }          
  }

  function getHigherTransactionByType (typeOfTransaction) {
    let highestValue = 0 //hv começa em zero

    for (transaction of user.transactions) { //aqui ele dá o nome de transaction para cada transação
        if (transaction.type === typeOfTransaction) { //se o tipo da transação for igual ao parametro
            if (transaction.value > highestValue) { //e seo valor da transação for maior que 0
                highestValue = transaction.value //o hv será o valor da transação
                obj = transaction //e objeto será a transação
            }
        }
    }
    console.log(obj) //e no console aparecerá a transação
}

function getAverageTransactionValue(){
    var soma = 0
    var average = 0    
    for (let i = 0; i < user.transactions.length; i++){
        soma = soma + user.transactions[i].value   
        average = soma / user.transactions.length;
    }
    console.log(average) 
 }  

 function getTransactionsCount(){
     var credit = 0
     var debit = 0
     for (let i = 0; i < user.transactions.length; i++){
         if(user.transactions[i].type == 'credit'){
             credit = credit + 1
         }else{
             debit = debit + 1
         }
     }
     console.log(`{ credit: ${credit}, debit: ${debit}}`)
 }


  createTransaction({ type: "credit", value: 50 });
  createTransaction({ type: "credit", value: 120 });
  createTransaction({ type: "debit", value: 80 });
  createTransaction({ type: "debit", value: 30 });

console.log(user.balance)

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount();

