

let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let appDate = 
{
    budget: money,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?");

appDate.expenses.answer1 = answer2;

alert(appDate.budget/30);

console.log(appDate.timeDate);
console.log(appDate.expenses.answer1);