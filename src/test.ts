// interface Font{
//     fontBold:string;
//     fontItalics:string;
// }

// var font = {
//     fontBold:'fontBold',
//     fontItalics:'fontItalics'
// }

// 初始化数据
var getTextTag:string = '';

// 页面加载后触发
$(function(){
    var tag:any = $(`<p>TypeScrip 的视频我们就暂时告一段落，紧接着会更新 Vue3 的课程，希望下伙伴们继续跟我一期学习。</p>`)
    $('section').append(tag)
    // 获取鼠标选中的文字
    $('p').mouseup(function(e) {
        var txt:any,text:string;
        txt = window.getSelection()
        text = txt.toString();
        getTextTag =  text;
    })
})

function fontB(){
    if($('p').html().indexOf(getTextTag) >= 0){
        let textReplace:string;
        textReplace = $('p').html().replace(getTextTag,'');
        $('p').html(`<span style="font-weight:bold">${getTextTag}</span>${textReplace}`)
    }
}

function Font(font:string){
    if(font === 'fontBold'){
        fontB()
    }else if(font === 'fontItalics'){
        console.log("I")
    }
}

