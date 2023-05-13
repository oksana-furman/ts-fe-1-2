// classwork
let text : string = "Hello";
console.log(text);
let people : {fname : string, lname : string,age : number, email? : string, employed : boolean }[] = [
    {fname: "John", lname: "Doe", age: 30, employed: true}, 
    {fname: "Jane", lname: "Doe", age: 20, employed: false}, 
    {fname: "James", lname: "Doe", age: 10, employed: false}
];
let info = document.getElementById("info") as HTMLElement;
// info.innerHTML = text;
people.forEach(man => {
    info.innerHTML += `
    <p>First name: ${man.fname}</p>
    <p>Last name: ${man.lname}</p>
    <p>Age: ${man.age}</p> 
    <p>Employed: ${man.employed ? "Yes" : "No"}</p> 
    <hr>`;
});
for (const man of people) {
    console.log(man);
}
for (const i in people) {
    console.log(i);
}
let obj : {name: string, age: number} = {
    name: "John", 
    age: 50
}
for(let [key, value] of Object.entries(obj)){
    console.log(`${key}: ${value}`);
}
// second " : string" specifies returned type
function greeting(name? : string) : string {
    return name ? `Hello, ${name}!` : `Why don't you introduce yourself?`;

    // alternative

    // if (name) {
    //     return `Hello, ${name}!`;
    // } else {
    //     return `Why don't you introduce yourself?`;
    // }
}
console.log(greeting());
console.log(greeting("Victor"));

let sum = (a: number, b: number) => a + b;
console.log(sum(20, 5));
function higherOrderFun(callBackFun: () => void){
    console.log("This is higher order function.");
    callBackFun();
}
function anotherFun() {
    console.log("This is another function.");
}
console.log(higherOrderFun(anotherFun));

// basic exercise 1
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = document.getElementById("result") as HTMLElement;
// for (let i = 0; i < numbers.length; i++) {

//     for (let v = 0; v < numbers.length; v++) {
//         result.innerHTML += numbers[i] + " x " + numbers[i] + " = " + numbers[i] * numbers[v] + "<br>";
//     }

//     result.innerHTML += `<br> <hr> <br>`;
// }

// basic exercise 2
let result1 = document.getElementById("result1") as HTMLElement;
let result2 = document.getElementById("result2") as HTMLElement;
let result3 = document.getElementById("result3") as HTMLElement;

let myName : {fname: string, lname: string} = {
    fname: "Oksana", 
    lname: "Furman"
}
let myArr: {fname: string, lname: string}[] = [
    {  fname: "Oksana", lname: "Furman"}
]
for (let i = 0; i < 10; i++) {
    result1.innerHTML += `<p> ${myName.fname} ${myName.lname}</p>`;
}

for (let i = 0; i < 10; i++) {
   let i = 1;
    result2.innerHTML += `<p> ${i} ${myArr[0].fname} ${myArr[0].lname}</p>`;
}

setTimeout(() => {
    result3.innerHTML += `<p> ${myName.fname} ${myName.lname}</p>`;
}, 5000)

// basic exercise 3
let result4 = document.getElementById("result4") as HTMLElement;
let result5 = document.getElementById("result5") as HTMLElement;
let result6 = document.getElementById("result6") as HTMLElement;

let names: string[] = ["Maria", "Vadym", "Svyatoslav", "Lyudmyla", "Mykola", "Iryna", "Olena", "Olesya", "Stepan", "Karina", "Mila"]
for(let [i, value] of Object.entries(names)){
    console.log(`${i}: ${value}`);
    result4.innerHTML += `${i} <br>`;
    result5.innerHTML += `${value} <br>`;
    result6.innerHTML += `${i} - ${value} <br>`;
}

//advanced

