class ELEMENTS {
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.querySelector(".budget-form");
        this.budgetInput = document.querySelector(".budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseForm = document.querySelector(".expense-form");
        // this.incomeForm = document.querySelector(".income-form");
        // this.incomeInput = document.querySelector(".income-input");
        // this.amountIncome = document.querySelector(".income-value");
        this.expenseInput = document.querySelector(".expense-input");
        this.expenseAmount = document.getElementById("expense-amount");
        this.incomeAmount = document.getElementById("income-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.amountExpense = document.querySelector(".expense-value");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemId = 0;
    }
}