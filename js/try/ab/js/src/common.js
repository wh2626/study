var _ua=(function(d){var c={0:(d.indexOf('windows')!=-1&&d.indexOf('phone')!=-1)||d.indexOf('iphone')!=-1||d.indexOf('ipod')!=-1||(d.indexOf('android')!=-1&&d.indexOf('mobile')!=-1)||(d.indexOf('firefox')!=-1&&d.indexOf('mobile')!=-1)||d.indexOf('blackberry')!=-1,iPhone:(d.indexOf('iphone')!=-1),Android:(d.indexOf('android')!=-1&&d.indexOf('mobile')!=-1)};var b=(d.indexOf('windows')!=-1&&d.indexOf('touch')!=-1)||d.indexOf('ipad')!=-1||(d.indexOf('android')!=-1&&d.indexOf('mobile')==-1)||(d.indexOf('firefox')!=-1&&d.indexOf('tablet')!=-1)||d.indexOf('kindle')!=-1||d.indexOf('silk')!=-1||d.indexOf('playbook')!=-1;var a=!c[0]&&!b;return{Mobile:c,Tablet:b,PC:a}})(window.navigator.userAgent.toLowerCase());function addBrowserClass(){var c=function(e,d){if(document.documentElement.className){document.documentElement.className+=' '}document.documentElement.className+=e+(d!==''?' '+e+(d*1).toString().replace('.','_'):'')};var b=window.navigator.userAgent.toLowerCase();var a=window.navigator.appVersion.toLowerCase();if(get=b.match(/msie (\d+(\.\d+)?)/i)){c('ie',get[1])}else{if(get=b.match(/Trident.+rv\:(\d+(\.\d+)?)/i)){c('ie',get[1])}else{if(get=b.match(/chrome\/(\d+(\.\d+)?)/i)){c('chrome',get[1])}else{if(get=b.match(/firefox\/(\d+(\.\d+)?)/i)){c('firefox',get[1])}else{if(get=b.match(/opera\/(\d+(\.\d+)?)/i)){c('opera',get[1])}else{if(get=b.match(/safari\/(\d+(\.\d+)?)/i)){c('safari',get[1])}}}}}}if(get=b.match(/iPhone OS (\d+(\.\d+)?)/i)){c('ios',get[1])}if(get=b.match(/iPhone;/i)){c('iphone','')}else{if(get=b.match(/iPod;/i)){c('ipod','')}else{if(get=b.match(/iPad;/i)){c('ipad','')}else{if(get=b.match(/Android (\d+(\.\d+)?)/i)){c('android',get[1])}}}}}addBrowserClass();
// example
// if(_ua.PC)
// if(_ua.Tablet)
// if(_ua.Mobile[0])
// if(_ua.Mobile.iPhone)
// if(_ua.Mobile.Android)


$(function(){
});
