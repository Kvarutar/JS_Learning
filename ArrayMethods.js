//----------------------разные методы---------------
// let ans = prompt("", ""),
//     array = [];

// array = ans.split(',');//парсинг строки
// console.log(array);

// let arr = ["awa", "zzz", "pp", "rqa"],
//     i = arr.join(', ');//распарсинг?(склейка в строку)

// console.log(i);

let arr = ["awa", "zzz", "pp", "rqa"],
    i = arr.sort();//сортировка

function compareNum(a, b){
    return a - b;
}
i = arr.sort(compareNum);//если элементы массива цифры

console.log(arr);