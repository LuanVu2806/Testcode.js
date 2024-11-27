// function checkAge(){
//     var age;
//     var age = window.prompt("nhập tuổi");
//     if( age > 18){
//         console.log("Nguoi Lon");
//     }
//     else{
//         console.log("Vị Thành Niên");
//     }
// }
// checkAge();
// function checkEven0dd(){
//     var so;
//     var so = window.prompt("nhập số= ");
//     if(so % 2 == 0){
//         console.log("đây là số chẵn");
//     }
//     else{
//         console.log("đây là số lẻ");
//     }
// }
// checkEven0dd();
// function compareNumbers( a ,b){
//     if( a > b){
//         console.log(" a lớn hơn b");
//     }
//     else if( b > a){
//         console.log("b lớn hơn a");
//     }
//     else{
//         console.log(" a = b")
//     }
// }
// compareNumbers( 6 , 6)
function checkInteger(){
    if(Number.isInteger(10)){
        console.log("đây là số nguyên");
    }
    else{
        console.log("Đây không phải là số nguyên");
    }
}
checkInteger();