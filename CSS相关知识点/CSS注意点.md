# CSS注意点

## 解决IE6下position：fixed失效问题

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box1 {
        position: fixed;
        width: 100px;
        height: 100px;
        background-color: yellow;
      }
      #box2 {
        width: 300px;
        height: 2000px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>

```

上述代码box1在IE6及以下浏览器下`position：fixed`失效



下面的代码用于观察浏览器默认滚动条在哪个元素身上，是html，还是body

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        margin: 10px;
        border: 2px solid red;
        height: 100%;
      }
      body {
        margin: 20px;
        border: 5px solid yellow;
      }
      #box1 {
        height: 2000px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
  </body>
</html>

```

通过观察上述代码的网页可知，浏览器默认滚动条在html的上一层，即文档（document），根标签的包含块即初始包含块，初始包含块的大小即浏览器视窗大小的矩形。

如果html、body只有一个有`overflow：auto/scroll`，或者都没有，那么滚动条会作用在文档上，即document上。如果html和body都有`overflow：auto/scroll`，当body中的元素高度超过页面高度时，滚动条出现在body上。当body元素超过页面视口高度时，滚动条出现在文档（document）上。

见如下代码示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        margin: 0;
        padding: 0;
        border: 2px solid red;
        height: 100%;
        overflow: auto;
      }
      body {
        height: 1000px;
        margin: 0 10px;
        padding: 0;
        border: 5px solid yellow;
        overflow: auto;
      }
      #box1 {
        height: 2000px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
  </body>
</html>

```

下面的代码静止浏览器默认滚动条：

```
			html{
        height: 100%;
        overflow: hidden;
      }
```

下面的代码模拟在禁止系统滚动条的情况下，开启body的滚动条，才能达到使用`position:absolute`模拟`fixed`的效果，在这种情况下，拖动的是body的滚动条，初始包含块位置没有变化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      /* 禁止浏览器默认滚动条 */
      html {
        height: 100%;
        overflow: hidden;
      }
      body {
        height: 100%;
        overflow: scroll;
      }
      #box1 {
        /* box1开启的绝对定位相对于视口的位置，因为视口是固定的，所以box1不变
            禁止系统滚动条以后，开启body身上的滚动条才能达到使用position：absolute模拟
            fixed的情况
        */
        position: absolute;
        left: 100px;
        height: 100px;
        width: 100px;
        height: 100px;
        background-color: yellow;
      }
      #box2 {
        width: 300px;
        height: 2000px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>

```

## 使用Can I use

https://www.caniuse.com/

使用该网站查询浏览器对某些技术和属性的是否支持

## BFC块级格式化上下文

参考https://www.cnblogs.com/nujufoul/p/7092520.html#collapsing-margins

它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

BFC指的是一个块级元素，在网页中怎么去渲染。管理的是开启了BFC的元素里面的块级元素；

提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。也可以说BFC就是一个作用范围。可以把它理解成是一个独立的容器，并且这个容器的里box的布局，与这个容器外的毫不相干。

**BFC布局规则：**

1. 内部的box会在垂直方向一个接一个的放置
2. 开启了BFC的区域不会与float box重叠
3. 内部的box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠
4. 计算BFC的高度时，浮动元素也参与计算
5. BFC就是页面上一个独立的隔离容器，容器里的子元素不会影响外面的元素，反之也是

**BFC什么时候出现，哪写元素会生成BFC？**

1. 根元素
2. float属性不会none
3. position为absolute或fixed
4. overflow不为visible
5. display为inline-block，table-cell，table-caption，flex，inline-flex

## 文本省略号固定样式代码

```css
			{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
```



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box {
        width: 100px;
        height: 200px;
        border: 1px solid;
      }
      /* 超出文本显示省略号 ，固定样式代码*/
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
  </head>
  <body>
    <div id="box">
      <p>sadsdshjfgdsfgsdhsjagdhjasgsadjashdjkashdjkashdkashdjakshdjka</p>
      <p>sadsdshjfgdsfgsdhsjagdhjasgsadjashdjkashdjkashdkashdjakshdjka</p>
      <p>sadsdshjfgdsfgsdhsjagdhjasgsadjashdjkashdjkashdkashdjakshdjka</p>
    </div>
  </body>
</html>

