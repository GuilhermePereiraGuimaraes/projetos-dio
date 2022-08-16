class Animal {
    constructor(type = 'animal'){
        this.type = type
    }

    get type(){
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound(){
        console.log('Making animal sound')
    }
}

class Cat extends Animal {
    constructor(){
        super('cat')
    }
    makeSound(){
        console.log('Meow')
    }
}

let b = new Cat()
console.log(b.makeSound())