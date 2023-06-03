var setBudget = document.getElementById('set-budget');
var totalBudget = document.getElementById('total-budget');
var userBudget = document.getElementById('user-budget');
var expenseBox = document.getElementById('main-expense-box');
var expenseList = document.getElementById('exp-list');
var dueDate = document.getElementById('due-date');
var Catgory = document.getElementById('Catgory');
var Description = document.getElementById('Description');
var totalExpense = document.getElementById('total-Expense');
var balane = document.getElementById('balance')
// var paymentDate = document.getElementById('Payment-date')

var Expenses = []

function SetBudget() {
    if (userBudget.value === "") {
        alert("Type The Right Value")
    }
    else {
        var empty = totalBudget.innerText = '';
        var SetTotal = userBudget.value;
        var SetUserValue = totalBudget.innerText = SetTotal;
        var emptyInput = userBudget.value = ""
    }
}
function AddExpense() {
    //making list structure
    var li = document.createElement('li')
    var divMain = document.createElement('div')
    var divC1 = document.createElement('div')
    var divC2 = document.createElement('div')
    var divC3 = document.createElement('div')
    var expName = document.createElement('h3')
    var expdate = document.createElement('h3')
    var expPrice = document.createElement('h3')
    var editbtn = document.createElement('button')
    var delbtn = document.createElement('button')
    //merging
    expenseList.appendChild(li)
    li.appendChild(divMain)
    divMain.appendChild(divC1)
    divMain.appendChild(divC2)
    divMain.appendChild(divC3)
    divC1.appendChild(expName)
    divC2.appendChild(expPrice)
    divC1.appendChild(expdate)
    divC3.appendChild(editbtn)
    divC3.appendChild(delbtn)
    // add classes
    li.setAttribute('class', 'expense-item')
    divMain.setAttribute('class', 'expense-cont')
    expName.setAttribute('class', 'exp-head')
    expName.setAttribute('id', 'exp-head')
    expdate.setAttribute('class', 'exp-date')
    expdate.setAttribute('id', 'exp-date')
    expPrice.setAttribute('class', 'exp-price')
    expPrice.setAttribute('id', 'exp-price')
    divC1.setAttribute('class', 'exp-detail')
    divC2.setAttribute('class', 'exp-detail')
    editbtn.setAttribute('class', 'fa fa-pencil-square-o')
    editbtn.setAttribute('id', 'exp-edit-btn')
    editbtn.setAttribute('onclick', 'editvalue(this)')
    delbtn.setAttribute('class', 'fa fa-trash')
    delbtn.setAttribute('id', 'exp-del-btn')
    delbtn.setAttribute('onclick', 'delvalue(this)')
    divC3.setAttribute('class', 'exp-detail')

    // adding Expense name 

    var name = Description.value
    expName.innerHTML = name
    Description.value = ""

    // adding Expense date
    var date = dueDate.value
    expdate.innerHTML = date
    dueDate.value = ""

    // adding price of expense
    var price = Catgory.value
    expPrice.innerHTML = price
    var addExpense = Expenses.push(price)
    var empty = totalExpense.innerHTML=""
    totalExpense.innerHTML += addExpense.value

    //updating Expense
    Catgory.value = ""
}

function editvalue(e) {
    var editbtn = document.getElementById('exp-edit-btn')
    var expName = document.getElementById('exp-head')
    var expdate = document.getElementById('exp-date')
    var expPrice = document.getElementById('exp-price')
    // set values
    Description.value = expName.innerText
    Catgory.value = expPrice.innerText
    dueDate.value = expdate.innerText

    // update li
    expName.innerText = Description.value
    expPrice.innerText = Catgory.value
    expdate.innerText = dueDate.value

    //Remove li
    var li = e.parentNode.parentNode.parentNode.remove()
}
function delvalue(e) {
    var li = e.parentNode.parentNode.parentNode.remove()
}