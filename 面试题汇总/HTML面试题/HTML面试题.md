# HTML面试题

------

## 目录

* [页面导入样式时使用link和import有什么区别](#页面导入样式时使用link和import有什么区别)
  
  * [区别](#区别)
  * [扩展](#扩展)
* [html的元素有哪些](#html的元素有哪些)

  * [行内元素](#行内元素)
  * [块元素](#块元素)
  * [H5新增元素](#H5新增元素)
* [HTML全局属性globalattribute有哪些](#HTML全局属性globalattribute有哪些)
* [HTML5的文件离线储存怎么使用工作原理是什么](#HTML5的文件离线储存怎么使用工作原理是什么)
* [简述超链接target属性的取值和作用](#简述超链接target属性的取值和作用)



------

## 页面导入样式时使用link和import有什么区别

### 区别

- 区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- 区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
  所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)
- 区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
- 区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。

### 扩展

**在html设计制作中，css有四种引入方式：**

#### 方式一： 内联样式

内联样式，也叫行内样式，指的是直接在 HTML 标签中的 style 属性中添加 CSS。
示例：

```HTML
<div style="display: none;background:red"></div>
```

这通常是个很糟糕的书写方式，它只能改变当前标签的样式，如果想要多个 `<div>` 拥有相同的样式，你不得不重复地为每个 `<div>` 添加相同的样式，如果想要修改一种样式，又不得不修改所有的 style 中的代码。很显然，内联方式引入 CSS 代码会导致 HTML 代码变得冗长，且使得网页难以维护。

#### 方式二： 嵌入样式

嵌入方式指的是在 HTML 头部中的 `<style>` 标签下书写 CSS 代码。
示例：

```html
<head>
    <style>

    .content {
        background: red;
    }
    </style>
</head>
```

嵌入方式的 CSS 只对当前的网页有效。因为 CSS 代码是在 HTML 文件中，所以会使得代码比较集中，当我们写模板网页时这通常比较有利。因为查看模板代码的人可以一目了然地查看 HTML 结构和 CSS 样式。因为嵌入的 CSS 只对当前页面有效，所以当多个页面需要引入相同的 CSS 代码时，这样写会导致代码冗余，也不利于维护。

#### 方式三：链接样式

链接方式指的是使用 HTML 头部的 标签引入外部的 CSS 文件。
示例：

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

这是最常见的也是最推荐的引入 CSS 的方式。使用这种方式，所有的 CSS 代码只存在于单独的 CSS 文件中，所以具有良好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件会在第一次加载时引入，以后切换页面时只需加载 HTML 文件即可。

#### 方式四：导入样式

导入方式指的是使用 CSS 规则引入外部 CSS 文件。
示例：

```html
<style>
    @import url(style.css);
</style>
```

或者写在css样式中

```css
@charset "utf-8";
@import url(style.css);
*{ margin:0; padding:0;}
.notice-link a{ color:#999;}
```

* [返回目录](#目录)

------

## html的元素有哪些

### 行内元素

- a
- b
- span
- strong
- i
- em
- button
- input
- label
- br
- textarea
- select

### 块元素

- div
- p
- h1-h6
- ol
- ul
- li
- table
- tbody
- td
- tr
- thead
- dl
- dt
- dd

### H5新增元素

- section
- article
- audio
- video
- hearder
- footer
- small
- canvas
- title



* [返回目录](#目录)

------

## HTML全局属性globalattribute有哪些

| 属性               | 描述                                                       |
| ------------------ | ---------------------------------------------------------- |
| accesskey          | 设置访问元素的键盘快捷键。                                 |
| class              | 规定元素的类名（classname）                                |
| contenteditableNew | 规定是否可编辑元素的内容。                                 |
| contextmenuNew     | 指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单 |
| data-*New          | 用于存储页面的自定义数据                                   |
| dir                | 设置元素中内容的文本方向。                                 |
| draggableNew       | 指定某个元素是否可以拖动                                   |
| dropzoneNew        | 指定是否将数据复制，移动，或链接，或删除                   |
| hiddenNew          | hidden 属性规定对元素进行隐藏。                            |
| id                 | 规定元素的唯一 id                                          |
| lang               | 设置元素中内容的语言代码。                                 |
| spellcheckNew      | 检测元素是否拼写错误                                       |
| style              | 规定元素的行内样式（inline style）                         |
| tabindex           | 设置元素的 Tab 键控制次序。                                |
| title              | 规定元素的额外信息（可在工具提示中显示）                   |
| translateNew       | 指定是否一个元素的值在页面载入时是否需要翻译               |

参考[MDN:全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)

------

## HTML5的文件离线储存怎么使用工作原理是什么

HTML5 的离线存储
[HTML5 存储方式](https://segmentfault.com/a/1190000011516871)
[HTML5 离线存储原理](https://segmentfault.com/a/1190000006984353)

[有趣的HTML5：离线存储](https://segmentfault.com/a/1190000000732617)

离线存储是在 HTML 5 中创建 `cache manifest` 文件来实现 Web 应用的离线版本的。

离线存储有这么几个好处：**没有网络时可以浏览**、**加快资源的加载速度**、**减少服务器负载**

离线存储的相关配置在 `.appcache` 文件中。
通过配置 `CACHE MANIFEST`, `NETWORK`, `FALLBACK` 来控制需要被缓存的文件。
JavaScript 也暴露了 `applicationCache` API 让我们手动进行缓存的刷新。



* [返回目录](#目录)

------

## 简述超链接target属性的取值和作用

1. _self 在自身所处的框架（包括iframe）中打开
2. _blank 在新窗口打开（就算在iframe里面也是）
3. __parent 在父框架中打开（比如你在页面中嵌套一个iframe1，再在iframe1里面嵌套一个iframe2，那么iframe2里的超链接就会在iframe1打开，并且会覆盖iframe1的所有内容）
4. __top 不管嵌套多少层iframe，都会在最顶层打开_
5. '任意字符'与_blank一致，只是如果打开，就只会刷新已打开的窗口

* [返回目录](#目录)

------

