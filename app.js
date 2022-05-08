const ce = (tagName) => document.createElement(tagName);
const qs = (selector) => document.querySelector(selector);

// dom nodes for income 
const incomeForm = qs("#income-form");
const incomeName = qs("#income-name");
const incomeAmount = qs("#income-amount");
const incomeContainer = qs("#income-container");
const addIncomeBtn = qs("#addIncomeBtn");
const incomeTotal = qs("#income-result")

// dom nodes form expense
const expenseForm = qs("#expense-form");
const expenseInput = qs("#expense-name");
const expenseAmount = qs("#expense-amount");
const expenseContainer = qs("#expense-container");
const addExpenseBtn = qs("#addExpenseBtn");
const expenseTotal = qs("#expense-result")

//balance

const balance = qs("#balance");
let balanceText;

balance.append(balanceText)
// event for income

addIncomeBtn.addEventListener("click", addIncome);
addExpenseBtn.addEventListener("click", addExpense)
// pusty obiekt z tablica do ktorego bede pushowac przychody 

const data = {};
const allData = () => {
    data['incomeText'] = incomeName.value,
        data['incomeAmount'] = +incomeAmount.value
    data['expenseText'] = expenseInput.value,
        data['expenseAmount'] = +expenseAmount.value
}

const allIncomes = [];
const allExpenses = [];

function addIncome(event) {
    event.preventDefault();
    const incomeDiv = ce("div");
    incomeDiv.classList.add("income");
    const newIncome = ce("li");
    const newIncomeAmount = ce("span");
    allData()
    newIncome.innerHTML = `${data.incomeText}`
    newIncome.classList.add("income-el")
    newIncomeAmount.innerHTML = `${data.incomeAmount}`
    incomeDiv.append(newIncome, newIncomeAmount);
    incomeContainer.appendChild(incomeDiv);
    allIncomes.push(data.incomeAmount);
    incomeResult();
    console.log(allIncomes);
    renderButtons(incomeDiv)
    incomeDiv.addEventListener('click', remove)

}

function addExpense(event) {
    event.preventDefault();
    const expenseDiv = ce("div");
    expenseDiv.classList.add("expense");
    const newExpense = ce("li");
    const newExpenseAmount = ce("span");
    allData()
    newExpense.innerHTML = `${data.expenseText}`
    newExpense.classList.add("income-el")
    newExpenseAmount.innerHTML = `${data.expenseAmount}`
    expenseDiv.append(newExpense, newExpenseAmount);
    expenseContainer.appendChild(expenseDiv);
    allExpenses.push(data.expenseAmount);
    expenseResult();
    renderButtons(expenseDiv);
    expenseDiv.addEventListener('click', remove)
 
}

const incomeResult = (total) => {
    let result = allIncomes.reduce((curr, prev) => curr + prev);
    incomeTotal.innerText = `${result}`
}
const expenseResult = (total) => {
    let result = allExpenses.reduce((curr, prev) => curr + prev);
    expenseTotal.innerText = `${result}`
}

function edit() {
    editBtn.innerText = "[edit]";
    editBtn.classList.add("edit");
}

function renderButtons(el) {
    const removeForBtn = ce("button");
    const editBtn = ce("button");
    removeForBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeForBtn.classList.add("remove");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.classList.add('edit');
    el.append(removeForBtn, editBtn)
}

function remove(e) {
    const item = e.target;
    if (item.classList[0] === "remove") {
        const elementToRemove = item.parentElement;
        elementToRemove.remove()
    }
}


// const calculateBalance = (result1, result2)=> {
//     console.log( result1 + result2)
// }
// calculateBalance([expenseTotal], [expenseTotal])

// const calculateBalance = (element1, element2, result) {
//     if (element1 > element2) {
//         balanceText = `Możesz jeszcze wydać ${result} złotych`
//     }
//     else if(element1 === element2){
//         balanceText = "Bilans wynosi 0"
//     }
//     else{
//         balanceText = `Bilans jest ujemny. Jesteś na minusie ${result} złotych`
//     }
// }