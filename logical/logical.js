// logica Operator (&&,||,!)

let a = true;
let b = false

let test1;
if (a || b){
    test1 = "Pass "
}
else{
    test1 = "fail"
}
console.log(test1)

let test2;
if (a && b){
    test2 = "Pass "
}
else{
    test2 = "fail"
}
console.log(test2)

let a1 = 37;
let b1 = 38;
let test3;
if (!(a1 > b1)){
    test3 = "Pass "
}
else{
    test3 = "fail"
}
console.log(test3)
