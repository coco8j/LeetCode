<h2><a href="https://leetcode.com/problems/memoize">2623. Memoize</a></h2><h3>Medium</h3><hr><p>Given a function <code>fn</code>, return a&nbsp;<strong>memoized</strong>&nbsp;version of that function.</p>

<p>A&nbsp;<strong>memoized&nbsp;</strong>function is a function that will never be called twice with&nbsp;the same inputs. Instead it will return&nbsp;a cached value.</p>

<p>You can assume there are&nbsp;<strong>3&nbsp;</strong>possible input functions:&nbsp;<code>sum</code><strong>, </strong><code>fib</code><strong>,&nbsp;</strong>and&nbsp;<code>factorial</code><strong>.</strong></p>

<ul>
	<li><code>sum</code><strong>&nbsp;</strong>accepts two integers&nbsp;<code>a</code> and <code>b</code> and returns <code>a + b</code>.&nbsp;Assume that if a value has already been cached for the arguments <code>(b, a)</code> where <code>a != b</code>, it cannot be used for the arguments <code>(a, b)</code>. For example, if the arguments are <code>(3, 2)</code> and <code>(2, 3)</code>, two separate calls should be made.</li>
	<li><code>fib</code><strong>&nbsp;</strong>accepts a&nbsp;single integer&nbsp;<code>n</code> and&nbsp;returns&nbsp;<code>1</code> if <font face="monospace"><code>n &lt;= 1</code> </font>or<font face="monospace">&nbsp;<code>fib(n - 1) + fib(n - 2)</code>&nbsp;</font>otherwise.</li>
	<li><code>factorial</code>&nbsp;accepts a single integer&nbsp;<code>n</code> and returns <code>1</code>&nbsp;if&nbsp;<code>n &lt;= 1</code>&nbsp;or&nbsp;<code>factorial(n - 1) * n</code>&nbsp;otherwise.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong>
fnName = &quot;sum&quot;
actions = [&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]
values = [[2,2],[2,2],[],[1,2],[]]
<strong>Output:</strong> [4,4,1,3,2]
<strong>Explanation:</strong>
const sum = (a, b) =&gt; a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // &quot;call&quot; - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // &quot;call&quot; - returns 4. However sum() was not called because the same inputs were seen before.
// &quot;getCallCount&quot; - total call count: 1
memoizedSum(1, 2); // &quot;call&quot; - returns 3. sum() was called as (1, 2) was not seen before.
// &quot;getCallCount&quot; - total call count: 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:
</strong>fnName = &quot;factorial&quot;
actions = [&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]
values = [[2],[3],[2],[],[3],[]]
<strong>Output:</strong> [2,6,2,2,6,2]
<strong>Explanation:</strong>
const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // &quot;call&quot; - returns 2.
memoFactorial(3); // &quot;call&quot; - returns 6.
memoFactorial(2); // &quot;call&quot; - returns 2. However factorial was not called because 2 was seen before.
// &quot;getCallCount&quot; - total call count: 2
memoFactorial(3); // &quot;call&quot; - returns 6. However factorial was not called because 3 was seen before.
// &quot;getCallCount&quot; - total call count: 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:
</strong>fnName = &quot;fib&quot;
actions = [&quot;call&quot;,&quot;getCallCount&quot;]
values = [[5],[]]
<strong>Output:</strong> [8,1]
<strong>Explanation:
</strong>fib(5) = 8 // &quot;call&quot;
// &quot;getCallCount&quot; - total call count: 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= n &lt;= 10</code></li>
	<li><code>0 &lt;= actions.length &lt;= 10<sup>5</sup></code></li>
	<li><code>actions.length === values.length</code></li>
	<li><code>actions[i]</code> is one of &quot;call&quot; and &quot;getCallCount&quot;</li>
	<li><code>fnName</code> is one of &quot;sum&quot;, &quot;factorial&quot; and&nbsp;&quot;fib&quot;</li>
</ul>
### 의사코드 .
*해당 문제는 'Memoization' 관련이다. 

1. 순회 가능한 빈 스토리지(캐싱)를 만들어준다.
2. memoize 함수는 다음 '함수'를 반환한다. 
	2-1. memoize를 정의한 변수명에 부여된 인자를 args로 잡는다.
	2-2. 스토리지내에 'Key = args : Value =  memoize에 들어오는 인자(함수)에 args를 인수로 넣어준 함수 실행' 형태로  저장해준다.
				storage[args] = fn(...args)
	2-3. 이후 저장소 내에 args를 확인하고 있으면 해당 키값에 대한 밸류 값을 반환. 
	2-4. args가 없을 경우에는 함수를 실행하고 해당 내용을 스토리지에 저장한다. 
	2-5. //getCallCount 
			 args의 길이가 0일 경우, 스토리지내에 저장된 key의 값을 세서 반환한다. 
 
### 노트 사항
1. 스토리지는 [ ] 배열타입으로 순회 가능하게 해줘야한다. (굳이 오브젝트 타입 { } 이 아니어도 괜찮다.)
2. 리턴시킬 함수의 인자값으로 전개연산자를 사용한다. 
3. getCallCount는 해당 문제 한정이다.  
4. 해당 함수실행이 실행되었는지 확인하기 위해서 if( !storage[args] ) 방법이 아닌 if ( storage[args] === undefined ) 방법으로 사용해서 인자가 0일 경우도 카운트 되게 한다.
