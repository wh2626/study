var text = 'でんぱ組.incのねむきゅん！';

// console.log(text.substring(5,7));
// console.log(text.slice(5,7));

document.getElementById('str1').appendChild(document.createTextNode(text.substring(5,7)));
document.getElementById('sli1').appendChild(document.createTextNode(text.slice(5,7)));

document.getElementById('str2').appendChild(document.createTextNode(text.substring(5,3)));
document.getElementById('sli2').appendChild(document.createTextNode(text.slice(5,3)));

document.getElementById('str3').appendChild(document.createTextNode(text.substring(5,-2)));
document.getElementById('sli3').appendChild(document.createTextNode(text.slice(5,-2)));
