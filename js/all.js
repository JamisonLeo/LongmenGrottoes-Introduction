function content1() {
    top.location = "#top";
    document.getElementById("content1").style.display = "block";
    var a1 = document.getElementById("zonglan");
    a1.style.backgroundColor = "rgba(57, 68, 83, 1)";
    a1.style.color = "white";

    document.getElementById("content2").style.display = "none";
    var a2 = document.getElementById("jingdiandaodu");
    a2.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a2.style.color = "black";

    document.getElementById("content3").style.display = "none";
    var a3 = document.getElementById("jingdianpinglun");
    a3.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a3.style.color = "black";

    document.getElementById("content4").style.display = "none";
    var a4 = document.getElementById("youlanganshou");
    a4.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a4.style.color = "black";
}

function content2() {
    document.getElementById("content1").style.display = "none";
    var a1 = document.getElementById("zonglan");
    a1.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a1.style.color = "black";

    top.location = "#top";
    document.getElementById("content2").style.display = "block";
    var a2 = document.getElementById("jingdiandaodu");
    a2.style.backgroundColor = "rgba(57, 68, 83, 1)";
    a2.style.color = "white";

    document.getElementById("content3").style.display = "none";
    var a3 = document.getElementById("jingdianpinglun");
    a3.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a3.style.color = "black";

    document.getElementById("content4").style.display = "none";
    var a4 = document.getElementById("youlanganshou");
    a4.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a4.style.color = "black";
}

function content3() {
    document.getElementById("content1").style.display = "none";
    var a1 = document.getElementById("zonglan");
    a1.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a1.style.color = "black";

    document.getElementById("content2").style.display = "none";
    var a2 = document.getElementById("jingdiandaodu");
    a2.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a2.style.color = "black";

    top.location = "#top";
    document.getElementById("content3").style.display = "block";
    var a3 = document.getElementById("jingdianpinglun");
    a3.style.backgroundColor = "rgba(57, 68, 83, 1)";
    a3.style.color = "white";

    document.getElementById("content4").style.display = "none";
    var a4 = document.getElementById("youlanganshou");
    a4.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a4.style.color = "black";
}

function content4() {
    document.getElementById("content1").style.display = "none";
    var a1 = document.getElementById("zonglan");
    a1.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a1.style.color = "black";

    document.getElementById("content2").style.display = "none";
    var a2 = document.getElementById("jingdiandaodu");
    a2.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a2.style.color = "black";

    document.getElementById("content3").style.display = "none";
    var a3 = document.getElementById("jingdianpinglun");
    a3.style.backgroundColor = "rgba(57, 68, 83, 0)";
    a3.style.color = "black";

    top.location = "#top";
    document.getElementById("content4").style.display = "block";
    var a4 = document.getElementById("youlanganshou");
    a4.style.backgroundColor = "rgba(57, 68, 83, 1)";
    a4.style.color = "white";
}

function signIn() {
    alert("注册成功！");
    top.location = "../html/login.html";
}

function sign() {
    top.location = "../html/signIn.html";
}

function success() {
    alert("登录成功！");
    top.location = "../index.html";
}

function heartA() {
    var a = document.getElementById("heartA");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_A").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_A() {
    var a = document.getElementById("heart_A");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartA").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starA").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starA() {
    var a = document.getElementById("starA");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_A").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartB() {
    var a = document.getElementById("heartB");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_B").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_B() {
    var a = document.getElementById("heart_B");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartB").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starB").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starB() {
    var a = document.getElementById("starB");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_B").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartC() {
    var a = document.getElementById("heartC");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_C").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_C() {
    var a = document.getElementById("heart_C");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartC").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starC").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starC() {
    var a = document.getElementById("starC");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_C").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartC() {
    var a = document.getElementById("heartC");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_C").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_C() {
    var a = document.getElementById("heart_C");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartC").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starC").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starC() {
    var a = document.getElementById("starC");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_C").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartD() {
    var a = document.getElementById("heartD");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_D").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_D() {
    var a = document.getElementById("heart_D");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartD").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starD").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starD() {
    var a = document.getElementById("starD");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_D").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartE() {
    var a = document.getElementById("heartE");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_E").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_E() {
    var a = document.getElementById("heart_E");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartE").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starE").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starE() {
    var a = document.getElementById("starE");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_E").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartF() {
    var a = document.getElementById("heartF");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_F").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_F() {
    var a = document.getElementById("heart_F");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartF").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starF").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starF() {
    var a = document.getElementById("starF");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_F").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartG() {
    var a = document.getElementById("heartG");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_G").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_G() {
    var a = document.getElementById("heart_G");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartG").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starG").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starG() {
    var a = document.getElementById("starG");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_G").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartH() {
    var a = document.getElementById("heartH");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_H").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_H() {
    var a = document.getElementById("heart_H");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartH").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starH").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starH() {
    var a = document.getElementById("starH");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_H").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heartI() {
    var a = document.getElementById("heartI");
    if (a.style.backgroundImage.match("heart1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart1.png)";
        document.getElementById("heart_I").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}

function heart_I() {
    var a = document.getElementById("heart_I");
    if (a.style.backgroundImage.match("heart_1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/heart_1.png)";
        document.getElementById("heartI").style.backgroundImage = "url(../images/youkepinglun/like/heart.png)";
        document.getElementById("starI").style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    }
}

function starI() {
    var a = document.getElementById("starI");
    if (a.style.backgroundImage.match("star1")) {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star.png)";
    } else {
        a.style.backgroundImage = "url(../images/youkepinglun/like/star1.png)";
        document.getElementById("heart_I").style.backgroundImage = "url(../images/youkepinglun/like/heart_.png)";
    }
}