function CallBack(a,b,operation){
     return operation(a,b);
}
function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function multi(a,b){
    console.log(a*b);
}
function devi(a,b){
    console.log(a/b);
}

CallBack(200,25,sum)
CallBack(200,25,sub)
CallBack(200,25,multi)
CallBack(200,25,devi)