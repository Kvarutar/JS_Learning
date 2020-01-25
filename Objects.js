let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;//можно создовать новый параметр вот так
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;//удаление свойства

//цикл for in, аналог foreach в c#
for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length);//кол-во свойств