## 介绍
node >= 14.0

## 分支
#### 操作语义
操作语义与解释器实现十分接近。

1. reduce 小步语义（structural operational semantic/transition semantic），用machine执行规约
2. evaluet 大步语义（natural semantic/relational semantic），把汇编整个计算的任务交给了执行者

#### 指称语义（fixed-point semantic/mathematical semantic）
比操作语义抽象层次更高，忽略了程序如何执行的细节，只关心把它转化为另一种表示。
还有其他语义，比如公理化语义（axiomatic semantic）

3. denotational_semantic 产出JS代码

#### 形式化语义
一个重要应用：是为一种编程语言的含义找出一种无歧义的定义。
形式化的指称语义使用抽象的数学对象（通常为函数）来表示表达式和语句这样的编程语言结构。

4. formal_semantic 