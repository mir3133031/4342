
// Соеденить два объекта в один 
// получить все ключи в один массив и все значения тоже в один отдельный массив
// соеденить два массива в один
// отфильтровать массив по типам данных элементов
let user = {
    lAstName: `mirabbos`,
    lastSurName: `hamrakulov`,
    lastAge: 14,
    LAstisMarried: true,
}
let userOne = {
    name: `Aziza`,
    surName: `hamrakulova`,
    age: 13,
    isMarried: false
}
let dark = Object.assign(user, userOne)

let keys = Object.keys(user)

let values = Object.values(user)

let lastarr = keys.concat(values)

let newArr = lastarr.filter(item =>  {
if ( typeof(lastarr) === `string`){
    StringLast = lastarr.concat(``)
}else{

}

})

let typse = {
    StringLast: [],
    Number: [],
    Boolean: [],
    Object: []
}
// console.log(newArr);
console.log(typse);






// console.log(
//     StringLast
// );



// lastarr.filter(item => typeof (lastarr) === String.push(StringLast))



