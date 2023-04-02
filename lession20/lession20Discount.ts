let discount: number;
let itemCount: number = 11;
if(itemCount < 5){
    discount = 0;
}else if(itemCount > 10 && itemCount <12){
    discount = 1;
}else{
    discount = 2;
}
console.log('discount: '+discount);