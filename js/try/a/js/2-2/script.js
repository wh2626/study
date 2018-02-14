let idolArr = ['古川未鈴','相沢梨紗','夢眠ねむ','成瀬瑛美 ','藤咲彩音','鹿目凛','根本凪','アイナ・ジ・エンド','セントチヒロ・チッチ','モモコグミカンパニー','ハシヤスメ・アツコ','リンリン','アユニ・D','鈴姫みさこ','恋汐りんご','七星ぐみ','望月みゆ','甘夏ゆず','大桃子サンライズ'];
let oshi_list = ['夢眠ねむ','古川未鈴','アイナ・ジ・エンド','モモコグミカンパニー','アユニ・D','甘夏ゆず'];

let idol = idolArr[Math.floor(Math.random() * idolArr.length)];
document.querySelector('.idol').appendChild(document.createTextNode(idol));

let kojo = '言いたいことがあるんだよ！やっぱり'+ idol +'は、かわいいよ！好き好き大好きやっぱ好き！俺が産まれてきた理由！それは'+ idol +'に出会う為！俺と一緒に人生歩もう世界で一番愛してる！愛してる！！！';
let gachikoi;
if(oshiCheck(idol, oshi_list)){
    document.querySelector('.quotes').appendChild(document.createTextNode(kojo));
}else{
    document.querySelector('.quotes').appendChild(document.createTextNode('がんばれー！'));
}

function oshiCheck(val, arr) {
    let index = arr.indexOf(val);
    if (index !== -1) {
        return true;
    } else {
        return false;
    }
}
