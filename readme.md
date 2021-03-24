## 介绍
node >= 14.0

## 分支
#### 操作语义
操作语义与解释器实现十分接近。

- reduce 小步语义（structural operational semantic/transition semantic），用machine执行规约
- evaluet 大步语义（natural semantic/relational semantic），把汇编整个计算的任务交给了执行者

#### 指称语义（fixed-point semantic/mathematical semantic）
比操作语义抽象层次更高，忽略了程序如何执行的细节，只关心把它转化为另一种表示。
还有其他语义，比如公理化语义（axiomatic semantic）

- denotational_semantic 产出JS代码

#### 形式化语义
一个重要应用：是为一种编程语言的含义找出一种无歧义的定义。
形式化的指称语义使用抽象的数学对象（通常为函数）来表示表达式和语句这样的编程语言结构。

- formal_semantic 

#### 有穷自动机

- deterministic_finite_automaton
  - DFA: 确定性有限自动机，
  - NFA：非确定性有限自动机：对每个输入序列不再只有一条执行路径，按照可能性而不是确定性工作。
  - DFA状态完全由当前状态和输入决定，NFA在向下一个状态转移时会有多种可能性，有时也可能根本无法转移


#### 解析正则表达式

- regex，用有限自动机解析正则，正则以'/'开头'/'结束

- equivalency 等价性