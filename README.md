
项目:富文本编辑
#####安装
npm install typescript -g
npm install ts-node -g
tsc -init 
运行
tsc

#####简述
````tex
    想自己封装一个富文本编辑器，也是对自己的一个知识的见证。
````

#####1.创建文件
````tex
-RICHTEXT
--js
----jq.1.4.4.js
----jq.js
----test.js
--node_modules
--src
----test.ts
--style
----style.css
--index.html
--package.json
--README.md
--tsconfig.json  /*ts配置文件*/
````

#####2.添加标签
`````html
<article id="homePage">
        <header>
            <nav>
                <button id="fontBold" class="input-style" onclick="Font('fontBold')">B</button>
                <button id="fontItalics" class="input-style" onclick="Font('fontItalics')">I</button>
            </nav>
        </header>
        <section>

        </section>
    </article>
`````
###引入外部文件
`````html
    <script src="./js/jq.js"></script>
    <script src="./js/test.js"></script>
    <link rel="stylesheet" href="./style/style.css">
`````
###加粗事件绑定
`````javascript
// 加粗触发事件
function fontB(type:string){
    
}

// 斜体触发事件
function Font(font:string){
    
}
`````
###鼠标事件绑定

````javascript
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
````

#####3.检测有无加粗属性
`````javascript
// 检测属性有无加粗属性 400/700
$(e.target).css('font-weight') === '700'
`````

#####4.清除按钮样式改变的颜色
````javascript
    // 清除样式事件
        $('body').mousedown(function(e){
            $('#fontBold').css('backgroundColor', "rgb(252, 252, 252)")
        })
````


