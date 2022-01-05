/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function newObj(){
  let newObj = Object.create(null)
  return newObj
}

const obj = newObj()
obj.name = 'Объект без прототипа'

console.log(obj)

/*  Создание объекта с прототипом
const person = {
  city: 'Moscow'
}

const student = Object.create(person)
student.name = 'Den'

console.log(person)
console.log(student)


/*  Функция неглубокого копирования объекта:

function clone(obj){
  const newObj = {}
  for (let prop in obj){
    if (obj.hasOwnProperty(prop)){
      newObj[prop] = obj[prop]
    }
  }
  return newObj
}

const obj1 = {name: 'One'}
const obj2 = clone(obj1)
obj2.prop = 123
console.log(obj1)
console.log(obj2)
*/