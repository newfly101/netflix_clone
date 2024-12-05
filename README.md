

<h1>프로젝트 구성</h1>
<pre>
    <li>라이브러리 버전 맞추기</li>
<pre>
<li>Node.js 18.20.2 버전 기준 react-router-dom 버전의 경우</li>
<img src="web/public/README/Version_1.png" alt="" />
버전 충돌을 막기 휘애서 downgrade를 해줌

> npm install react-router-dom@6.26.1
</pre>
    <li>react-router-dom 이용 방법</li>
<pre>
// index.js
root.render(
    &lt;BrowserRouter&gt;
        &lt;App /&gt;
    &lt;/BrowserRouter&gt;
);

// app.js
const App = () => {
return (
  &lt;div className="App"&gt;
    &lt;Routes&gt;
      &lt;Route path="/" component={&lt;LayOut /&gt;}&gt;
          &lt;Route path="/" component={&lt;MainPage /&gt;} /&gt;
          &lt;Route path="/" component={&lt;DetailPage /&gt;} /&gt;
          &lt;Route path="search" component={&lt;SearchPage /&gt;} /&gt;
      &lt;/Route&gt;
    &lt;/Routes&gt;
  &lt;/div&gt;
  );
}
</pre>
</pre>