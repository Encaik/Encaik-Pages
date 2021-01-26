# 学习使用 Tone.js 制作网页版乐器

## 安装

```sh
npm install tone
```

```js
import * as Tone from "tone";
```

## 使用

这是官网 Hello Tone 示例，初步讲解了怎么使用 tone。

```js
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
```

其中通过`new Tone.Synth()`创建了一个 Synth 发声器，然后通过`toDestination()`连接到了输出。

然后使用发生器对象`synth`的方法`triggerAttackRelease("C4", "8n")`演奏了一个音高 c4,时长为 8n 的音。

<Valine></Valine>
