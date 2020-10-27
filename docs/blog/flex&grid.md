# 详细理解 Flexbox 与 Gridbox 布局属性

## Flexbox

使用 flex-box 布局时，需要在排列元素的父元素上添加属性。

![使用前](/img/blog/flex&grid/1.png)

```css
display: flex;
/*或*/
display: inline-flex;
```

![使用后](/img/blog/flex&grid/2.png)

### 主轴（Main Axis）

主轴决定了子元素的排列方向，且可以由`flex-direction`属性定义主轴方向，该属性有四个取值。

- row

该值是 flex-box 布局的默认值，即行排列。如图所示：

![row](/img/blog/flex&grid/3.png)

- row-reverse

该值为行排列的逆序排列，即子元素从后往前反向排列，并右对齐，与 row 成镜像效果。如图所示：

![row-reverse](/img/blog/flex&grid/4.png)

- column

该值为纵向依次排列，即列排列。如图所示：

![column](/img/blog/flex&grid/5.png)

- column-reverse

该值为反向列排列，如果父元素有高度且高于子元素堆叠，则子元素对齐在底部；如果父元素无高度或高度小于子元素堆叠，则子元素对其在顶部。如图所示：

父元素高度 100vh

![column-reverse](/img/blog/flex&grid/6.png)

行排列时，子元素如 inline 排列；列排列时，子元素如 block 排列。即子元素排列属性与 flex 排列属性相同时，布局顺序不会有改变。

### 交叉轴（Cross Axis）

交叉轴与主轴相互垂直，即主轴方向为水平，则交叉轴为垂直；主轴方向为垂直，则交叉轴为水平。

### flex-wrap

如果子元素过多导致主轴方向宽度不足时，可通过调整 `flex-wrap` 属性来控制子元素换行显示。该属性有以下几个取值：

- nowrap

该值为默认取值，子元素强制不换行，在宽度超出父元素时，将压缩子元素宽度，如果子元素宽度无法被压缩，将产生溢出。

子元素宽度可压缩

![nowrap](/img/blog/flex&grid/7.png)

子元素宽度不可压缩

![nowrap](/img/blog/flex&grid/8.png)

- wrap

子元素将根据父元素宽度计算，如果超过该行宽度，则在交叉轴方向创建新的一行。

![wrap](/img/blog/flex&grid/9.png)

- wrap-reverse

子元素将根据父元素宽度计算，如果超过该行宽度，则在交叉轴的反方向创建新的一行。

![wrap](/img/blog/flex&grid/10.png)

### flex-flow

该属性为`flex-direction`和`flex-wrap`的简写属性。
