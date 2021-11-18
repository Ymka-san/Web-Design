function calculator(a,b)
{
    this.read = function()
    {
        this.a = Number(prompt("Press enter number a", 0));
        this.b = Number(prompt("Press enter number b", 0));
    },
    this.sum = function()
    {
        let sum;
        sum = this.a + this.b;
        console.log("sum = " + sum);
        return sum;
    },
    this.mul = function(){
        let mul;
        mul = this.a * this.b;
        console.log("mul = " + mul);
        return mul;
    }
}
let constructors = new calculator(0,0);
constructors.read();
constructors.sum();
constructors.mul();



function Constructor(startingValue)
{
    this.startingValue = startingValue,
   

    this.startingValue += +prompt('Текст', 0);
}

let zadanie = new constructor(23);
zadanie.add();