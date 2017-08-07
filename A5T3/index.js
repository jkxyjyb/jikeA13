function max(){
    // 接收用户输入值
    var arr=document.getElementById("arr").value;
    // 检查是否为空
    if(arr==""){
        alert("请输入一串字符");
        return;
    }
    // 将字符转成数组类型
    arr=arr.split("");

    console.log(arr);
    var number={};
    var pos={};
    // 遍历数组
    arr.forEach(function (item,index,arry) {
        var count=number[item];
        if(!count){
            count=0;
            pos[item] = index;
        }else{
            pos[item] += ',' +  index;

        }
        count++;
        number[item]=count;

    })
// 找出字符出现最多的次数
    var max = number[Object.keys(number).sort(function (a,b) {
        return number[a] <= number[b];

    })[0]];
    console.log(max);

    var maxNumber=[];
    // 查看是否有多个字符出现最多次
    for( i in number){
        if(number[i]>=max){
            max=number[i];
            maxNumber.push(i);
        }
    }
    document.write("出现字符最多的次数有："+ maxNumber+"<br>") ;
    // 将字符出现的次数和位置打印出来
    for (var i = 0 ; i < maxNumber.length; i++ ){
        document.write(maxNumber[i] + "出现了 " + number[maxNumber[i]] + "次<br>" );
        document.write(maxNumber[i] + "出现的位置分别为 " + pos[maxNumber[i]] + "<br><br>" );



    }
}