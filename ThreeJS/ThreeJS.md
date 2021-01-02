# ThreeJS

## 图形学基础



一个典型的Three.js程序至少要包括**渲染器（Renderer）**、**场景（Scene）**、**照相机（Camera）**，以及你在场景中创建的物体。它封装了诸如场景、灯光、阴影、材质、贴图、空间运算等一系列功能，让你不必要再从底层WebGL开始写起。

在我们开始前，让我们试着让你了解一下一个three.js应用的整体结构。一个three.js应用需要创建很多对象，并且将他们关联在一起。下图是一个基础的three.js应用结构。

![threejs结构](https://threejsfundamentals.org/threejs/lessons/resources/images/threejs-structure.svg)

- 首先有一个[渲染器(`Renderer`)](https://threejs.org/docs/#api/zh/constants/Renderer)。这可以说是three.js的主要对象。你传入一个[场景(`Scene`)](https://threejs.org/docs/#api/zh/scenes/Scene)和一个[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)到[渲染器(`Renderer`)](https://threejs.org/docs/#api/zh/constants/Renderer)中，然后它会将摄像机视椎体中的三维场景渲染成一个二维图片显示在画布上。

- 其次有一个[场景图](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-scenegraph.html) 它是一个树状结构，由很多对象组成，比如图中包含了一个[场景(`Scene`)](https://threejs.org/docs/#api/zh/scenes/Scene)对象 ，多个[网格(`Mesh`)](https://threejs.org/docs/#api/zh/objects/Mesh)对象，[光源(`Light`)](https://threejs.org/docs/#api/zh/lights/Light)对象，[群组(`Group`)](https://threejs.org/docs/#api/zh/objects/Group)，[三维物体(`Object3D`)](https://threejs.org/docs/#api/zh/core/Object3D)，和[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)对象。一个[场景(`Scene`)](https://threejs.org/docs/#api/zh/scenes/Scene)对象定义了场景图最基本的要素，并包了含背景色和雾等属性。这些对象通过一个层级关系明确的树状结构来展示出各自的位置和方向。子对象的位置和方向总是相对于父对象而言的。比如说汽车的轮子是汽车的子对象，这样移动和定位汽车时就会自动移动轮子。你可以在[场景图](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-scenegraph.html)的这篇文章中了解更多内容。

  注意图中[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)是一半在场景图中，一半在场景图外的。这表示在three.js中，[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)和其他对象不同的是，它不一定要在场景图中才能起作用。相同的是，[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)作为其他对象的子对象，同样会继承它父对象的位置和朝向。在[场景图](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-scenegraph.html)这篇文章的结尾部分有放置多个[摄像机(`Camera`)](https://threejs.org/docs/#api/zh/cameras/Camera)在一个场景中的例子。

- [网格(`Mesh`)](https://threejs.org/docs/#api/zh/objects/Mesh)对象可以理解为用一种特定的[材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)来绘制的一个特定的[几何体(`Geometry`)](https://threejs.org/docs/#api/zh/core/Geometry)。[材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)和[几何体(`Geometry`)](https://threejs.org/docs/#api/zh/core/Geometry)可以被多个[网格(`Mesh`)](https://threejs.org/docs/#api/zh/objects/Mesh)对象使用。比如在不同的位置画两个蓝色立方体，我们会需要两个[网格(`Mesh`)](https://threejs.org/docs/#api/zh/objects/Mesh)对象来代表每一个立方体的位置和方向。但只需一个[几何体(`Geometry`)](https://threejs.org/docs/#api/zh/core/Geometry)来存放立方体的顶点数据，和一种[材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)来定义立方体的颜色为蓝色就可以了。两个[网格(`Mesh`)](https://threejs.org/docs/#api/zh/objects/Mesh)对象都引用了相同的[几何体(`Geometry`)](https://threejs.org/docs/#api/zh/core/Geometry)和[材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)。

- [几何体(`Geometry`)](https://threejs.org/docs/#api/zh/core/Geometry)对象顾名思义代表一些几何体，如球体、立方体、平面、狗、猫、人、树、建筑等物体的顶点信息。Three.js内置了许多[基本几何体](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-primitives.html) 。你也可以[创建自定义几何体](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-custom-geometry.html)或[从文件中加载几何体](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-load-obj.html)。

- [材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)对象代表[绘制几何体的表面属性](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-materials.html)，包括使用的颜色，和光亮程度。一个[材质(`Material`)](https://threejs.org/docs/#api/zh/materials/Material)可以引用一个或多个[纹理(`Texture`)](https://threejs.org/docs/#api/zh/textures/Texture)，这些纹理可以用来，打个比方，将图像包裹到几何体的表面。

- [纹理(`Texture`)](https://threejs.org/docs/#api/zh/textures/Texture)对象通常表示一幅要么[从文件中加载](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-textures.html)，要么[在画布上生成](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-canvas-textures.html)，要么[由另一个场景渲染出](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-rendertargets.html)的图像。

- [光源(`Light`)](https://threejs.org/docs/#api/zh/lights/Light)对象代表[不同种类的光](https://threejsfundamentals.org/threejs/lessons/zh_cn/threejs-lights.html)。

## 顶点

```
// 顶点坐标
var vertices = new Float32Array([
	0,0,0, // 顶点1坐标
	50,0,0, // 顶点2坐标
	0,100,0, // 顶点3坐标
	0,0,10, // 顶点4坐标
	0,0,100, // 顶点5坐标
	50,0,10, // 顶点6坐标
])
// 创建一个几何体基类对象，创建属性缓冲区
var attribute = new THREE.BufferAttribute(vertices,3)
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;
```



## 渲染器

渲染器负责将你提供的所有数据渲染绘制到canvas上；

渲染器将和Canvas元素进行绑定，如果之前在HTML中手动定义了id为mainCanvas的Canvas元素，那么Renderer可以这样写：

```javascript
var renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById('mainCanvas')
});
```

而如果想要Three.js生成Canvas元素，在HTML中就不需要定义Canvas元素，在JavaScript代码中可以这样写：

```javascript
var renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300);
document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
```

## 场景（Scene）

在Three.js中添加的物体都是添加到场景中的，因此它相当于一个大容器。一般说，场景
来没有很复杂的操作，在程序最开始的时候进行实例化，然后将物体添加到场景中即可。

Three.js 的核心可以说是它的场景图（scene gprah）。场景图在 3D 引擎是一个图中节点的层次结构，其中每个节点代表了一个局部空间（local space）。

```javascript
var scene = new THREE.Scene();
```

![](https://threejsfundamentals.org/threejs/lessons/resources/images/scenegraph-generic.svg)

## 照相机（Camera）

WebGL和Three.js使用的坐标系是右手坐标系

我们使用Three.js创建的场景是三维的，而通常情况下显示屏是二维的，那么三维的场景如何显示到二维的显示屏上呢？照相机就是这样一个抽象，它定义了三维空间到二维屏幕的投影方式，用“照相机”这样一个类比，可以使我们直观地理解这一投影方式。

而针对投影方式的不同，照相机又分为正交投影照相机与透视投影照相机。我们需要为自己的程序选择合适的照相机。

举个简单的例子来说明正交投影与透视投影照相机的区别。使用透视投影照相机获得的结果是类似人眼在真实世界中看到的有“近大远小”的效果；而使用正交投影照相机获得的结果就像我们在数学几何学课上老师教我们画的效果，对于在三维空间内平行的线，投影到二维空间中也一定是平行的。

一般说来，对于制图、建模软件通常使用正交投影，这样不会因为投影而改变物体比例；而对于其他大多数应用，通常使用透视投影，因为这更接近人眼的观察效果。

正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：

```
THREE.OrthographicCamera(left, right, top, bottom, near, far)
```

为了保持照相机的横竖比例，需要保证(right - left)与(top - bottom)的比例与Canvas宽度与高度的比例一致。

这里，我们定义了一个透视投影的照相机

```JavaScript
				// 自动生成canvas元素
        var renderer = new THREE.WebGLRenderer();
        // 设置画布尺寸
        renderer.setSize(500, 500);
        // 将背景色（用于清除画面的颜色）设置为黑色
        renderer.setClearColor(0xaaaaaa);
        document.body.appendChild(renderer.domElement);
        // 场景
        var scene = new THREE.Scene();
        // 相机
        var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
        camera.position.set(0, 0, 5);
        scene.add(camera);
```

```
const fov = 75;
const aspect = 2;  // 相机默认值
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
```

`fov`是视野范围(field of view)的缩写。上述代码中是指垂直方向为75度。 注意three.js中大多数的角用弧度表示，但是因为某些原因透视摄像机使用角度表示。

`aspect`指画布的宽高比。我们将在别的文章详细讨论，在默认情况下 画布是300x150像素，所以宽高比为300/150或者说2。aspect等于width / height，是照相机水平方向和竖直方向长度的比值，通常设为
Canvas的横纵比例。

`near`和`far`代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。

这四个参数定义了一个 *"视椎(frustum)"*。 *视椎(frustum)*是指一个像被削去顶部的金字塔形状。换句话说，可以把"视椎(frustum)"想象成其他三维形状如球体、立方体、棱柱体、截椎体。

![](https://threejsfundamentals.org/threejs/lessons/resources/frustum-3d.svg)

近平面和远平面的高度由视野范围决定，宽度由视野范围和宽高比决定。

视椎体内部的物体将被绘制，视椎体外的东西将不会被绘制。

摄像机默认指向Z轴负方向，上方向朝向Y轴正方向。我们将会把立方体放置在坐标原点，所以我们需要往后移一下摄像机才能显示出物体。

```javascript
camera.position.z = 2;
```



### 代码示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- <canvas id="myCanvas"></canvas> -->
    <script src="../three.js源码/three.js"></script>
    <script>
      window.onload = function () {
        // 渲染器
        // 渲染器将和Canvas元素进行绑定,
        // 绑定到已有的canvas元素
        /* var renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('myCanvas'),
        });
        renderer.setSize(600, 400); */

        // 自动生成canvas元素
        var renderer = new THREE.WebGLRenderer();
        // 设置画布尺寸
        renderer.setSize(400, 300);
        // 将背景色（用于清除画面的颜色）设置为黑色,用法同css颜色一样
        renderer.setClearColor('0x000000');
        document.body.appendChild(renderer.domElement);
        // 场景
        var scene = new THREE.Scene();
        // 相机
        var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
        camera.position.set(0, 0, 5);
        scene.add(camera);
        // 创建一个包含盒子信息的几何立方体
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        // 创建一个基本材质并设置颜色
        const material = new THREE.MeshBasicMaterial({ color: 'red' });
        // 床架一个网格(mesh),包含几何体和材质
        const cube = new THREE.Mesh(geometry, material);
        // 将网格添加到场景中
        scene.add(cube);
        // 将场景和摄像机传递给渲染器来渲染出整个场景;
        renderer.render(scene, camera);
      };
    </script>
  </body>
</html>

```

## 几何形状

在创建物体时，需要传入两个参数，一个是几何形状（Geometry），另一个是材质（Material）。

几何形状（Geometry）最主要的功能是储存了一个物体的顶点信息。WebGL需要程序员指定每个顶点的位置，而在Three.js中，可以通过指定一些特征来创建几何形状，例如使用半径创建一个球体，从而省去程序员一个个指定顶点的工作量。

### 立方体

```javascript
THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
```

这里，width是x方向上的长度；height是y方向上的长度；depth是z方向上的长度；后三个参数分别是在三个方向上的分段数，如widthSegments为3的话，代表x方向上水平分为三份。一般情况下不需要分段的话，可以不设置后三个参数，后三个参数的缺省值为1。其他几何形状中的分段也是类似的，下面不做说明。

物体的默认位置是原点，对于立方体而言，是其几何中心在原点的位置。

### 平面

这里的平面（PlaneGeometry）其实是一个长方形，而不是数学意义上无限大小的平面。其构造函数为：

```javascript
THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
```

创建的平面在x轴和y轴所在平面内

### 球体

球体（SphereGeometry）的构造函数是：

```javascript
THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
```

其中，radius是半径；segmentsWidth表示经度上的切片数；segmentsHeight表示纬度上的切片数；phiStart表示经度开始的弧度；phiLength表示经度跨过的弧度；thetaStart表示纬度开始的弧度thetaLength表示纬度跨过的弧度。

### 圆形

圆形（CircleGeometry）可以创建圆形或者扇形，其构造函数是：

```javascript
THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
```

### 圆柱体

```javascript
THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
```

其中，radiusTop与radiusBottom分别是顶面和底面的半径，由此可知，当这两个参数设置为不同的值时，实际上创建的是一个圆台；height是圆柱体的高度；radiusSegments与heightSegments可类比球体中的分段；openEnded是一个布尔值，表示是否没有顶面和底面，缺省值为false，表示有顶面和底面。

### 正四面体、正八面体、正二十面体

正四面体（TetrahedronGeometry）、正八面体（OctahedronGeometry）、正二十面体
（IcosahedronGeometry）的构造函数较为类似，分别为：

```javascript
THREE.TetrahedronGeometry(radius, detail)
THREE.OctahedronGeometry(radius, detail)
THREE.IcosahedronGeometry(radius, detail)
```

其中，radius是半径；detail是细节层次（Level of Detail）的层数，对于大面片数模型，可以控制在视角靠近物体时，显示面片数多的精细模型，而在离物体较远时，显示面片数较少的粗略模型。这里我们不对detail多作展开，一般可以对这个值缺省。

### 圆环面

圆环面（TorusGeometry）就是甜甜圈的形状，其构造函数是：

```javascript
THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
```

其中，radius是圆环半径；tube是管道半径；radialSegments与tubularSegments分别是两个分段数，arc是圆环面的弧度，缺省值为Math.PI * 2。

### 圆环结

```
THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
```

前四个参数在圆环面中已经有所介绍，p和q是控制其样式的参数，一般可以缺省，如果需要详细了解，请学习圆环结的相关知识；heightScale是在z轴方向上的缩放。

### 文字形状

使用文字形状需要下载和引用额外的字体库，可以在http://typeface.neocracy.org/下载。这里，我们以 helvetiker字体为例。首先在http://typeface.neocracy.org/fonts.html下载对应的压缩包，解压后将helvetiker_regular.typeface.js文件放在你的目录下，然后在HTML文件中引用该文件：

```html
<script type="text/javascript" src="helvetiker_regular.typeface.js"></script>
```

其

创建文字形状的流程和之前介绍的基本几何形状是类似的，其构造函数是：

```javascript
THREE.TextGeometry(text, parameters)
```

1. 其中，text是文字字符串，parameters是以下参数组成的对象：
2. size：字号大小，一般为大写字母的高度
3. height：文字的厚度
4. curveSegments：弧线分段数，使得文字的曲线更加光滑
5. font：字体，默认是'helvetiker'，需对应引用的字体文件
6. weight：值为'normal'或'bold'，表示是否加粗
7. style：值为'normal'或'italics'，表示是否斜体
8. bevelEnabled：布尔值，是否使用倒角，意为在边缘处斜切
9. bevelThickness：倒角厚度
10. bevelSize：倒角宽度

由于自定义形状需要手动指定每个顶点位置，以及顶点连接情况，如果该形状非常复杂，程序员的计算量就会比较大。在这种情况下，建议在3ds Max之类的建模软件中创建模型，然后使用Three.js导入到场景中，这样会更高效方便。自定义形状使用的是Geometry类，它是其他如CubeGeometry、SphereGeometry等几何形状的父类，其构造函数是：

```javascript
THREE.Geometry()
```



### 自定义形状

```javascript
			// 自定义集合形状
      // 初始化几何形状
      const geometry = new THREE.Geometry();
      // 设置顶点位置
      // 顶部4顶点
      geometry.vertices.push(new THREE.Vector3(-1, 2, -1));
      geometry.vertices.push(new THREE.Vector3(1, 2, -1));
      geometry.vertices.push(new THREE.Vector3(1, 2, 1));
      geometry.vertices.push(new THREE.Vector3(-1, 2, 1));
      // 底部4顶点
      geometry.vertices.push(new THREE.Vector3(-2, 0, -2));
      geometry.vertices.push(new THREE.Vector3(2, 0, -2));
      geometry.vertices.push(new THREE.Vector3(2, 0, 2));
      geometry.vertices.push(new THREE.Vector3(-2, 0, 2));
      // 设置顶点连接情况
      // 顶面
      geometry.faces.push(new THREE.Face3(0, 1, 2, 3));
      // 底面
      geometry.faces.push(new THREE.Face3(4, 5, 6, 7));
      // 四个侧面
      geometry.faces.push(new THREE.Face3(0, 1, 5, 4));
      geometry.faces.push(new THREE.Face3(1, 2, 6, 5));
      geometry.faces.push(new THREE.Face3(2, 3, 7, 6));
      geometry.faces.push(new THREE.Face3(3, 0, 4, 7));
```

## 材质

### 基本材质

使用基本材质（BasicMaterial）的物体，渲染后物体的颜色始终为该材质的颜色，而不会由于光照产生明暗、阴影效果。如果没有指定材质的颜色，则颜色是随机的。其构造函数是：

其中，opt可以缺省，或者为包含各属性的值。

我们介绍几个较为常用的属性。

- visible：是否可见，默认为true
- side：渲染面片正面或是反面，默认为正面THREE.FrontSide，可设置为反面THREE.BackSide，或双面THREE.DoubleSide
- wireframe：是否渲染线而非面，默认为false
- color：十六进制RGB颜色，如红色表示为0xff0000
- map：使用纹理贴图，

对于基本材质，即使改变场景中的光源，使用该材质的物体也始终为颜色处处相同的效果。当然，这不是很具有真实感，因此，接下来我们将介绍更为真实的光照模型：Lambert光照模型以及Phong光照模型。

### Lambert材质

Lambert材质（MeshLambertMaterial）是符合Lambert光照模型的材质。Lambert光照模型的主要特点是只考虑漫反射而不考虑镜面反射的效果，因而对于金属、镜子等需要镜面反射效果的物体就不适应，对于其他大部分物体的漫反射效果都是适用的。

其光照模型公式为：

```text
Idiffuse = Kd * Id * cos(theta)
```

其中，Idiffuse是漫反射光强，Kd是物体表面的漫反射属性，Id是光强，theta是光的入射角弧度。

其中，Idiffuse是漫反射光强，Kd是物体表面的漫反射属性，Id是光强，theta是光的
入射角弧度。

### Phong材质

Phong材质（MeshPhongMaterial）是符合Phong光照模型的材质。和Lambert不同的是，Phong模型考虑了镜面反射的效果，因此对于金属、镜面的表现尤为适合。

漫反射部分和Lambert光照模型是相同的，镜面反射部分的模型为：

```text
Ispecular = Ks * Is * (cos(alpha)) ^ n
```

其中，Ispecular是镜面反射的光强，Ks是材质表面镜面反射系数，Is是光源强度，alpha是反射光与视线的夹角，n是高光指数，越大则高光光斑越小。

由于漫反射部分与Lambert模型是一致的，因此，如果不指定镜面反射系数，而只设定漫反射，其效果与Lambert是相同的。

### 法向材质

法向材质可以将材质的颜色设置为其法向量的方向，有时候对于调试很有帮助。法向材质的设定很简单，甚至不用设置任何参数：

```javascript
new THREE.MeshNormalMaterial()
```



### 材质的纹理贴图

```javascript
					// 材质的纹理贴图
          // 1.选择一张图片导入纹理中
          var texture = THREE.ImageUtils.loadTexture('./imgs/1.jpg');
          const material = new THREE.MeshPhongMaterial({
            // color,
            // 2.将材质的map属性设置为texture
            map: texture,
            // emissive: 0xff0000,
          });
```

## 网格

在学习了几何形状和材质之后，我们就能使用他们来创建物体了。最常用的一种物体就是网格（Mesh），网格是由顶点、边、面等组成的物体；其他物体包括线段（Line）、骨骼（Bone）、粒子系统（ParticleSystem）等。创建物体需要指定几何形状和材质，其中，几何形状决定了物体的顶点位置等信息，材质决定了物体的颜色、纹理等信息。

### 创建网格

```javascript
var material = new THREE.MeshLambertMaterial({
	color: 0xffff00
});
var geometry = new THREE.CubeGeometry(1, 2, 3);
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

### 修改属性

```javascript
var material = new THREE.MeshLambertMaterial({
	color: 0xffff00
});
var geometry = new THREE.CubeGeometry(1, 2, 3);
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// 通过网格对象修改材质属性
mesh.material = new THREE.MeshLambertMaterial({
	color: 0xff0000
});
```

## 动画

在这里，我们将动态画面简称为动画（animation）。正如动画片的原理一样，动画的本质是利用了人眼的视觉暂留特性，快速地变换画面，从而产生物体在运动的假象。而对于Three.js程序而言，动画的实现也是通过在每秒中多次重绘画面实现的。

为了衡量画面切换速度，引入了每秒帧数FPS（Frames Per Second）的概念，是指每秒画面重绘的次数。FPS越大，则动画效果越平滑，当FPS小于20时，一般就能明显感受到画面的卡滞现象。

那么FPS是不是越大越好呢？其实也未必。当FPS足够大（比如达到60），再增加帧数人眼也不会感受到明显的变化，反而相应地就要消耗更多资源（比如电影的胶片就需要更长了，或是电脑刷新画面需要消耗计算资源等等）。因此，选择一个适中的FPS即可。

NTSC标准的电视FPS是30，PAL标准的电视FPS是25，电影的FPS标准为24。而对于Three.js动画而言，一般FPS在30到60之间都是可取的。

### setInterval方法

### requestAnimationFrame方法

因为requestAnimationFrame较为“年轻”，因而一些老的浏览器使用的是试验期的名字：mozRequestAnimationFrame、webkitRequestAnimationFrame、msRequestAnimationFrame为了支持这些浏览器，我们最好在调用之前，先判断是否定义了
requestAnimationFrame以及上述函数：

```javascript
var requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
```

### 如何取舍

setInterval方法与requestAnimationFrame方法的区别较为微妙。一方面，最明显的差别表现在setInterval可以手动设定FPS，而requestAnimationFrame则会自动设定FPS；但另一方面，即使是setInterval也不能保证按照给定的FPS执行，在浏览器处理繁忙时，很可能低于设定值。当浏览器达不到设定的调用周期时，requestAnimationFrame采用跳过某些帧的方式来表现动画，虽然会有卡滞的效果但是整体速度不会拖慢，而setInterval会因此使整个程序放慢运行，但是每一帧都会绘制出来；

总而言之，requestAnimationFrame适用于对于时间较为敏感的环境（但是动画逻辑更加复杂），而setInterval则可在保证程序的运算不至于导致延迟的情况下提供更加简洁的逻辑（无需自行处理时间）。

## Three.js响应式设计

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
      html,
      body {
        height: 100%;
      }
      canvas {
        display: block;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <canvas id="c"></canvas>
    <script src="../three.js源码/three.js"></script>
    <script>
      function main() {
        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({ canvas });

        const fov = 75;
        const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();

        {
          const color = 0xffffff;
          const intensity = 1;
          const light = new THREE.DirectionalLight(color, intensity);
          light.position.set(-1, 2, 4);
          scene.add(light);
        }

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        function makeInstance(geometry, color, x) {
          const material = new THREE.MeshPhongMaterial({ color });

          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);

          cube.position.x = x;

          return cube;
        }

        const cubes = [makeInstance(geometry, 0x44aa88, 0), makeInstance(geometry, 0x8844aa, -2), makeInstance(geometry, 0xaa8844, 2)];

        function render(time) {
          time *= 0.001;

          cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * 0.1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
          });

          renderer.render(scene, camera);

          requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
      }

      main();
    </script>
  </body>
</html>

```

canvas充满了整个页面，但是有两个问题。 第一是我们的立方体被拉伸了。他们不是立方体了更像是个盒子，太高或者太宽。 在新标签中打开它然后改变尺寸你就能看到立方体是怎么在宽高上被拉伸的。

另一个问题是立方体看起来分辨率太低或者说块状化或者有点模糊。 将窗口拉伸的非常大你就能看到问题。

我们先解决拉伸的问题。为此我们要将相机的宽高比设置为canvas的宽高比。 我们可以通过canvas的`clientWidth`和`clientHeight`属性来实现。

```javascript
function render(time) {
  time *= 0.001;
 
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
 
  ...
```

我们现在来解决块状化的问题。

canvas元素有两个尺寸。一个是canvas在页面上的显示尺寸， 是我们用CSS来设置的。另一个尺寸是canvas本身像素的数量。这和图片一样。 比如我们有一个128x64像素的图片然后我们可以通过CSS让它显示为 400x200像素。

一个canvas的内部尺寸，它的分辨率，通常被叫做绘图缓冲区(drawingbuffer)尺寸。 在three.js中我们可以通过调用`renderer.setSize`来设置canvas的绘图缓冲区。 我们应该选择什么尺寸? 最显而易见的是"和canvas的显示尺寸一样"。 即可以直接用canvas的`clientWidth`和`clientHeight`属性。

我们写一个函数来检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。

```javascript
				function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const isResize = width !== canvas.width || height !== canvas.height;
          if (isResize) {
            // 重置宽高，在末尾传入false很重要
            renderer.setSize(width, height, false);
          }
          return isResize;
        }
```

注意如果我们的canvas大小被调整了那函数会返回true。我们可以利用 这个来检查是否有其他的东西应该更新。我们修改渲染循环 来使用我们的新函数。

```javascript
function render(time) {
  time *= 0.001;
 
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
 
  ...
```

因为只有canvas的显示尺寸变化时宽高比才变化所以我们 只在`resizeRendererToDisplaySize`函数返回`true`时才设置摄像机的宽高比。

### 应对HD-DPI显示器

使用three.js有多种方法来应对HD-DPI。

第一种就是不做任何特别的事情。这可以说是最常见的。 渲染三维图形需要大量的GPU处理能力。移动端的GPU能力比桌面端的要弱。至少截止到2018年, 手机都有非常高的分辨率显示器。 目前最好的手机的HD-DPI比例为3x，意思是非高密度点显示器上的一个像素在高密度显示器上是9个像素。 意味着需要9倍的渲染。

计算9倍的像素是个大工程所以如果保持代码不变我们将计算一个像素然后浏览器将以三倍大小绘制(3x3=9像素)。

对于大型的three.js应用来说上面就是你想要的否侧你的帧速率会很低。

尽管如此如果你确实想用设备的分辨率来渲染，three.js中有两种方法来实现。

一种是使用renderer.setPixelRatio来告诉three.js分辨率的倍数。 访问浏览器从CSS像素到设备像素的倍数然后传给three.js。**强烈不建议这样**。

```javascript
 renderer.setPixelRatio(window.devicePixelRatio);
```

另一种方法是在调整canvas的大小时自己处理。

第二种方法从客观上来说更好。为什么？因为我拿到了我想要的。 在使用three.js时有很多种情况下我们需要知道canvas的绘图缓冲区的确切尺寸。 比如制作后期处理滤镜或者我们在操作着色器需要访问gl_FragCoord变量，如果我们截屏或者给GPU 读取像素，绘制到二维的canvas等等。 通过我们自己处理我们会一直知道使用的尺寸是不是我们需要的。 幕后并没有什么特殊的魔法发生。

可能很难看出区别但是如果你有一个HD-DPI显示器 和上面的例子做对比你就能发现边角更清晰

## 外部模型

Three.js有一系列导入外部文件的辅助函数，是在three.js之外的，使用前需要额外下载，在https://github.com/mrdoob/three.js/tree/master/examples/js/loaders可以找到。

.obj是最常用的模型格式，导入*.obj文件需要OBJLoader.js；导入带*.mtl材质的*.obj文件需要MTLLoader.js以及OBJMTLLoader.js。另
有PLYLoader.js、STLLoader.js等分别对应不同格式的加载器，可以根据模型格式自行选择。

目前，支持的模型格式有：

- \*.obj
- *.obj,\*.mtl
- \*.dae
- \*.ctm
- \*.ply
- \*.stl
- \*.wrl
- \*.vtk

### 步骤

在init函数中，创建loader变量，用于导入模型：

## 光与影

### 环境光

环境光是指场景整体的光照效果，是由于场景内若干光源的多次反射形成的亮度一致的效果，通常用来为整个场景指定一个基础亮度。因此，环境光没有明确的光源位置，在各处形成的亮度也是一致的。

在设置环境光时，只需要指定光的颜色：

```javascript
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);
```

### 点光源

点光源是不计光源大小，可以看作一个点发出的光源。点光源照到不同物体表面的亮度是线性递减的，因此，离点光源距离越远的物体会显得越暗。

点光源的构造函数是：

```javascript
THREE.PointLight(hex, intensity, distance)
```

其中，hex是光源十六进制的颜色值；intensity是亮度，缺省值为1，表示100%亮度；distance是光源最远照射到的距离，缺省值为0。

```javascript
var light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 1.5, 2);
scene.add(light);
```

### 平行光

我们都知道，太阳光常常被看作平行光，这是因为相对地球上物体的尺度而言，太阳离我们的距离足够远。对于任意平行的平面，平行光照射的亮度都是相同的，而与平面所在位置无关。

平行光的构造函数是：

```
THREE.DirectionalLight(hex, intensity)
```

其中，hex是光源十六进制的颜色值；intensity是亮度，缺省值为1，表示100%亮度。此外，对于平行光而言，设置光源位置尤为重要。

### 聚光灯

聚光灯是一种特殊的点光源，它能够朝着一个方向投射光线。聚光灯投射出的是类似圆锥形的光线，这与我们现实中看到的聚光灯是一致的。

其构造函数为：

```javascript
THREE.SpotLight(hex, intensity, distance, angle, exponent)
```

相比点光源，多了angle和exponent两个参数。angle是聚光灯的张角，缺省值是Math.PI / 3，最大值是Math.PI / 2；exponent是光强在偏离target的衰减指数（target需要在之后定义，缺省值为(0, 0, 0)），缺省值是10。

在调用构造函数之后，除了设置光源本身的位置，一般还需要设置target：

```javascript
light.position.set(x1, y1, z1);
light.target.position.set(x2, y2, z2);
```

除了设置light.target.position的方法外，如果想让聚光灯跟着某一物体移动（就像真的聚光灯！），可以target指定为该物体：

```javascript
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
new THREE.MeshLambertMaterial({color: 0x00ff00}));
var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
light.target = cube;
```

### 阴影

在Three.js中，能形成阴影的光源只有THREE.DirectionalLight与THREE.SpotLight；而相对地，能表现阴影效果的材质只有THREE.LambertMaterial与THREE.PhongMaterial。因而在设置光源和材质的时候，一定要注意这一点。

首先，我们需要在初始化时，告诉渲染器渲染阴影：

```javascript
renderer.shadowMapEnabled = true;
```

然后，对于光源以及所有要产生阴影的物体调用：

```javascript
xxx.castShadow = true;
```

对于接收阴影的物体调用：

```javascript
xxx.receiveShadow = true;
```

比如场景中一个平面上有一个正方体，想要让聚光灯照射在正方体上，产生的阴影投射在平面上，那么就需要对聚光灯和正方体调用castShadow = true，对于平面调用receiveShadow = true。

以上就是产生阴影效果的必要步骤了，不过通常还需要设置光源的阴影相关属性，才能正确显示出阴影效果。

对于聚光灯，需要设置shadowCameraNear、shadowCameraFar、shadowCameraFov三个值，类比我们在第二章学到的透视投影照相机，只有介于shadowCameraNear与shadowCameraFar之间的物体将产生阴影，shadowCameraFov表示张角。

对于平行光，需要设置shadowCameraNear、shadowCameraFar、shadowCameraLeft、shadowCameraRight以及shadowCameraBottom六个值，相当于正交投影照相机的六个面。同样，只有在这六个面围成的长方体内的物体才会产生阴影效果。
为了看到阴影照相机的位置，通常可以在调试时开启light.shadowCameraVisible =true。

至此，阴影效果已经能正常显示了

## 着色器

着色器是屏幕上呈现画面之前的最后一步，用它可以对先前渲染的结果做修改，包括对颜色、位置等等信息的修改，甚至可以对先前渲染的结果做后处理，实现高级的渲染效果。

WebGL的着色器程序大致与GLSL相同，是一种接近C语言的代码。着色器通常分为几何着色器（Geometry Shader）、顶点着色器（Vertex Shader）、片元着色器（Fragment Shader）等等。由于WebGL基于OpenGL ES 2.0，因此WebGL支持的着色器只有顶点着色器与片元着色器。

### 顶点着色器

顶点着色器中的“顶点”指的正是Mesh中的顶点，对于每个顶点调用一次。因此，如果场景中有一个正方体，那么对八个顶点将各自调用一次顶点着色器，可以修改顶点的位置或者颜色等信息，然后传入片元着色器。

### 片元着色器

片元是栅格化之后，在形成像素之前的数据。片元着色器是每个片元会调用一次的程序，因此，片元着色器特别适合用来做图像后处理。

### 初窥着色器

我们回顾一下上节内容，着色器是一段在GPU中执行的接近C语言的代码，顶点着色器对于每个顶点调用一次，片元着色器对于每个片元调用一次。

着色器语言的调试有时候十分困难，很可能报的错让你不明所以。建议使用Chrome和Firefox调试，此外，Chrome的一个插件(https://chrome.google.com/webstore/detail/webgl-inspector/ogkcjmbhnfmlnielkjhedpcjomeaghda)也可能给你提供一定帮助。