let money, date;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    date = prompt("Введите дату в формате YYYY-MM-DD");
    
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ( (typeof(a)) === 'string' && (typeof(b)) === 'string' && a != '' && b != '' ){
            console.log(typeof(a));
            appDate.expenses[a] = b;
        }else {
            alert("Введено некорректное значение");
            i--;
        }
    }
}
start();


let appDate = 
{
    budget: money,
    timeDate: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
chooseExpenses();

function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget/30).toFixed();
    alert("Ежедневный доход: " + appDate.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appDate.moneyPerDay < 100){
        console.log("Низий достаток");
    }else if(appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
        console.log("Средний достаток");
    }else if (appDate.moneyPerDay > 2000){
        console.log("Высокий достаток");
    }else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings() {
    let ans = prompt("Есть ли у вас сбережния?");
    if (ans == 'Да'){
        appDate.savings = true;
    }
    if (appDate.savings){
        let save = +prompt("Сколько сбережений?"),
            percent = +prompt("Под какой процент?");
    appDate.monthIncome = save/100/12*percent;
    alert("Доход в месяц с депозита: " + appDate.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    optionalExpenses = {};
    for(let i = 1; i < 4; i++){
        let a = prompt("Статья необезательных расходов?");
        optionalExpenses[i] = a;
    }
}

chooseOptExpenses();