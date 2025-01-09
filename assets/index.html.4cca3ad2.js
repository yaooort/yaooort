import{_ as n,o as a,c as s,a as t}from"./app.ef5931c4.js";const e={},o=t(`<h1 id="flutter-\u5982\u4F55\u4F7F\u7528-dart-ffi-\u548C-golang-\u8FDB\u884C\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#flutter-\u5982\u4F55\u4F7F\u7528-dart-ffi-\u548C-golang-\u8FDB\u884C\u8C03\u7528" aria-hidden="true">#</a> Flutter \u5982\u4F55\u4F7F\u7528 Dart FFI \u548C Golang \u8FDB\u884C\u8C03\u7528</h1><p>\u672C\u9879\u76EE\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u57FA\u7840\u6846\u67B6\uFF0C\u6F14\u793A\u5982\u4F55\u4F7F\u7528 Flutter \u7684 Dart FFI\uFF08Foreign Function Interface\uFF09\u76F4\u63A5\u8C03\u7528 Golang \u4EE3\u7801\uFF0C\u5E76\u652F\u6301\u6240\u6709 Flutter \u5E73\u53F0\uFF08Android\u3001iOS\u3001Windows\u3001macOS\u3001Linux \u548C Web\uFF09\u3002\u901A\u8FC7\u6B64\u6846\u67B6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u7701\u53BB\u4F20\u7EDF\u7684\u901A\u8FC7\u5E73\u53F0\u4EE3\u7801\uFF08\u5982 Java/Kotlin\u3001Swift/Objective-C\uFF09\u6865\u63A5\u7684\u7E41\u7410\u6B65\u9AA4\uFF0C\u76F4\u63A5\u5B9E\u73B0 Dart \u4E0E Golang \u7684\u4EA4\u4E92\u3002</p><hr><h2 id="\u529F\u80FD\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u7B80\u4ECB" aria-hidden="true">#</a> \u529F\u80FD\u7B80\u4ECB</h2><ul><li><strong>\u8DE8\u5E73\u53F0\u652F\u6301</strong>\uFF1A\u652F\u6301 Android\u3001iOS\u3001Windows\u3001macOS\u3001Linux \u548C Web \u5E73\u53F0\u3002</li><li><strong>\u7EAF FFI \u8C03\u7528</strong>\uFF1A\u65E0\u9700\u901A\u8FC7\u5E73\u53F0\u4E2D\u95F4\u4EE3\u7801\u8F6C\u6362\uFF0CDart \u53EF\u76F4\u63A5\u8C03\u7528 Golang \u65B9\u6CD5\u3002</li><li><strong>\u793A\u4F8B Demo</strong>\uFF1A\u5B9E\u73B0\u4E86\u4E00\u4E2A\u4ECE Golang \u5B9A\u65F6\u56DE\u8C03\u5F53\u524D\u65F6\u95F4\u5230 Flutter \u7684\u529F\u80FD\u3002</li><li><strong>\u7B80\u5355\u96C6\u6210</strong>\uFF1A\u5F00\u53D1\u8005\u4EC5\u9700 minimal \u914D\u7F6E\uFF0C\u5373\u53EF\u5728\u9879\u76EE\u4E2D\u76F4\u63A5\u4F7F\u7528\u3002</li><li><strong>Web \u517C\u5BB9</strong>\uFF1A\u652F\u6301 Web \u5E73\u53F0\uFF0C\u4F46\u8981\u6C42 Golang \u4EE3\u7801\u4E2D\u4E0D\u5B58\u5728 IO \u64CD\u4F5C\u3002</li></ul><hr><h2 id="\u6846\u67B6\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u6846\u67B6\u5DE5\u4F5C\u539F\u7406</h2><ol><li><strong>Dart FFI</strong>\uFF1A\u901A\u8FC7 Dart FFI\uFF0CFlutter \u9879\u76EE\u76F4\u63A5\u8C03\u7528\u672C\u5730 Golang \u52A8\u6001\u5E93\uFF08\u5982 <code>.so</code>\u3001<code>.dylib</code>\u3001<code>.dll</code>\uFF09\u3002</li><li><strong>Web \u5E73\u53F0\u652F\u6301</strong>\uFF1A\u901A\u8FC7 Golang \u7684 WebAssembly \u8F93\u51FA\uFF0C\u4F7F Dart \u80FD\u591F\u5728 Web \u5E73\u53F0\u8FD0\u884C Golang \u4EE3\u7801\u3002</li><li><strong>\u7EDF\u4E00\u63A5\u53E3</strong>\uFF1A\u6846\u67B6\u63D0\u4F9B\u7EDF\u4E00\u7684\u63A5\u53E3\u89C4\u8303\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u9075\u5FAA\u89C4\u8303\u58F0\u660E\u548C\u5B9E\u73B0\u63A5\u53E3\uFF0C\u65E0\u9700\u5904\u7406\u5E95\u5C42\u5E73\u53F0\u5DEE\u5F02\u3002</li></ol><hr><h2 id="\u4F7F\u7528\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6307\u5357" aria-hidden="true">#</a> \u4F7F\u7528\u6307\u5357</h2><h3 id="_1-\u4E0B\u8F7D\u548C\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u548C\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> 1. \u4E0B\u8F7D\u548C\u521D\u59CB\u5316\u9879\u76EE</h3><p>\u514B\u9686\u672C\u9879\u76EE\u5230\u60A8\u7684\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/your_repo/go2flutter.git
<span class="token builtin class-name">cd</span> go2flutter
</code></pre></div><hr><h3 id="_2-\u7F16\u8BD1-golang-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u8BD1-golang-\u4EE3\u7801" aria-hidden="true">#</a> 2. \u7F16\u8BD1 Golang \u4EE3\u7801</h3><p>Golang \u4EE3\u7801\u5E93\u4F4D\u4E8E <code>core</code> \u76EE\u5F55\u4E0B\uFF0C\u60A8\u9700\u8981\u5C06\u5E0C\u671B\u66B4\u9732\u7ED9 Flutter \u8C03\u7528\u7684\u65B9\u6CD5\u5206\u522B\u5B9A\u4E49\u5728\u4EE5\u4E0B\u6587\u4EF6\u4E2D\uFF1A</p><ul><li><strong>\u539F\u751F\u5E73\u53F0</strong>\uFF1A<code>core/export/cgo/main.go</code></li><li><strong>Web \u5E73\u53F0</strong>\uFF1A<code>core/export/web/main.go</code></li></ul><p>\u6846\u67B6\u5DF2\u63D0\u4F9B\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\uFF08\u5B9A\u65F6\u5668\u56DE\u8C03\u5F53\u524D\u65F6\u95F4\uFF09\uFF0C\u53EF\u53C2\u8003\u6269\u5C55\u3002\u5B8C\u6210\u65B9\u6CD5\u5B9A\u4E49\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u7F16\u8BD1\u6240\u6709\u5E73\u53F0\u7684 Golang \u52A8\u6001\u5E93\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">make</span> all
</code></pre></div><p>\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u7684\u5E93\u6587\u4EF6\u4F4D\u4E8E <code>core/build</code> \u76EE\u5F55\uFF1A</p><ul><li>\u539F\u751F\u52A8\u6001\u5E93\uFF08\u5982 <code>.so</code>\u3001<code>.dll</code>\u3001<code>.dylib</code>\uFF09\u4F4D\u4E8E <code>core/build/native</code>\u3002</li><li>WebAssembly \u6587\u4EF6\uFF08<code>.wasm</code>\uFF09\u4F4D\u4E8E <code>core/build/web</code>\u3002</li></ul><hr><h3 id="_3-\u5728-flutter-\u4E2D\u58F0\u660E-golang-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u5728-flutter-\u4E2D\u58F0\u660E-golang-\u65B9\u6CD5" aria-hidden="true">#</a> 3. \u5728 Flutter \u4E2D\u58F0\u660E Golang \u65B9\u6CD5</h3><ol><li>\u6253\u5F00 Flutter \u9879\u76EE\u7684 <code>lib/src/native_interface.dart</code> \u6587\u4EF6\u3002</li><li>\u6309\u4EE5\u4E0B\u65B9\u5F0F\u58F0\u660E\u5E76\u5B9E\u73B0 Golang \u65B9\u6CD5\uFF1A <ul><li>\u58F0\u660E\u4E0E Golang \u5BF9\u5E94\u7684\u51FD\u6570\u63A5\u53E3\u3002</li><li>\u4E3A Web \u5E73\u53F0\u5B9E\u73B0\u7279\u5B9A\u7684\u8C03\u7528\u903B\u8F91\u3002</li><li>\u4E3A\u5176\u4ED6\u5E73\u53F0\u5B9E\u73B0\u901A\u7528\u7684 FFI \u8C03\u7528\u3002</li></ul></li></ol><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\u63A5\u53E3\u58F0\u660E\uFF1A</p><div class="language-dart ext-dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token punctuation">{</span>
  late <span class="token keyword">final</span> <span class="token class-name">String</span> errMsg<span class="token punctuation">;</span>
  late <span class="token keyword">final</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>
  late <span class="token keyword">final</span> int code<span class="token punctuation">;</span>

  <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>errMsg<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">typedef</span> <span class="token class-name">OnMessage</span> <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u7C7B\u4F5C\u4E3A\u6807\u51C6\u6865\u6881</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">NativeLibraryInterface</span> <span class="token punctuation">{</span>
  <span class="token comment">// test get go time</span>
  <span class="token class-name">String</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u59CB\u5316</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span>bool<span class="token punctuation">&gt;</span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">OnMessage</span> onMessage<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">String</span> token<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u505C\u6B62</span>
  <span class="token function">stopWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5177\u4F53\u5B9E\u73B0\u8BF7\u53C2\u8003\u6846\u67B6\u4E2D\u5DF2\u63D0\u4F9B\u7684 <code>native_native_interface.dart</code> \u548C <code>web_native_interface.dart</code> \u6587\u4EF6\u3002</p><hr><h3 id="_4-\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u63D2\u4EF6" aria-hidden="true">#</a> 4. \u5728\u9879\u76EE\u4E2D\u5F15\u5165\u63D2\u4EF6</h3><p>\u5728\u60A8\u7684 Flutter \u9879\u76EE\u7684 <code>pubspec.yaml</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4F9D\u8D56\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">go</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./go2flutter
</code></pre></div><p>\u786E\u4FDD\u5C06\u8DEF\u5F84\u6307\u5411\u672C\u6846\u67B6\u7684\u5B9E\u9645\u8DEF\u5F84\u3002</p><hr><h3 id="_5-\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> 5. \u4F7F\u7528\u793A\u4F8B</h3><p>\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A example \u529F\u80FD\uFF1AGolang \u5B9A\u65F6\u5668\u6BCF\u79D2\u56DE\u8C03\u5F53\u524D\u65F6\u95F4\u5230 Flutter\u3002\u4EE5\u4E0B\u662F\u793A\u4F8B\u7528\u6CD5\uFF1A</p><div class="language-dart ext-dart"><pre class="language-dart"><code>  <span class="token comment">// \u521D\u59CB\u5316\u5E73\u53F0\u7248\u672C</span>
    <span class="token class-name">NativeLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _platformVersion <span class="token operator">=</span> message<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>bool isOk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _isOk <span class="token operator">=</span> isOk<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>kDebugMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;\u521D\u59CB\u5316go\uFF1A</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">isOk</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token class-name">SnackBar</span><span class="token punctuation">(</span>
                    content<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;\u83B7\u53D6\u7684\u65F6\u95F4: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token class-name">NativeLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    duration<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>\u8FD0\u884C Flutter \u5E94\u7528\u540E\uFF0C\u60A8\u5C06\u5728\u63A7\u5236\u53F0\u4E2D\u770B\u5230 Go \u7AEF\u5B9A\u65F6\u8FD4\u56DE\u7684\u65F6\u95F4\u3002</p><hr><h2 id="\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u76EE\u5F55\u7ED3\u6784</h2><div class="language-text ext-text"><pre class="language-text"><code>go2flutter/
\u2502
\u251C\u2500\u2500 core/                  # Golang \u4EE3\u7801\u5E93
\u2502   \u251C\u2500\u2500 export/            # Golang \u65B9\u6CD5\u5B9A\u4E49\u76EE\u5F55
\u2502   \u2502   \u251C\u2500\u2500 cgo/           # \u539F\u751F\u5E73\u53F0\u65B9\u6CD5
\u2502   \u2502   \u2514\u2500\u2500 web/           # Web \u5E73\u53F0\u65B9\u6CD5
\u2502   \u2514\u2500\u2500 ...                # \u5176\u4ED6 Golang \u6E90\u6587\u4EF6
\u2502
\u251C\u2500\u2500 lib/                   # Flutter \u4EE3\u7801\u5E93
\u2502   \u251C\u2500\u2500 src/               # FFI \u548C\u63A5\u53E3\u5B9E\u73B0
\u2502   \u2502   \u251C\u2500\u2500 native_interface.dart  # \u63A5\u53E3\u58F0\u660E
\u2502   \u2502   \u251C\u2500\u2500 native_universal.dart  # \u539F\u751F\u5E73\u53F0\u5B9E\u73B0
\u2502   \u2502   \u2514\u2500\u2500 native_web.dart     # Web \u5E73\u53F0\u5B9E\u73B0
\u2502   \u2514\u2500\u2500 ...
</code></pre></div><hr><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ol><li><strong>Web \u5E73\u53F0\u9650\u5236</strong>\uFF1A <ul><li>Golang \u4EE3\u7801\u5728 Web \u5E73\u53F0\u4E0A\u8FD0\u884C\u65F6\uFF0C\u4E0D\u652F\u6301 IO \u64CD\u4F5C\u3002</li><li>\u9700\u8981\u901A\u8FC7 WebAssembly \u7F16\u8BD1\u751F\u6210 <code>.wasm</code> \u6587\u4EF6\u3002</li></ul></li><li><strong>\u7F16\u8BD1\u5DE5\u5177\u94FE\u8981\u6C42</strong>\uFF1A <ul><li>\u9700\u8981\u5B89\u88C5 <code>make</code> \u5DE5\u5177\u3002</li><li>Golang \u73AF\u5883\u7248\u672C\u8981\u6C42\uFF1A1.17 \u53CA\u4EE5\u4E0A\u3002</li></ul></li><li><strong>\u52A8\u6001\u5E93\u517C\u5BB9\u6027</strong>\uFF1A <ul><li>\u5404\u5E73\u53F0\u7F16\u8BD1\u7684\u52A8\u6001\u5E93\u6587\u4EF6\u9700\u4E0E\u8FD0\u884C\u73AF\u5883\u5339\u914D\u3002</li><li>\u751F\u6210\u7684\u52A8\u6001\u5E93\u6587\u4EF6\u5305\u542B\u5E73\u53F0\u5DEE\u5F02\uFF0C\u8BF7\u786E\u4FDD\u6B63\u786E\u52A0\u8F7D\u3002</li></ul></li></ol><hr><h2 id="\u5F00\u53D1\u8005\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8005\u6269\u5C55" aria-hidden="true">#</a> \u5F00\u53D1\u8005\u6269\u5C55</h2><ol><li><strong>\u65B0\u589E Golang \u65B9\u6CD5</strong>\uFF1A <ul><li>\u5728 <code>core/export/cgo/main.go</code> \u6216 <code>core/export/web/main.go</code> \u4E2D\u5B9A\u4E49\u65B9\u6CD5\u3002</li><li>\u786E\u4FDD\u65B9\u6CD5\u7B7E\u540D\u7B26\u5408\u6846\u67B6\u89C4\u8303\u3002</li></ul></li><li><strong>\u6269\u5C55 Dart \u63A5\u53E3</strong>\uFF1A <ul><li>\u5728 <code>lib/src/native_interface.dart</code> \u4E2D\u6DFB\u52A0\u65B9\u6CD5\u58F0\u660E\u3002</li><li>\u5728 <code>native_native_interface.dart</code> \u548C <code>web_native_interface.dart</code> \u4E2D\u5B9E\u73B0\u3002</li></ul></li></ol><hr><h2 id="\u652F\u6301\u548C\u8D21\u732E" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u548C\u8D21\u732E" aria-hidden="true">#</a> \u652F\u6301\u548C\u8D21\u732E</h2><p>\u6B22\u8FCE\u8D21\u732E\u4EE3\u7801\u6216\u63D0\u4EA4\u95EE\u9898\u62A5\u544A\uFF01\u5982\u679C\u60A8\u5728\u4F7F\u7528\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u901A\u8FC7 Issue \u4E0E\u6211\u4EEC\u8054\u7CFB\u3002</p><hr><h2 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h2><p>\u901A\u8FC7\u672C\u9879\u76EE\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u65B9\u4FBF\u5730\u5728 Flutter \u9879\u76EE\u4E2D\u8C03\u7528 Golang \u65B9\u6CD5\uFF0C\u65E0\u9700\u5904\u7406\u5E73\u53F0\u4E2D\u95F4\u4EE3\u7801\u8F6C\u6362\uFF0C\u7B80\u5316\u4E86\u5F00\u53D1\u6D41\u7A0B\u3002\u5E0C\u671B\u60A8\u80FD\u4ECE\u4E2D\u83B7\u76CA\uFF01 \u{1F389}</p>`,52),p=[o];function c(l,i){return a(),s("div",null,p)}var r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
