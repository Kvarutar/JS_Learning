

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

/*for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(b)) === 'string' && a != '' && b != '' ){
        console.log(typeof(a));
        appDate.expenses[a] = b;
    }else {
        alert("Введено некорректное значение");
        i--;
    }
}*/

let j = 0;

/*while (j < 2){
    j++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(b)) === 'string' && a != '' && b != '' ){
        console.log(typeof(a));
        appDate.expenses[a] = b;
    }else {
        alert("Введено некорректное значение");
        i--;
    }
}*/

j=0;
do {
    j++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(b)) === 'string' && a != '' && b != '' ){
        console.log(typeof(a));
        appDate.expenses[a] = b;
    }else {
        alert("Введено некорректное значение");
        i--;
    } 
} while (j < 2);

appDate.moneyPerDay = appDate.budget/30;
alert(appDate.moneyPerDay);

if (appDate.moneyPerDay < 100){
    console.log("Низий достаток");
}else if(appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000){
    console.log("Средний достаток");
}else if (appDate.moneyPerDay > 2000){
    console.log("Высокий достаток");
}else {
    console.log("Ошибка");
}