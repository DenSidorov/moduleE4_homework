/*
Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const obj = {
  'id': 1,
  'name': "name",
  'prop': 'property'
}
function getObjStr (obj, str){
   return obj[str] === undefined ? false : true
}

console.log(getObjStr(obj, 'id'))
console.log(getObjStr(obj, 'name'))
console.log(getObjStr(obj, 'prop'))
console.log(getObjStr(obj, 'propname'))