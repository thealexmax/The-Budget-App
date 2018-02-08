var desamount = [];
var desamountn = [];

var initialAmount = document.getElementById('yourBudget');
if(initialAmount.value == null) {
  if(typeof(Storage) !== undefined) {
    if(localStorage.getItem("balance")) {
      console.log(localStorage.getItem("balance"));
      initialAmount.innerHTML = "+ " + localStorage.getItem("balance") + "€";
    } else if(!localStorage.getItem("balance")) {
      console.log("Balance is 0");
      localStorage.setItem("balance", 0);
      initialAmount.innerHTML = "+ " + localStorage.getItem("balance") + "€";
    }
  }
}

var initialBudget = document.getElementById('initialBudget');
initialBudget.innerHTML = initialAmount.innerHTML;
var intialExpenses = document.getElementById('expensesB');

console.log("Loads Here");

if(localStorage.getItem("desamountp")) {
  var decoded = JSON.parse(localStorage.getItem("desamountp"));
  for(i in decoded) {
    var decoded = JSON.parse(localStorage.getItem("desamountp"));
    desamount = decoded;
    var nnewDesc = document.createElement('h2');
    nnewDesc.className = "lead";
    nnewDesc.innerHTML = decoded[i].description;
    console.log("Loads Here 33");
    var nnewAmount = document.createElement('span');
    nnewAmount.className = "positiveAmount";
    nnewAmount.innerHTML = "+ " + decoded[i].amount + "€";
    nnewDesc.appendChild(nnewAmount);
    var hhr = document.createElement('hr');
    document.getElementById('incomebox').appendChild(nnewDesc).appendChild(hhr);
    console.log("Loads Here 40");
  }
}

if(localStorage.getItem("desamountn")) {
  console.log(localStorage.getItem("desamountn"));
  var decodedn = JSON.parse(localStorage.getItem("desamountn"));
  var counterOld = 0;
  var counter = 0;
  console.log(decodedn);
  for(it in decodedn) {
    counterOld = parseInt(decodedn[it].amount);
    var desamountn = decodedn;
    console.log(decodedn)
    var nnnewDesc = document.createElement('h2');
    nnnewDesc.className = "lead";
    nnnewDesc.innerHTML = decodedn[it].description;
    var nnnewAmount = document.createElement('span');
    nnnewAmount.className = "negativeAmount";
    nnnewAmount.innerHTML = "- " + decodedn[it].amount + "€";
    nnnewDesc.appendChild(nnnewAmount);
    var hhnr = document.createElement('hr');
    document.getElementById('expensesbox').appendChild(nnnewDesc).appendChild(hhnr);
    counter = counter + counterOld;
    intialExpenses.innerHTML = "- " + counter + "€";
  }
}

function add() {
  var select = document.getElementById('inputPlus');
  var option = select.options[select.selectedIndex].text;
  if(option) {
    var desc = document.getElementById('desc').value;
    if(desc) {
      var amount = document.getElementById('amount').value;
      if(amount) {
        console.log(amount);
        if(option == "+") {
          var newDesc = document.createElement('h2');
          newDesc.className = "lead";
          newDesc.innerHTML = desc;
          var newAmount = document.createElement('span');
          newAmount.className = "positiveAmount";
          newAmount.innerHTML = "+ " + amount + "€";
          newDesc.appendChild(newAmount);
          var hr = document.createElement('hr');
          document.getElementById('incomebox').appendChild(newDesc).appendChild(hr);
          var currentAmount = parseInt(localStorage.getItem("balance"));
          currentAmount = currentAmount + parseInt(amount);
          localStorage.balance = currentAmount;
          initialAmount.innerHTML = "+ " + localStorage.getItem("balance") + "€";
          desamount.push({description: desc, amount: amount});
          console.log(desamount);
          localStorage.setItem("desamountp", JSON.stringify(desamount));
          initialBudget.innerHTML = initialAmount.innerHTML;
        } else {
          var nnewDesc = document.createElement('h2');
          nnewDesc.className = "lead";
          nnewDesc.innerHTML = desc;
          var nnewAmount = document.createElement('span');
          nnewAmount.className = "negativeAmount";
          nnewAmount.innerHTML = "- " + amount + "€";
          nnewDesc.appendChild(nnewAmount);
          var hhnr = document.createElement('hr');
          document.getElementById('expensesbox').appendChild(nnewDesc).appendChild(hhnr);
          var currentAmount = parseInt(localStorage.getItem("balance"));
          currentAmount = parseInt(currentAmount) - parseInt(amount);
          localStorage.balance = currentAmount;
          initialAmount.innerHTML = "+ " + localStorage.getItem("balance") + "€";
          desamountn.push({description: desc, amount: amount});
          localStorage.setItem("desamountn", JSON.stringify(desamountn));
          initialBudget.innerHTML = initialAmount.innerHTML;
        }
      } else {
        alert("You need to enter an amount");
      }
    } else {
    }
  }
}