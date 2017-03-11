(function(doc, win) {
    //获取根元素
    var docEl = doc.documentElement,
        // 窗口变化的环境
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        //计算出rem
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
