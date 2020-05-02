# 经验总结

## Ant-design-vue使用心得

- 优点

  - 组件库强大，拥有各式各样的组件，且配置项多样
  - 符合Vue核心思想，试用顺手

- 缺点

  - 样式自定义单调，官方方法只能通过less覆盖，手动覆盖混乱

## Vuepress中使用emoji

可以通过Shortcodes直接写在文档中，Shortcodes可在[emojipedia](https://emojipedia.org)查找

```markdown
    :heart:
```

显示效果：:heart:

## vue.$set及vue.$delete

[官网示例](https://cn.vuejs.org/v2/api/#Vue-set)

在我们使用vue进行开发的过程中，可能会遇到一种情况：当生成vue实例后，当再次给数据赋值时，有时候并不会自动更新到视图上去；
当我们去看vue文档的时候，会发现有这么一句话：如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。

如下代码，给 student对象新增 age 属性

```js
data () {
    return {
        student: {
            name: '',
            sex: ''
        }
    }
},
mounted () {
    this.student.age = 24
}
```

原因是：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。

要处理这种情况，我们可以使用$set()方法，既可以新增属性,又可以触发视图更新。

this.$set(this.data,”key”,value’)

```js
mounted () {
    this.$set(this.student,"age", 24)
}
```

## Flutter中TextField光标和hintText底边不对齐

原因是：不同文本的baselines不一样，中文hinttext比光标要大，所以baselines更低

解决方法：在TextField中添加style配置baselines

``` dart
style: TextStyle(
  textBaseline: TextBaseline.alphabetic
)
```

## Navicat导出Excel格式表结构

``` sql
SELECT
COLUMN_NAME 字段名称,
COLUMN_TYPE 数据类型,
IF(IS_NULLABLE='NO','是','否') AS '必填',
COLUMN_COMMENT 注释
FROM
INFORMATION_SCHEMA.COLUMNS
where
-- db_name为数据库名称，到时候只需要修改成你要导出表结构的数据库即可
table_schema ='db_name'
AND
-- table_name为表名，到时候换成你要导出的表的名称
-- 如果不写的话，默认会查询出所有表中的数据，这样可能就分不清到底哪些字段是哪张表中的了
table_name = 'table_name'
```
