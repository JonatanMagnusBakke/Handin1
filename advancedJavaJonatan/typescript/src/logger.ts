import _ from "lodash"

function logger(a :number,b :string):void
{
    console.log(`Value1: ${a} , Value2: ${b}`)
}

var a = 1; var b = "hello";
logger(a,b);

interface IPerson {name:string};
interface IAddress {street:string};

function logger2(a :IPerson,b :IAddress):void
{
    console.log(`Value1: ${a} , Value2: ${b}`)
}

logger2({name:"Jonatan"}, {street:"nørgårdsvej"});

class Person implements IPerson
{
    name: string;
    constructor(name:string)
    {
        this.name = name;
    }
}

class Address implements IAddress
{
    street: string;
    constructor(street:string)
    {
        this.street = street;
    }
}

let person = new Person("Jonatan");
let address = new Address("nørgårsvej");
logger2(person, address);


function logger3<T, U>(a :T,b :U):void
{
    console.log(`Value1: ${a} , Value2: ${b}`)
}

logger3(person, address);


class GenericLogger<T,U>
{
    log = (a:T, b:U) => console.log(`Value1: ${a} , Value2: ${b}`)
}

let logger5 = new GenericLogger<IPerson, IAddress>();
logger5.log(person, address);

let logger6 = new GenericLogger<number, string>();

logger6.log(2, "je");