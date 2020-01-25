let soldier = {
    health: 400,
    armor: 100
};

let john = {
    bloodType: 1
};

john.__proto__ = soldier;//наследование

console.log(john);
console.log(john.armor);
