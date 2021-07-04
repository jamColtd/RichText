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
});
function fontB() {
    if ($('p').html().indexOf(getTextTag) >= 0) {
        var textReplace = void 0;
        textReplace = $('p').html().replace(getTextTag, '');
        $('p').html("<span style=\"font-weight:bold\">" + getTextTag + "</span>" + textReplace);
    }
}
function Font(font) {
    if (font === 'fontBold') {
        fontB();
    }
    else if (font === 'fontItalics') {
        console.log("I");
    }
}
