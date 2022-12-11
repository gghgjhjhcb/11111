//cau 1 
//cau 2
//cau3
function numberOneTriangle(i){
const H = 5;
for(let i = 1; i <= H; i++){
    for(var k = H; k > i;k--){
        document.write("&nbsp;&nbsp;");
    }
    for(let j = 1;j <= i * 2 - 1; j++){
        document.write("1");
    }
    document.writeln("<br />");
}
}
//cau 4
 var today = new Date()
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
 