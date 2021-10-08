
var array = [5, 9, 45, 67, 3, 5, 0, 2,44, 8, 26, 903];
var even = 0;
var odd = 0;

for(let i = 0; i < array.length; i++){

    if(array[i] %2 == 0){
        even += array[i];
    }
    else{
        odd += array[i];
    }
}

if(even > odd){
    console.log("Even > Odd");
    var a = even - odd;
    console.log(a);
}
else{
    console.log("Odd > Even");
    var b = odd - even;
    console.log(b);
}