```

## 清除浮动

给浮动元素的父级元素加clearfix类

```css
		.clearfix:before, .clearfix:after {
        content: ""; 
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
		/* IE6以下不支持伪元素，触发haslayout */
    .clearfix {
        *zoom: 1;
    }
```

## CSS hack

写 CSS 样式的时候，恐怕最头疼的就是各个浏览器下的兼容性问题，即 CSS hack，不同的浏览器对 CSS 的解析结果是不同的，因此会导致相同的 CSS 输出的页面效果不同，这就需要 CSS hack来解决浏览器局部的兼容性问题。使用 CSS 、 hack将会使用你的 CSS 代码部分失去作用，然后借助条件样式，使用其原 CSS 代码在一些浏览器解析，而 CSS hack代码在符合条件要求的浏览器中替代原 CSS 那部分代码。

CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack 就是让你记住这个标准），以达到应用不同的 CSS 样式的目的，比如 `.kwstu{width:300px;_width:200px;}`，一般浏览器会先给元素使用 `width:300px;` 的样式，紧接着后面还有个`_width:200px`; 由于下划线 _width 只有 IE6 可以识别，所以此样式在 IE6 中实际设置对象的宽度为`200px`，后面的把前面的给覆盖了，而其他浏览器不识别 `_width` 不会执行 `_width:200px`; 这句样式，所以在其他浏览器中设置对象的宽度就是 300px;

简单地讲， CSS hack 指各版本及各品牌浏览器之间对 CSS 解释后出现网页内容的误差(比如我们常说错位)的处理。由于各浏览器的内核不同，所以会造成一些误差就像 JS 一样，一个 JS 网页特效，在微软 IE6、IE7、IE8 浏览器有效果，但可能在火狐（Mozilla Firefox）谷歌浏览器无效，这样就叫做 JS hack ，所以我们对于 CSS 来说他们来解决各浏览器对 CSS 解释不同所采取的区别不同浏览器制作不同的 CSS 样式的设置来解决这些问题就叫作 CSS Hack。

**CSS Hack常见的有三种形式：**CSS 属性 Hack、CSS 选择符 Hack 以及 IE 条件注释 Hack， Hack 主要针对IE 浏览器。


1、属性级 Hack：比如 IE6 能识别下划线`_`和星号` * `，IE7 能识别星号` * `，但不能识别下划线`_`，而 firefox 两个都不能认识。


2、选择符级 Hack：比如 IE6 能识别 *html .class{}，IE7能识别 *+html .class{} 或者 *:first-child+html .class{}。


3、IE 条件注释 Hack：IE条件注释是微软从 IE5 开始就提供的一种非标准逻辑语句。比如针对所有IE：`<!–[if IE]><!–您的代码–><![endif]–>`，针对 IE6 及以下版本：`<!--[if lt IE 7]><!--您的代码--><![endif]–>`，这类 Hack 不仅对 CSS 生效，对写在判断语句里面的所有代码都会生效。


PS：条件注释只有在 IE 浏览器下才能执行，这个代码在非 IE 浏览下被当做注释视而不见。可以通过IE条件注释载入不同的 CSS、JS、HTML 和服务器代码等。

**提示：**有个 CSS hack 三种常见形式的更多解释，你可以查阅《CSS3学习笔记》的“[CSS hack合集](https://www.w3cschool.cn/lugfe/lugfe-vxfp25zq.html)”部分的内容。

```text
<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->

<!--[if IE]> 所有的IE可识别 <![endif]-->

<!--[if IE 6]> 仅IE6可识别 <![endif]-->

<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->

<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->

<!--[if IE 7]> 仅IE7可识别 <![endif]-->

<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->

<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->

<!--[if IE 8]> 仅IE8可识别 <![endif]-->

<!--[if IE 9]> 仅IE9可识别 <![endif]-->
```

从上表可以分析出以下几种情况：

1. 大部分特殊字符 IE 浏览器支持，其他主流浏览器 firefox，chrome，opera，safari不支持 (opera 可识别除外)。
2. \9   ：所有 IE 浏览器都支持
3. _和-  ：仅 IE6 支持
4. \* ：IE6、E7 支持
5. \0   ：IE8、IE9 支持，opera 部分支持
6. \9\0  ：IE8 部分支持、IE9 支持
7. \0\9  ：IE8、IE9 支持

**检测IE浏览器版本：**

```javascript
			function isIE(version) {
        // 虽然没有将b元素插入文档，但仍然可以找到该节点
        var b = document.createElement('b');
        b.innerHTML = '<!--[if IE ' + version + ']> <i></i> <![endif]-->';
        return b.getElementsByTagName('i').length === 1;
      }
```

## vertical-align

用来指定inline-block的垂直对齐方式，经常会在img上使用该属性；