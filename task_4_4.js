/*
Задание 4.
  Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
  Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
  Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
  Выбрав прибор, подумайте, какими свойствами он обладает.
План:
  Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
  Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
  У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
  Создать экземпляры каждого прибора.
  Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
Общие требования:
  Имена функций, свойств и методов должны быть информативными.
  Соблюдать best practices:
  использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
  информативные имена (а не a, b);
  четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
  использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
*/

function Electric(){  
  this.section = 'Электро'
  this.switch = true
}

Electric.prototype.info = function(){
  // if (this.switch){
    console.group(`${this.name}:`)
    console.log(`Секция: ${this.section}`)
    console.log(`Тип: ${this.type}`)
    this.switch ? console.log(`Состояние:  ВКЛ`) : console.log(`Состояние:  ОТКЛ`)
    console.groupEnd()
}

Electric.prototype.switcher = function(){
  if (this.switch){
    this.switch = false
    console.log(`Сработал выключатель "${this.name}" - переведён в состояние: ${this.switch}`)      
  } else {
    this.switch = true
    console.log(`Сработал выключатель "${this.name}" - переведён в состояние: ${this.switch}`)
  }
  return this.switch
}

function Lamps (name, type) {
  this.name = name,
  this.type = type
}
Lamps.prototype = new Electric()
Lamps.prototype.info = function(){
  if (this.switch){
    console.log(`Отдел "Светильники"\n${this.name}:\nТип: ${this.type}\nСостояние:  ВКЛ`)
  } else {
    console.log(`Отдел "Светильники"\n${this.name}:\nТип: ${this.type}\nСостояние:  ОТКЛ`)
  }  
}

function Computers (name, type) {
  this.name = name,
  this.type = type
}
Computers.prototype = new Electric()

const lamp = new Lamps("Лампа", "LED")

const comp1 = new Computers("Компьютер", 'Laptop')
const comp2 = new Computers("Компьютер", 'PC')

// console.log(lamp)
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
// console.log(comp)
comp1.info()
comp1.switcher()
comp1.info()
comp2.info()