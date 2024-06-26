let num = +prompt("введите число")
function age (){
    if(num % 2 == 0){
        alert("Чётное")
    }else if( num % 2 == 1){
        alert("Не чётное")
    }else{
        alert("введите только числа") 
     }
}
age ()
let Dop = +prompt("введите число")
function dop (){
    if(Dop > 0){
        alert(" положительно число")
    }else if( Dop < 0){
        alert("отрицательное число")
    }else{
       alert("введите только числа") 
    }
}
dop ()