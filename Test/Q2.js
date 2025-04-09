class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal{
constructor(name, DogBreed){
    super(name);
    this.DogBreed = DogBreed;   
}
speak(){
    super.speak();
    console.log(`${this.name} is a ${this.DogBreed}`);
}
}

const myDog = new Dog('Rocky', 'Golden Retriever');
myDog.speak();