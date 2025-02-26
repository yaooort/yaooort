import{_ as a,o as s,c as n,a as e}from"./app.764d674e.js";const t={},o=e(`<h1 id="\u8FD9\u4E2A\u811A\u672C\u662F-\u8FD9\u4F4D\u8001\u54E5\u5206\u4EAB\u7684" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u4E2A\u811A\u672C\u662F-\u8FD9\u4F4D\u8001\u54E5\u5206\u4EAB\u7684" aria-hidden="true">#</a> \u8FD9\u4E2A\u811A\u672C\u662F <a href="https://github.com/SuperManito/LinuxMirrors" target="_blank" rel="noopener noreferrer">\u8FD9\u4F4D\u8001\u54E5\u5206\u4EAB\u7684</a></h1><blockquote><p>\u4E00\u952E\u5B89\u88C5 docker \u5982\u679C\u811A\u672C\u4E0B\u8F7D\u4E0D\u5230\u53EF\u4EE5\u6362\u6211\u4EEC\u81EA\u5DF1\u7684\u5730\u5740</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://linuxmirrors.cn/docker.sh<span class="token punctuation">)</span>
</code></pre></div></blockquote><p>or</p><blockquote><p>\u4E00\u952E\u5B89\u88C5 docker \u6211\u6539\u7684\u4E00\u4E2A\u7248\u672C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://www.oortk.com/code/docker_init.sh<span class="token punctuation">)</span>
\u6216\u8005 <span class="token function">curl</span> <span class="token parameter variable">-sSL</span> <span class="token string">&quot;https://get.docker.com/&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div></blockquote><blockquote><p>\u670D\u52A1\u5668\u4E00\u952E\u66F4\u6539\u6E90</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://linuxmirrors.cn/main.sh<span class="token punctuation">)</span>
</code></pre></div></blockquote><h3 id="\u4E00\u952E\u7533\u8BF7-ssl-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u7533\u8BF7-ssl-\u8BC1\u4E66" aria-hidden="true">#</a> \u4E00\u952E\u7533\u8BF7 SSL \u8BC1\u4E66</h3><blockquote><p>\u7B2C\u4E00\u6B65\uFF1A\u83B7\u53D6 TXT \u8BB0\u5F55</p><p>./cert.sh example.com --issue</p><p>\u7B2C\u4E8C\u6B65\uFF1A\u6DFB\u52A0 DNS \u8BB0\u5F55\u540E\u9A8C\u8BC1</p><p>./cert.sh example.com --auth</p></blockquote><blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://www.oortk.com/code/cert.sh <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> example.com

\u6216\u8005

<span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://www.oortk.com/code/cert.sh<span class="token punctuation">)</span>

</code></pre></div></blockquote>`,8),p=[o];function c(r,l){return s(),n("div",null,p)}var i=a(t,[["render",c],["__file","index.html.vue"]]);export{i as default};
