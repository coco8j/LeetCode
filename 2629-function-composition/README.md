<h2><a href="https://leetcode.com/problems/function-composition">2629. Function Composition</a></h2><h3>Easy</h3><hr><p>Given an array of functions&nbsp;<code>[f<span style="font-size: 10.8333px;">1</span>, f<sub>2</sub>, f<sub>3</sub>,&nbsp;..., f<sub>n</sub>]</code>, return&nbsp;a new function&nbsp;<code>fn</code>&nbsp;that is the <strong>function&nbsp;composition</strong> of the array of functions.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of&nbsp;<code>[f(x), g(x), h(x)]</code>&nbsp;is&nbsp;<code>fn(x) = f(g(h(x)))</code>.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of an empty list of functions is the&nbsp;<strong>identity function</strong>&nbsp;<code>f(x) = x</code>.</p>

<p>You may assume each&nbsp;function&nbsp;in the array accepts one integer as input&nbsp;and returns one integer as output.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4
<strong>Output:</strong> 65
<strong>Explanation:</strong>
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x = 1
<strong>Output:</strong> 1000
<strong>Explanation:</strong>
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> functions = [], x = 42
<strong>Output:</strong> 42
<strong>Explanation:</strong>
The composition of zero functions is the identity function</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><font face="monospace">-1000 &lt;= x &lt;= 1000</font></code></li>
	<li><code><font face="monospace">0 &lt;= functions.length &lt;= 1000</font></code></li>
	<li>all functions accept and return a single integer</li>
</ul>


<p>의사코드
**< 문제 포인트 >**
배열의 각 함수가 하나의 정수를 입력으로 받아들이고 하나의 정수를 출력으로 반환한다고 가정할 수 있습니다.

**<요약>**
인자를 받아 함수들 배열의 뒤에서부터 진행되는 함수를 반환

**<수도코드>**
1. 배열의 뒷번호부터 순회하며 함수를 하나씩 꺼냅니다. 
2. 받은 인자를 넣어 실행 후, result에 할당합니다. 
3. 다음 반복에는 result값을 넣어 실행합니다. 
4. 반복이 끝나면 최종 재할당을 마친 result를 반환합니다. 


Lodash.compose와 비슷함

</p>
