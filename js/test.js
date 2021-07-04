"use strict";
// interface Font{
//     fontBold:string;
//     fontItalics:string;
// }
// var font = {
//     fontBold:'fontBold',
//     fontItalics:'fontItalics'
// }
$(function () {
    $('p').html('TypeScrip 的视频我们就暂时告一段落，紧接着会更新 Vue3 的课程，希望下伙伴们继续跟我一期学习。');
    // 获取鼠标选中的文字
    $('p').mouseup(function (e) {
        var txt, text;
        txt = window.getSelection();
        text = txt.toString();
        return text;
    });
});
function Font(font) {
    if (font === 'fontBold') {
        console.log("B");
    }
    else if (font === 'fontItalics') {
        console.log("I");
    }
}
