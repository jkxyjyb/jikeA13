function calculate(){
     // 获取用户输入值
    var number=document.getElementById("number").value;
    if(number==""){
       alert("请输入0-100的有效数字");
       return;
    }

    // switch判断
    switch(true){
        case  (number>=90 && number<=100):
            alert("一等生");
            break;
        case  (number>=80 && number<90):
            alert("二等生");
            break;
        case  (number>=70 && number<80):
            alert("三等生");
            break;
        case  (number>=60 && number<70):
            alert("四等生");
            break;
        case  (number>=50 && number<60):
            alert("五等生");
            break;
        case (number>=40 && number<50):
            alert("六等生");
            break;
        case  (number>=30 && number<40):
            alert("七等生");
            break;
        case  (number>=20 && number<30):
            alert("八等生");
            break;
        case  (number>=10 && number<20):
            alert("九等生");
            break;
        case  (number>=0 && number<10):
        alert("十等生");
        break;
        default:
            alert("请输入0-100的有效数字");


    }
}