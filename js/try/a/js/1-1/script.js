var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1234,54,765,543,87,56,234];

// 配列（arr）の数だけiを回して、
for(var i = 0;i<arr.length;i++){

    // arrの中の数値が2で割り切れたら、
    if(arr[i] % 2 === 0){
        // 何番目の数値が割り切れるかを#answer1-1の中に追記していく。
        document.getElementById('answer1-1').appendChild(document.createTextNode(i+','));
    }

    // arrの中の数値が2で割り切れたら、
    if(arr[i] % 2 === 0){
        // その数字を#answer1-2の中に追記していく。
        document.getElementById('answer1-2').appendChild(document.createTextNode(arr[i]+','));
    }
    
    // arrの中の数値が3で割り切れたら、
    if(arr[i] % 3 === 0){
        // 何番目の数値が割り切れるかを#answer2-1の中に追記していく。
        document.getElementById('answer2-1').appendChild(document.createTextNode(i+','));
    }
}
