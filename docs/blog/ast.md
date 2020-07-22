# 从 estree 和 babel 中学习 js 的 AST

## 资料准备

[Mozilla 的 estree 社区规范](https://github.com/estree/estree)
[@babel/parser](https://github.com/babel/babel/tree/master/packages/babel-parser)

## babel 转化代码为 AST 示例

代码转化程序：

```js
var babel = require("@babel/parser");
var fs = require("fs");

var code = "var code = 1";

var res = babel.parse(code, {
  sourceType: "module",
  plugins: ["jsx", "flow"]
});

fs.writeFile("./code.json", JSON.stringify(res), "utf-8", function(err) {
  if (err) {
    throw err;
  }
});
```

其中需要转化为 AST 结构的是`var code = 1`这一句代码。

转化生成的 AST 为：

```json
{
  "type": "File",
  "start": 0,
  "end": 12,
  "loc": {
    "start": { "line": 1, "column": 0 },
    "end": { "line": 1, "column": 12 }
  },
  "errors": [],
  "program": {
    "type": "Program",
    "start": 0,
    "end": 12,
    "loc": {
      "start": { "line": 1, "column": 0 },
      "end": { "line": 1, "column": 12 }
    },
    "sourceType": "module",
    "interpreter": null,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 12,
        "loc": {
          "start": { "line": 1, "column": 0 },
          "end": { "line": 1, "column": 12 }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 12,
            "loc": {
              "start": { "line": 1, "column": 4 },
              "end": { "line": 1, "column": 12 }
            },
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 8,
              "loc": {
                "start": { "line": 1, "column": 4 },
                "end": { "line": 1, "column": 8 },
                "identifierName": "code"
              },
              "name": "code"
            },
            "init": {
              "type": "NumericLiteral",
              "start": 11,
              "end": 12,
              "loc": {
                "start": { "line": 1, "column": 11 },
                "end": { "line": 1, "column": 12 }
              },
              "extra": { "rawValue": 1, "raw": "1" },
              "value": 1
            }
          }
        ],
        "kind": "var"
      }
    ],
    "directives": []
  },
  "comments": []
}
```

### estree 规范解析

以下是 estree 在 es5 中的节点类型：

- [Node objects(节点对象)](#node-objects)
- [Identifier(识别)](#identifier)
- [Literal(文字)](#literal)
  - [RegExpLiteral(正则表达式)](#regexpliteral)
- [Programs(程序)](#programs)
- [Functions(函数)](#functions)
- [Statements(声明)](#statements)
  - [ExpressionStatement(表达声明)](#expressionstatement)
  - [BlockStatement(块)](#blockstatement)
  - [EmptyStatement(Empty)](#emptystatement)
  - [DebuggerStatement(Debug)](#debuggerstatement)
  - [WithStatement(与声明)](#withstatement)
  - [Control flow(控制流)](#control-flow)
    - [ReturnStatement(return)](#returnstatement)
    - [LabeledStatement(标签声明)](#labeledstatement)
    - [BreakStatement(break)](#breakstatement)
    - [ContinueStatement(continue)](#continuestatement)
  - [Choice(判断)](#choice)
    - [IfStatement(if)](#ifstatement)
    - [SwitchStatement(switch)](#switchstatement)
      - [SwitchCase(case)](#switchcase)
  - [Exceptions(异常)](#exceptions)
    - [ThrowStatement(throw)](#throwstatement)
    - [TryStatement(try)](#trystatement)
      - [CatchClause(catch)](#catchclause)
  - [Loops(循环)](#loops)
    - [WhileStatement(while)](#whilestatement)
    - [DoWhileStatement(dowhile)](#dowhilestatement)
    - [ForStatement(for)](#forstatement)
    - [ForInStatement(forin)](#forinstatement)
- [Declarations(声明)](#declarations)
  - [FunctionDeclaration(方法声明)](#functiondeclaration)
  - [VariableDeclaration(变量声明)](#variabledeclaration)
    - [VariableDeclarator(变量声明器)](#variabledeclarator)
- [Expressions(表达式)](#expressions)
  - [ThisExpression(this)](#thisexpression)
  - [ArrayExpression(Array)](#arrayexpression)
  - [ObjectExpression(Object)](#objectexpression)
    - [Property(属性)](#property)
  - [FunctionExpression(方法表达式)](#functionexpression)
  - [Unary operations(一元运算)](#unary-operations)
    - [UnaryExpression(一元表达式)](#unaryexpression)
      - [UnaryOperator(一元运算符)](#unaryoperator)
    - [UpdateExpression(更新表达式)](#updateexpression)
      - [UpdateOperator(更新运算符)](#updateoperator)
  - [Binary operations(二元运算)](#binary-operations)
    - [BinaryExpression(二元表达式)](#binaryexpression)
      - [BinaryOperator(二元运算符)](#binaryoperator)
    - [AssignmentExpression(分配表达式)](#assignmentexpression)
      - [AssignmentOperator(分配运算符)](#assignmentoperator)
    - [LogicalExpression(逻辑表达式)](#logicalexpression)
      - [LogicalOperator(逻辑运算符)](#logicaloperator)
    - [MemberExpression(成员表达式)](#memberexpression)
  - [ConditionalExpression(条件表达式)](#conditionalexpression)
  - [CallExpression(call)](#callexpression)
  - [NewExpression(new)](#newexpression)
  - [SequenceExpression(序列表达式)](#sequenceexpression)
- [Patterns(模式)](#patterns)

节点在 AST 中的表示接口为:

```js
interface Node {
  type: string;
  loc: SourceLocation | null;
}
```
