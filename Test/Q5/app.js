class Person {
    constructor() {
        this.users = []
        this.name = ''
        this.gmail = ''
        this.nameField = document.getElementById('name')
        this.ageField = document.getElementById('age') 
        this.submitButton = document.getElementById('submit')
        this.resultBox = document.getElementById('result')
        this.initializeEvents()
    }

    initializeEvents() {
        this.submitButton.addEventListener('click', () => this.getUserInputs())
    }

    getUserInputs() {
        this.name = this.nameField.value
        this.age = this.ageField.value
        this.users.push({ name: this.name, age: this.age })
        this.displayResult()
    }

    displayResult() {
        const ulComp = document.createElement('ul')
        this.users.forEach(item => {
            const liComp = document.createElement('li')
            liComp.innerHTML = `Name: ${item.name}, Age: ${item.age}`
            ulComp.appendChild(liComp)
        })
        this.resultBox.innerHTML = ""
        this.resultBox.appendChild(ulComp)
    }
}
class Student extends Person {
    constructor(){
        super()
        this.gradeField = document.getElementById('grade')
        this.submitButton.addEventListener('click', () => this.getUserInputs())
    }
    getUserInputs() {
        this.name = this.nameField.value
        this.age = this.ageField.value
        this.grade = this.gradeField.value
        this.users.push({ name: this.name, age: this.age, grade: this.grade })
        this.displayResult()
    }
    displayResult(){
        alert(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}

document.addEventListener('DOMContentLoaded', () => new Person());
document.addEventListener('DOMContentLoaded', () => new Student());
