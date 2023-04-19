    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/121.html', 
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1229.html', 
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1323.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1436.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1542.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1623.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1700.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1821.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/1924.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2029.html', 
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2133.html', 
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2238.html', 
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2341.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2445.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/252.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2548.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2652.html',
    'http://alb-q3mfcegfvneoatgnh8.cn-shanghai.alb.aliyuncs.com/dd/gua/g/2788.html',
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + 3600*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}
