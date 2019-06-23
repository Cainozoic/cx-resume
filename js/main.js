window.onload = ()=>{
    var p1 = new Progress({
        el: 'sk1',//canvas元素id
        deg: 85,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p2 = new Progress({
        el: 'sk2',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p3 = new Progress({
        el: 'sk3',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p4 = new Progress({
        el: 'sk4',//canvas元素id
        deg: 85,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p5 = new Progress({
        el: 'sk5',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p6 = new Progress({
        el: 'sk6',//canvas元素id
        deg: 70,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p7 = new Progress({
        el: 'sk7',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p8 = new Progress({
        el: 'sk8',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p9 = new Progress({
        el: 'sk9',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p10 = new Progress({
        el: 'sk10',//canvas元素id
        deg: 80,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p11 = new Progress({
        el: 'sk11',//canvas元素id
        deg: 75,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });

    var p12 = new Progress({
        el: 'sk12',//canvas元素id
        deg: 45,//绘制角度
        timer: 5,//绘制时间
        lineWidth: 15,//线宽
        lineBgColor: '#e2e2e2',//底圆颜色
        lineColor: '#e4393c',//动态圆颜色
        textColor: 'rgba(255,255,255,.8)',//文本颜色
        fontSize: 50,//字体大小
        circleRadius: 100//圆半径
    });
}

function onItemClick(id) {
    var scollHeight = document.getElementById(id).offsetTop
    var wrapperHeight = document.getElementsByClassName('right-wrapper')[0].scrollTop
    if (scollHeight != wrapperHeight) {
        // alert(scollHeight + '-' + wrapperHeight)
        $('.right-wrapper').animate({
            scrollTop: scollHeight
        }, 1000)
    }
}

