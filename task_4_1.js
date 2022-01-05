/*
Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
только собственных свойств. Данная функция не должна возвращать значение.

*/

const obj = {
  'id': 1,
  'name': "name",
  'prop': 'property'
}
function getObjKeysVals (obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)) {
       console.log(`Ключ — ${key}, значение — ${obj[key]}`)
    }
  }
}
getObjKeysVals(obj)