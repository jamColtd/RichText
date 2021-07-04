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
var isFontBold:boolean;

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

    // 鼠标移动触发的事件
    $('p').mouseover(function(e){
        if( $(e.target).css('font-weight') === '700'){
            $('#fontBold').css('backgroundColor', "rgb(216, 213, 213)")
        }else{
            $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)")
        }
    })

    // 鼠标按下触发事件
    $('p').mousedown(function(e){
        // let label:string = e.target.outerHTML;
        // let labelChildren = e.target.children;
        if( $(e.target).css('font-weight') === '700'){
            $('#fontBold').css('backgroundColor', "rgb(216, 213, 213)")
            isFontBold = true;
        }else{
            isFontBold = false;
            $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)")
        }
    })
})

// 加粗触发事件
function fontB(type:string){
    let textReplace:string;
    if(type === 'addFontB'){
        if($('p').html().indexOf(getTextTag) >= 0){
            textReplace = $('p').html().replace(getTextTag,`<span style="font-weight:bold">${getTextTag}</span>`);// 替换标签属性
            $('p').html(`${textReplace}`)
        }
    }else if(type === 'remoFontB'){
        textReplace = $('span').html().replace(getTextTag,`<span style="font-weight:normal">${getTextTag}</span>`);// 替换标签属性
        $('span').html(`${textReplace}`)
    }
}

// 斜体触发事件
function Font(font:string){
    if(font === 'fontBold'){
        if(isFontBold  === false){
            fontB('addFontB')
        }else{
            console.log(isFontBold)
            fontB('remoFontB')
        }
    }else if(font === 'fontItalics'){
        console.log("I")
    }
}

