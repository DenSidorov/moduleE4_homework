/*
Задание 5.
  Переписать консольное приложение из предыдущего юнита на классы.
*/

class Electric {
  constructor(section){
  this.section = section || 'Электротовары'
  this.switch = true
  }

  info(){
    console.group(`${this.name}:`)
    console.log(`Секция: ${this.section}`)
    console.log(`Тип: ${this.type}`)
    this.switch ? console.log(`Состояние:  ВКЛ`) : console.log(`Состояние:  ОТКЛ`)
    console.groupEnd()
  }

  switcher(){
  if (this.switch){
    this.switch = false
    console.log(`!!!! Сработал выключатель "${this.name}", ${this.type} - переведён в состояние: ${this.switch}`)      
  } else {
    this.switch = true
    console.log(`!!!! Сработал выключатель "${this.name}", ${this.type} - переведён в состояние: ${this.switch}`)
  }
  return this.switch
 }
}

class Lamps extends Electric {
  constructor(name, type, section){
  super(section)  
  this.name = name
  this.type = type
  }
}

class Computers extends Electric {
  constructor(name, type, section) {
  super(section)
  this.name = name
  this.type = type
  }
}

const lamp = new Lamps("Лампа", "LED")
const comp1 = new Computers("ASUS", 'Laptop', 'Computers')
const comp2 = new Computers("IBM", 'PC', 'Computers')

lamp.info()
lamp.switcher()
lamp.info()
comp1.info()
comp1.switcher()
comp1.info()
comp2.info()
console.log(lamp.switch, comp1.switch, comp2.switch)