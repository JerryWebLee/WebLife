# CSS面试题

------

## 目录

* [圣杯布局和双飞翼布局的理解和区别，并用代码实现](#圣杯布局和双飞翼布局的理解和区别，并用代码实现)
	* [作用](#作用)
	* [区别](#区别)
	* [圣杯布局代码](#圣杯布局代码)
	* [双飞翼布局代码](#双飞翼布局代码)
* [CSS3有哪些新增的特性](#CSS3有哪些新增的特性)
	* [边框borders](#边框borders)
	* [背景](#背景)
	* [渐变](#渐变)
	* [文本效果](#文本效果)
	* [转换](#转换)
	* [3D转换](#3D转换)
	* [过渡](#过渡)
	* [动画](#动画)
	* [媒体查询](#媒体查询)
	* [反射倒影](#反射倒影)
	* [颜色](#颜色)
	* [布局](#布局)
	* [box-sizing盒模型定义](#box-sizing盒模型定义)
* [在页面上隐藏元素的方法有哪些](#在页面上隐藏元素的方法有哪些)
* [CSS选择器有哪些哪些属性可以继承](#CSS选择器有哪些哪些属性可以继承)
  * [CSS选择器有哪些](#CSS选择器有哪些)
  * [参考css有哪些属性可以继承](#参考css有哪些属性可以继承)

------

## 圣杯布局和双飞翼布局的理解和区别，并用代码实现

这道题主考查布局的了解，同时也考查margin负值的情况

### 作用

​		圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。

### 区别

​		圣杯布局，为了中间`<div>`内容不被遮挡，将中间`<div>`设置了左右`padding-left`和`padding-right`后，将左右两个`<div>`用相对布局`position: relative`并分别配合`right`和`left`属性，以便左右两栏`<div>`移动后不遮挡中间`<div>`。

​		双飞翼布局，为了中间`<div>`内容不被遮挡，直接在中间`<div>`内部创建子`<div>`用于放置内容，在该子`<div>`里用`margin-left`和`margin-right`为左右两栏`<div>`留出位置。

### 圣杯布局代码

```html
<body>
<div id="hd">header</div>
<div id="bd">
  <div id="middle">middle</div>
  <div id="left">left</div>
  <div id="right">right</div>
</div>
<div id="footer">footer</div>
</body>

<style>
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#bd{
    /*左右栏通过添加负的margin放到正确的位置了，此段代码是为了摆正中间栏的位置*/
    padding:0 200px 0 180px;
    height:100px;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
    /*中间栏的位置摆正之后，左栏的位置也相应右移，通过相对定位的left恢复到正确位置*/
    position:relative;
    left:-180px;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
    /*中间栏的位置摆正之后，右栏的位置也相应左移，通过相对定位的right恢复到正确位置*/
    position:relative;
    right:-200px;
}
#footer{
    height:50px;
    background: #666;
    text-align: center;
}
</style>
```

### 双飞翼布局代码

```html
<body>
<div id="hd">header</div> 
  <div id="middle">
    <div id="inside">middle</div>
  </div>
  <div id="left">left</div>
  <div id="right">right</div>
  <div id="footer">footer</div>
</body>

<style>
#hd{
    height:50px;
    background: #666;
    text-align: center;
}
#middle{
    float:left;
    width:100%;/*左栏上去到第一行*/     
    height:100px;
    background:blue;
}
#left{
    float:left;
    width:180px;
    height:100px;
    margin-left:-100%;
    background:#0c9;
}
#right{
    float:left;
    width:200px;
    height:100px;
    margin-left:-200px;
    background:#0c9;
}

/*给内部div添加margin，把内容放到中间栏，其实整个背景还是100%*/ 
#inside{
    margin:0 200px 0 180px;
    height:100px;
}
#footer{  
   clear:both; /*记得清楚浮动*/  
   height:50px;     
   background: #666;    
   text-align: center; 
} 
</style>
```

------

## CSS3有哪些新增的特性

### 边框borders

- border-radius 圆角
- box-shadow 盒阴影
- border-image 边框图像

### 背景

- background-size 背景图片的尺寸
- background_origin 背景图片的定位区域
- background-clip 背景图片的绘制区域

### 渐变

- linear-gradient 线性渐变
- radial-gradient 径向渐变

### 文本效果

- word-break:normal|break-all|keep-all; 换行
- word-wrap
- text-overflow
- text-shadow
- text-wrap
- text-outline
- text-justify

### 转换

- 2D转换属性
- transform
- transform-origin
- 2D转换方法
- translate(x,y)
- translateX(n)
- translateY(n)
- rotate(angle)
- scale(n)
- scaleX(n)
- scaleY(n)
- rotate(angle)
- matrix(n,n,n,n,n,n)

### 3D转换

#### 3D转换属性：

- transform
- transform-origin
- transform-style

#### 3D转换方法

- translate3d(x,y,z)
- translateX(x)
- translateY(y)
- translateZ(z)
- scale3d(x,y,z)
- scaleX(x)
- scaleY(y)
- scaleZ(z)
- rotate3d(x,y,z,angle)
- rotateX(x)
- rotateY(y)
- rotateZ(z)
- perspective(n)

### 过渡

- transition

### 动画

- [@Keyframes](https://github.com/Keyframes)规则
- animation

### 媒体查询

[@media](https://github.com/media)

### 反射倒影

- -webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图片

### 颜色

- rgba
- hsla

### 布局

- flex弹性布局
- grid栅格布局
- column-count多列布局

### box-sizing盒模型定义

------

## 在页面上隐藏元素的方法有哪些

- display: none
- opacity: 0
- visibility: hidden
- z-index: -9999999999999
- transform: scale(0)
- margin-left: -100%
- position: relative; left: -100%
- width: 0; height: 0;

------

## CSS选择器有哪些哪些属性可以继承

### CSS选择器有哪些

参考[速查文档](http://css.cuishifeng.cn/all.html)

| 选择器               | 例子                  | 例子描述                                       | CSS  |
| -------------------- | --------------------- | ---------------------------------------------- | ---- |
| .class               | .intro                | 选择 class="intro" 的所有元素。                | 1    |
| #id                  | #firstname            | 选择 id="firstname" 的所有元素。               | 1    |
| *                    | *                     | 选择所有元素。                                 | 2    |
| element              | p                     | 选择所有元素。                                 | 1    |
| element,element      | div,p                 | 选择所有元素和所有元素。                       | 1    |
| element element      | div p                 | 选择元素内部的所有元素。                       | 1    |
| element>element      | div>p                 | 选择父元素为元素的所有元素。                   | 2    |
| element+element      | div+p                 | 选择紧接在元素之后的所有元素。                 | 2    |
| [attribute]          | [target]              | 选择带有 target 属性所有元素。                 | 2    |
| [attribute=value]    | [target=_blank]       | 选择 target="_blank" 的所有元素。              | 2    |
| [attribute~=value]   | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。  | 2    |
| [attribute\|=value]  | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。       | 2    |
| :link                | a:link                | 选择所有未被访问的链接。                       | 1    |
| :visited             | a:visited             | 选择所有已被访问的链接。                       | 1    |
| :active              | a:active              | 选择活动链接。                                 | 1    |
| :hover               | a:hover               | 选择鼠标指针位于其上的链接。                   | 1    |
| :focus               | input:focus           | 选择获得焦点的 input 元素。                    | 2    |
| :first-letter        | p:first-letter        | 选择每个元素的首字母。                         | 1    |
| :first-line          | p:first-line          | 选择每个元素的首行。                           | 1    |
| :first-child         | p:first-child         | 选择属于父元素的第一个子元素的每个元素。       | 2    |
| :before              | p:before              | 在每个元素的内容之前插入内容。                 | 2    |
| :after               | p:after               | 在每个元素的内容之后插入内容。                 | 2    |
| :lang(language)      | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个元素。 | 2    |
| element1~element2    | p~ul                  | 选择前面有元素的每个元素。                     | 3    |
| [attribute^=value]   | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 元素。  | 3    |
| [attribute$=value]   | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 元素。     | 3    |
| [attribute*=value]   | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 元素。  | 3    |
| :first-of-type       | p:first-of-type       | 选择属于其父元素的首个元素的每个元素。         | 3    |
| :last-of-type        | p:last-of-type        | 选择属于其父元素的最后元素的每个元素。         | 3    |
| :only-of-type        | p:only-of-type        | 选择属于其父元素唯一的元素的每个元素。         | 3    |
| :only-child          | p:only-child          | 选择属于其父元素的唯一子元素的每个元素。       | 3    |
| :nth-child(n)        | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个元素。     | 3    |
| :nth-last-child(n)   | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。               | 3    |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择属于其父元素第二个元素的每个元素。         | 3    |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。           | 3    |
| :last-child          | p:last-child          | 选择属于其父元素最后一个子元素每个元素。       | 3    |
| :root                | :root                 | 选择文档的根元素。                             | 3    |
| :empty               | p:empty               | 选择没有子元素的每个元素（包括文本节点）。     | 3    |
| :target              | #news:target          | 选择当前活动的 #news 元素。                    | 3    |
| :enabled             | input:enabled         | 选择每个启用的 元素。                          | 3    |
| :disabled            | input:disabled        | 选择每个禁用的 元素                            | 3    |
| :checked             | input:checked         | 选择每个被选中的 元素。                        | 3    |
| :not(selector)       | :not(p)               | 选择非元素的每个元素。                         | 3    |
| ::selection          | ::selection           | 选择被用户选取的元素部分。                     | 3    |

### 参考css有哪些属性可以继承

参考[css有哪些属性可以继承？](https://www.jianshu.com/p/fbfc6c751e34)

#### 有继承性的属性：

- ##### 字体系列属性

  - font：组合字体
  - font-family：规定元素的字体系列
  - font-weight：设置字体的粗细
  - font-size：设置字体的尺寸
  - font-style：定义字体的风格
  - font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
  - font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。
  - font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与"font-size" 高度之间的比率被称为一个字体的 aspect 值。这样就可以保持首选字体的 x-height。

- ##### 文本系列属性

  - text-indent：文本缩进
  - text-align：文本水平对齐
  - line-height：行高
  - word-spacing：增加或减少单词间的空白（即字间隔）
  - letter-spacing：增加或减少字符间的空白（字符间距）
  - text-transform：控制文本大小写
  - direction：规定文本的书写方向
  - color：文本颜色

- ##### 元素可见性：

  - visibility

- ##### 表格布局属性：

  - caption-side、border-collapse、border-spacing、empty-cells、table-layout

- ##### 列表属性：

  - list-style-type、list-style-image、list-style-position、list-style

- ##### 生成内容属性：

  - quotes

- ##### 光标属性：

  - cursor

- ##### 页面样式属性：

  - page、page-break-inside、windows、orphans

- ##### 声音样式属性：

  - speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

#### 所有元素可以继承的属性：

1. 元素可见性：visibility、opacity  
2. 光标属性：cursor

####  内联元素可以继承的属性:

1. 字体系列属性
2. 除text-indent、text-align之外的文本系列属性

#### 块级元素可以继承的属性:

- text-indent、text-align

#### 无继承的属性

1. display
2. 文本属性：
   - vertical-align：
   - text-decoration：
   - text-shadow：
   - white-space：
   - unicode-bidi：
3.  盒子模型的属性:宽度、高度、内外边距、边框等
4. 背景属性：背景图片、颜色、位置等
5. 定位属性：浮动、清除浮动、定位position等
6. 生成内容属性:content、counter-reset、counter-increment
7. 轮廓样式属性:outline-style、outline-width、outline-color、outline
8. 页面样式属性:size、page-break-before、page-break-after

#### 继承中比较特殊的几点

1. a 标签的字体颜色不能被继承

2. h1-h6标签字体的大下也是不能被继承的，

   因为它们都有一个默认值

------

