let arr = ["bananan", 2, 3, "four", 5];

/*arr.pop();//удаление последнего элемента
arr.push("5");//добавление элемента в конец массива
arr.shift();//удаление 1-го элемента
arr.unshift("1");//добавление элемента в начало массива*/

//for (let i = 0; i < arr.length; i++){//length выводит не кол-во элементов, а последний индекс + 1
//    console.log(arr[i]);
//}

arr.forEach(function(item, i, mass){//callback функция
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});

//console.log(arr);

let mass = [1, 3, 4, 6, 7];
for (let key of mass){//этот цикл перебирает значения, в отличии от for in, который перебирает ключи
    console.log(key);
}
