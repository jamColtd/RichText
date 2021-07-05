"use strict";
// interface Font{
//     fontBold:string;
//     fontItalics:string;
// }
// var font = {
//     fontBold:'fontBold',
//     fontItalics:'fontItalics'
// }
// 初始化数据
var getTextTag = '';
var isFontBold;
// 页面加载后触发
$(function () {
    var tag = $("<p>TypeScrip \u7684\u89C6\u9891\u6211\u4EEC\u5C31\u6682\u65F6\u544A\u4E00\u6BB5\u843D\uFF0C\u7D27\u63A5\u7740\u4F1A\u66F4\u65B0 Vue3 \u7684\u8BFE\u7A0B\uFF0C\u5E0C\u671B\u4E0B\u4F19\u4F34\u4EEC\u7EE7\u7EED\u8DDF\u6211\u4E00\u671F\u5B66\u4E60\u3002</p>");
    $('section').append(tag);
    // 获取鼠标选中的文字
    $('p').mouseup(function (e) {
        var txt, text;
        txt = window.getSelection();
        text = txt.toString();
        getTextTag = text;
    });
    // 鼠标移动触发的事件
    $('p').mouseover(function (e) {
        if ($(e.target).css('font-weight') === '700') {
            $('#fontBold').css('backgroundColor', "rgb(216, 213, 213)");
        }
        else {
            $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)");
        }
    });
    $('body').mousedown(function (e) {
        $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)");
    });
    // 鼠标按下触发事件
    $('p').mousedown(function (e) {
        // let label:string = e.target.outerHTML;
        // let labelChildren = e.target.children;
        if ($(e.target).css('font-weight') === '700') {
            $('#fontBold').css('backgroundColor', "rgb(216, 213, 213)");
            isFontBold = true;
        }
        else {
            isFontBold = false;
            $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)");
        }
    });
});
// 加粗触发事件
function fontB(type) {
    var textReplace;
    if (type === 'addFontB') {
        if ($('p').html().indexOf(getTextTag) >= 0) {
            textReplace = $('p').html().replace(getTextTag, "<span style=\"font-weight:bold\">" + getTextTag + "</span>"); // 替换标签属性
            $('p').html("" + textReplace);
        }
    }
    else if (type === 'remoFontB') {
        textReplace = $('span').html().replace(getTextTag, "<span style=\"font-weight:normal\">" + getTextTag + "</span>"); // 替换标签属性
        $('span').html("" + textReplace);
    }
}
// 斜体触发事件
function Font(font) {
    if (font === 'fontBold') {
        if (isFontBold === false) {
            fontB('addFontB');
        }
        else {
            console.log(isFontBold);
            fontB('remoFontB');
        }
    }
    else if (font === 'fontItalics') {
        console.log("I");
    }
}
