# 博文

## Vue

### vue.$set及vue.$delete

[官网示例](https://cn.vuejs.org/v2/api/#Vue-set)

在我们使用vue进行开发的过程中，可能会遇到一种情况：当生成vue实例后，当再次给数据赋值时，有时候并不会自动更新到视图上去；
当我们去看vue文档的时候，会发现有这么一句话：如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。

如下代码，给 student对象新增 age 属性

```javascript
data () {
    return {
        student: {
            name: '',
            sex: ''
        }
    }
}
```

```javascript
mounted () {
    this.student.age = 24
}
```

原因是：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。

要处理这种情况，我们可以使用$set()方法，既可以新增属性,又可以触发视图更新。

this.$set(this.data,”key”,value’)

```javascript
mounted () {
    this.$set(this.student,"age", 24)
}
```
