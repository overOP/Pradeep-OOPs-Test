class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    isSquare(){
        return this.width === this.height;    
    }
}
const myRectangle = new Rectangle(2, 5);
console.log(myRectangle.getArea());
console.log(myRectangle.isSquare());