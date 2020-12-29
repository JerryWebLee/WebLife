# AJAX简述

Ajax的主要优势就是对页面的请求以异步方式发送到服务器。而服务器不会用整个页面来响应请求，它会在后台处理请求，与此同时用户还能继续浏览页面并与页面交互。你的脚本则可以按需加载和创建页面内容，而不会打断用户的浏览体验。

## XMLHttpRequest对象

Ajax技术的核心就是XMLHttpRequest对象。这个对象充当着浏览器中的脚本（客户端）与服务器之间的中间人的角色。以往的请求都由浏览器发出，而JavaScript通过这个对象可以自己发送请求，同时也自己处理响应。

微软最早在IE5中以ActiveX对象的形式实现了一个名叫XMLHTTP的对象。在IE中创建新的对象要使用下列代码：

```javascript
var request = new ActiveXObject("Msxml2.XMLHTTP.3.0");
```

其他浏览器则基于XMLHttpRequest来创建新对象：

```javascript
var request = new XMLHttpRequest();
```

更麻烦的是，不同IE版本中使用的XMLHTTP对象也不完全相同。为了兼容所有浏览器，getHTTPObject.js文件中的getHTTPObject函数要这样来写：

```javascript
function getHTTPObject() {
  if (typeof XMLHttpRequest == 'undefined')
    XMLHttpRequest = function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e) { }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e) { }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) { }
      return false;
    };
  return new XMLHttpRequest();
}
```

XMLHttpRequest对象有许多的方法。其中最有用的是open方法，它用来指定服务器上将要访问的文件，指定请求类型：GET、POST或SEND。这个方法的第三个参数(true or false)用于指定请求是否以异步方式发送和处理。

```html
		<script src="./getHTTPObject.js"></script>
    <script>
      const request = getHTTPObject();
      if (request) {
        request.open('GET', 'test.txt', true);
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            let pNode = document.createElement('p');
            let txtNode = document.createTextNode(request.responseText);
            pNode.appendChild(txtNode);
            document.body.appendChild(pNode);
          }
        };
        request.send(null);
      } else {
        alert("Sorry, your browser doesn't support XMLHttpRequest");
      }
    </script>
```

服务器在向XMLHttpRequest对象发回响应时，该对象有许多属性可用，浏览器会在不同阶段更新readyState属性的值，它有5个可能的值：

- 0表示未初始化
- 1表示正在加载
- 2表示加载完毕
- 3表示正在交互
- 4表示完成

只要readyState属性的值变成了4，就可以访问服务器发送回来的数据了。

访问服务器发送回来的数据要通过两个属性完成。一个是responseText属性，这个属性用于保存文本字符串形式的数据。另一个属性是responseXML属性，用于保存Content-Type头部中指定为"text/xml"的数据，其实是一个DocumentFragment对象。你可使用各种DOM方法来处理这个对象。而这也正是XMLHttpRequest这个名称里有XML的原因。

注意　在使用Ajax时，千万要注意同源策略。使用XMLHttpRequest对象发送的请求只能访问与其所在的HTML处于同一个域中的数据，不能向其他域发送请求。此外，有些浏览器还会限制Ajax请求使用的协议。比如在Chrome中，如果你使用file://协议从自己的硬盘里加载example.txt文件，就会看到“Cross origin requests are only supported for HTTP”（跨域请求只支持HTTP协议）的错误消息。

异步请求有一个容易被忽略的问题是异步性，就是脚本在发送XMLHttpRequest请求之后，仍然会继续执行，不会等待响应返回。

## 渐进增强与Ajax

构建Ajax网站的最好方法，也是先构建一个常规的网站，然后Hijax它。

## Hijax

Ajax应用主要依赖后台服务器，实际上是服务器端的脚本语言完成了绝大部分工作。XMLHttpRequest对象作为浏览器与服务器之间的“中间人”，它只是负责传递请求和响应。如果把这个中间人请开，浏览器与服务器之间的请求和响应应该继续完成（而不是中断），只不过花的时间可能会长一点点。

想一想登录表单，构建它最简单的办法就是按照老传统，让表单把整个页面都提交到服务器，然后服务器再发回来一个包含反馈的新页面。所有处理操作都在服务器上完成，而用户在表单中输入的数据则由服务器负责取得并与保存在数据库里的数据进行比较，看是不是真的存在这么个用户。

然后，为了给这个登录表单添加Ajax功能，就需要拦截提交表单的请求（Hijax嘛），让XMLHttpRequest请求来代为发送。提交表单触发的是submit事件，因此只要通过onsubmit事件处理函数捕获该事件，就可以取消它的默认操作（提交整个页面），然后代之以一个新的操作：通过XMLHttpRequest对象向服务器发送数据。

拦截了登录表单的提交请求之后，登录过程就可以让用户感觉更方便。响应时间加快了，不必刷新整个页面了。可是，万一用户的浏览器没有启动JavaScript呢？没关系，登录表单照样能让用户正常登录。只不过所花时间要长一点，用户体验没有那么流畅罢了。毕竟，处理登录验证的操作都在服务器上啊，有什么理由让没有JavaScript的用户不能登录呢！

请大家记住这个事实，Ajax应用主要依赖于服务器端处理，而非客户端处理。既然如此，它就没有理由不能做到平稳退化。不可否认，有些应用如果没有了Ajax而只依靠页面刷新，用户的每一次操作可能都要等很长时间。但慢一点的退化的体验，是不是仍然要比完全没有体验更好呢？

