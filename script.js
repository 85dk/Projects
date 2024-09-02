// DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const expensesList = document.getElementById('expenses-list');
const totalExpenses = document.getElementById('total-expenses');
const expenseAnalysis = document.getElementById('expense-analysis');

// Initialize total expenses and expense list
let total = 0;
let expenses = [];

// Function to add a new expense
function addExpense(description, amount) {
    // Create new expense object
    const expense = {
        description: description,
        amount: parseFloat(amount)
    };

    // Add expense to expenses array
    expenses.push(expense);

    // Create new expense item in the DOM
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
        <span>${description}</span>
        <span>$${amount}</span>
    `;
    expensesList.appendChild(expenseItem);

    // Update total expenses
    total += expense.amount;
    totalExpenses.textContent = total.toFixed(2);

    // Update expense analysis
    updateExpenseAnalysis();
}

// Function to update expense analysis
function updateExpenseAnalysis() {
    const numExpenses = expenses.length;
    const averageExpense = total / numExpenses || 0;

    expenseAnalysis.innerHTML = `
        <h3>Expense Analysis</h3>
        <p>Total Expenses: $${total.toFixed(2)}</p>
        <p>Number of Expenses: ${numExpenses}</p>
        <p>Average Expense: $${averageExpense.toFixed(2)}</p>
    `;
}

// Event listener for submitting the form
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value;
    const amount = amountInput.value;

    if (description.trim() && amount.trim()) {
        addExpense(description, amount);
        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter both description and amount.');
    }
});
