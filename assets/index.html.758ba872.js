import{_ as s,o as n,c as a,a as t}from"./app.64382192.js";const e={},p=t(`<h1 id="ubuntu-22-04-\u8FDC\u7A0B\u684C\u9762\u73AF\u5883\u5B89\u88C5\u4E0E\u6700\u4F73\u5B9E\u8DF5\u5168\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#ubuntu-22-04-\u8FDC\u7A0B\u684C\u9762\u73AF\u5883\u5B89\u88C5\u4E0E\u6700\u4F73\u5B9E\u8DF5\u5168\u6307\u5357" aria-hidden="true">#</a> Ubuntu 22.04 \u8FDC\u7A0B\u684C\u9762\u73AF\u5883\u5B89\u88C5\u4E0E\u6700\u4F73\u5B9E\u8DF5\u5168\u6307\u5357</h1><blockquote><p>\u9002\u7528\u7248\u672C\uFF1AUbuntu 22.04 LTS\uFF08\u5176\u4ED6 22.x \u57FA\u672C\u540C\u7406\uFF09<br> \u9002\u7528\u573A\u666F\uFF1A\u4E91\u670D\u52A1\u5668\u56FE\u5F62\u5316\u7BA1\u7406\u3001\u56FE\u5F62\u5F00\u53D1\u3001\u6559\u5B66\u6F14\u793A\u3001\u8FDC\u7A0B\u529E\u516C\u3001\u4F4E\u5E26\u5BBD\u8FDC\u63A7</p></blockquote><hr><h3 id="\u76F4\u63A5\u4E0A\u5B8C\u6574\u7684\u4E00\u952E\u5B89\u88C5-shell" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4E0A\u5B8C\u6574\u7684\u4E00\u952E\u5B89\u88C5-shell" aria-hidden="true">#</a> \u76F4\u63A5\u4E0A\u5B8C\u6574\u7684\u4E00\u952E\u5B89\u88C5 shell</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment"># \u652F\u6301 root \u4F1A\u8BDD\u7684\u4FEE\u590D\u7248 GNOME + xrdp + TigerVNC \u5B89\u88C5\u811A\u672C</span>
<span class="token comment"># \u6A21\u5F0F: full|minimal|core  (core \u4E0D\u4F9D\u8D56 snapd/firefox)</span>
<span class="token comment"># \u65B0\u589E: ALLOW_ROOT=1 \u5141\u8BB8\u4F7F\u7528 root \u4F5C\u4E3A TARGET_USER</span>
<span class="token comment">#</span>
<span class="token comment"># \u73AF\u5883\u53D8\u91CF:</span>
<span class="token comment">#   DESKTOP_MODE=full|minimal|core (\u9ED8\u8BA4 full)</span>
<span class="token comment">#   SNAP_POLICY=install|switch-core|fail (\u9ED8\u8BA4 install)</span>
<span class="token comment">#   TARGET_USER=&lt;\u7528\u6237\u540D&gt; (\u9ED8\u8BA4\u81EA\u52A8\u63A8\u65AD\uFF1B\u82E5\u6700\u7EC8\u4E3A root \u9700 ALLOW_ROOT=1)</span>
<span class="token comment">#   ALLOW_ROOT=1 \u5141\u8BB8 root \u4F5C\u4E3A\u56FE\u5F62\u7528\u6237</span>
<span class="token comment">#   VNC_PASS=xxx</span>
<span class="token comment">#   VNC_GEOMETRY=1920x1080</span>
<span class="token comment">#   VNC_DEPTH=24</span>
<span class="token comment">#   AUTO_DISABLE_ANIMATION=1|0 (root \u4E0B\u4F1A\u81EA\u52A8\u8DF3\u8FC7)</span>
<span class="token comment">#   HEALTH_CHECK=1|0</span>
<span class="token comment">#</span>
<span class="token comment"># \u53C2\u6570:</span>
<span class="token comment">#   --verify \u540C HEALTH_CHECK=1</span>
<span class="token comment">#   --no-firefox \u63D0\u793A\u7ED5\u8FC7 firefox (\u9700\u6539 core)</span>
<span class="token comment">#</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-euo</span> pipefail

<span class="token assign-left variable">NO_FIREFOX</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">RUN_VERIFY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${HEALTH_CHECK<span class="token operator">:-</span>0}</span>&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token keyword">in</span>
    --verify<span class="token punctuation">)</span> <span class="token assign-left variable">RUN_VERIFY</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    --no-firefox<span class="token punctuation">)</span> <span class="token assign-left variable">NO_FIREFOX</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">done</span>

<span class="token function-name function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;%s %s<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token function-name function">die</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> log <span class="token string">&quot;ERROR&quot;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$EUID</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> die <span class="token string">&quot;\u8BF7\u7528 root \u6216 sudo \u8FD0\u884C&quot;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token function">apt-get</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">||</span> die <span class="token string">&quot;\u4EC5\u652F\u6301 apt \u7684 Ubuntu&quot;</span>

<span class="token assign-left variable">DESKTOP_MODE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${DESKTOP_MODE<span class="token operator">:-</span>full}</span>&quot;</span>
<span class="token assign-left variable">SNAP_POLICY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SNAP_POLICY<span class="token operator">:-</span>install}</span>&quot;</span>
<span class="token assign-left variable">VNC_PASS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${VNC_PASS<span class="token operator">:-</span>aa123123}</span>&quot;</span>
<span class="token assign-left variable">VNC_GEOMETRY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${VNC_GEOMETRY<span class="token operator">:-</span>1920x1080}</span>&quot;</span>
<span class="token assign-left variable">VNC_DEPTH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${VNC_DEPTH<span class="token operator">:-</span>24}</span>&quot;</span>
<span class="token assign-left variable">AUTO_DISABLE_ANIMATION</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${AUTO_DISABLE_ANIMATION<span class="token operator">:-</span>1}</span>&quot;</span>
<span class="token assign-left variable">ALLOW_ROOT</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ALLOW_ROOT<span class="token operator">:-</span>1}</span>&quot;</span>

<span class="token comment"># ---------- \u7528\u6237\u89E3\u6790 (\u652F\u6301 root) ----------</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${TARGET_USER<span class="token operator">:-</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">id</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    die <span class="token string">&quot;\u6307\u5B9A\u7684 TARGET_USER=<span class="token variable">$TARGET_USER</span> \u4E0D\u5B58\u5728&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token assign-left variable">CAND</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SUDO_USER<span class="token operator">:-</span>$(logname 2&gt;<span class="token operator">/</span>dev<span class="token operator">/</span>null || true)}</span>&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$CAND</span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$CAND</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">id</span> <span class="token string">&quot;<span class="token variable">$CAND</span>&quot;</span> <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">TARGET_USER</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$CAND</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token assign-left variable">TARGET_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$ALLOW_ROOT</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  die <span class="token string">&quot;\u5C06\u4F7F\u7528 root \u4F5C\u4E3A\u684C\u9762\u7528\u6237\u3002\u8BF7\u663E\u5F0F ALLOW_ROOT=1 \u4EE5\u786E\u8BA4: sudo ALLOW_ROOT=1 TARGET_USER=root <span class="token variable">$0</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">HOME_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">eval</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;~<span class="token variable">$TARGET_USER</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">||</span> die <span class="token string">&quot;\u7528\u6237\u5BB6\u76EE\u5F55\u4E0D\u5B58\u5728: <span class="token variable">$HOME_DIR</span>&quot;</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBIAN_FRONTEND</span><span class="token operator">=</span>noninteractive

log INFO <span class="token string">&quot;================ \u914D\u7F6E\u6982\u8981 ================&quot;</span>
log INFO <span class="token string">&quot;\u76EE\u6807\u7528\u6237:            <span class="token variable">$TARGET_USER</span>&quot;</span>
log INFO <span class="token string">&quot;HOME:                <span class="token variable">$HOME_DIR</span>&quot;</span>
log INFO <span class="token string">&quot;\u684C\u9762\u6A21\u5F0F:            <span class="token variable">$DESKTOP_MODE</span>&quot;</span>
log INFO <span class="token string">&quot;SNAP \u7B56\u7565:           <span class="token variable">$SNAP_POLICY</span>&quot;</span>
log INFO <span class="token string">&quot;\u5141\u8BB8 root:           <span class="token variable">$ALLOW_ROOT</span>&quot;</span>
log INFO <span class="token string">&quot;RDP \u7AEF\u53E3:            3389&quot;</span>
log INFO <span class="token string">&quot;VNC \u7AEF\u53E3(:1):        5901&quot;</span>
log INFO <span class="token string">&quot;VNC \u5206\u8FA8\u7387/\u6DF1\u5EA6:     <span class="token variable">$VNC_GEOMETRY</span> / <span class="token variable">$VNC_DEPTH</span>&quot;</span>
log INFO <span class="token string">&quot;\u5173\u95ED\u52A8\u753B:            <span class="token variable">$AUTO_DISABLE_ANIMATION</span> (root \u4F1A\u8DF3\u8FC7)&quot;</span>
log INFO <span class="token string">&quot;\u5065\u5EB7\u68C0\u67E5:            <span class="token variable">$RUN_VERIFY</span>&quot;</span>
log INFO <span class="token string">&quot;no-firefox \u6807\u5FD7:     <span class="token variable">$NO_FIREFOX</span>&quot;</span>
log INFO <span class="token string">&quot;===========================================&quot;</span>
<span class="token function">sleep</span> <span class="token number">1</span>

<span class="token comment"># ---------- snapd \u9700\u6C42\u5224\u5B9A ----------</span>
<span class="token assign-left variable">need_snap</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$DESKTOP_MODE</span>&quot;</span> <span class="token keyword">in</span>
  full<span class="token operator">|</span>minimal<span class="token punctuation">)</span> <span class="token assign-left variable">need_snap</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  core<span class="token punctuation">)</span> <span class="token assign-left variable">need_snap</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span> die <span class="token string">&quot;DESKTOP_MODE \u65E0\u6548: <span class="token variable">$DESKTOP_MODE</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token assign-left variable">snap_available</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token operator">!</span> dpkg <span class="token parameter variable">-s</span> snapd <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">snap_available</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">elif</span> <span class="token operator">!</span> systemctl is-active snapd.socket <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span> systemctl is-active snapd <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">snap_available</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">snap_pinned_neg</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-Riq</span> <span class="token string">&quot;Package: *snapd&quot;</span> /etc/apt/preferences /etc/apt/preferences.d <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-R</span> <span class="token string">&quot;Package: *snapd&quot;</span> <span class="token parameter variable">-n</span> /etc/apt/preferences /etc/apt/preferences.d <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token punctuation">\\</span>
     <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">grep</span> <span class="token parameter variable">-A2</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;Package: *snapd&quot;</span> <span class="token string">&quot;<span class="token variable">\${f<span class="token operator">%%</span><span class="token operator">:</span>*}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span> <span class="token punctuation">\\</span>
     <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-qi</span> <span class="token string">&quot;Pin-Priority: *-\\?1&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">snap_pinned_neg</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$need_snap</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$snap_available</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$SNAP_POLICY</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token function">install</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$snap_pinned_neg</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        log WARN <span class="token string">&quot;snapd \u6709\u8D1F\u4F18\u5148\u7EA7 pin\uFF0C\u6539\u7528 core \u6A21\u5F0F&quot;</span>
        <span class="token assign-left variable">DESKTOP_MODE</span><span class="token operator">=</span><span class="token string">&quot;core&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">need_snap</span><span class="token operator">=</span><span class="token number">0</span>
      <span class="token keyword">else</span>
        log ACTION <span class="token string">&quot;\u5B89\u88C5 snapd...&quot;</span>
        <span class="token function">apt-get</span> update <span class="token parameter variable">-y</span>
        <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> snapd
        systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> snapd.socket <span class="token operator">||</span> <span class="token boolean">true</span>
        <span class="token assign-left variable">snap_available</span><span class="token operator">=</span><span class="token number">1</span>
      <span class="token keyword">fi</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    switch-core<span class="token punctuation">)</span>
      log ACTION <span class="token string">&quot;SNAP_POLICY=switch-core -&gt; \u5207\u6362 core&quot;</span>
      <span class="token assign-left variable">DESKTOP_MODE</span><span class="token operator">=</span><span class="token string">&quot;core&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">need_snap</span><span class="token operator">=</span><span class="token number">0</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    fail<span class="token punctuation">)</span>
      die <span class="token string">&quot;\u9700\u8981 snapd \u4F46\u4E0D\u53EF\u7528\u3002\u6539 DESKTOP_MODE=core \u6216\u8BBE\u7F6E SNAP_POLICY=install&quot;</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> die <span class="token string">&quot;SNAP_POLICY \u65E0\u6548: <span class="token variable">$SNAP_POLICY</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$NO_FIREFOX</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$DESKTOP_MODE</span> <span class="token operator">!=</span> <span class="token string">&quot;core&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  log WARN <span class="token string">&quot;--no-firefox \u4EC5\u63D0\u793A\u3002\u5B8C\u6574/\u6700\u5C0F\u684C\u9762\u5143\u5305\u4ECD\u4F1A\u62C9 firefox\uFF1B\u907F\u514D\u8BF7\u7528 core\u3002&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># ---------- \u5B89\u88C5 ----------</span>
log INFO <span class="token string">&quot;[1/9] apt \u66F4\u65B0&quot;</span>
<span class="token function">apt-get</span> update <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> software-properties-common <span class="token function">curl</span> <span class="token function">wget</span> locales gsettings-desktop-schemas dbus-x11

log INFO <span class="token string">&quot;[2/9] \u5B89\u88C5\u684C\u9762 (<span class="token variable">$DESKTOP_MODE</span>)&quot;</span>
<span class="token function-name function">install_core</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> --no-install-recommends <span class="token punctuation">\\</span>
    gnome-shell gnome-session gdm3 gnome-terminal nautilus <span class="token punctuation">\\</span>
    adwaita-icon-theme mesa-utils x11-xserver-utils policykit-1 fonts-dejavu-core
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$DESKTOP_MODE</span>&quot;</span> <span class="token keyword">in</span>
  full<span class="token punctuation">)</span>    <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ubuntu-desktop <span class="token punctuation">;</span><span class="token punctuation">;</span>
  minimal<span class="token punctuation">)</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ubuntu-desktop-minimal <span class="token punctuation">;</span><span class="token punctuation">;</span>
  core<span class="token punctuation">)</span>    install_core <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

log INFO <span class="token string">&quot;[3/9] \u7981\u7528 Wayland&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/gdm3/custom.conf <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^#\\?WaylandEnable=.*/WaylandEnable=false/&#39;</span> /etc/gdm3/custom.conf
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;[daemon]<span class="token entity" title="\\n">\\n</span>WaylandEnable=false&quot;</span> <span class="token operator">&gt;</span>/etc/gdm3/custom.conf
<span class="token keyword">fi</span>
systemctl restart gdm3 <span class="token operator">||</span> <span class="token boolean">true</span>

log INFO <span class="token string">&quot;[4/9] \u5B89\u88C5 xrdp&quot;</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> xrdp
adduser <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> ssl-cert <span class="token operator">||</span> <span class="token boolean">true</span>

<span class="token comment"># \u5141\u8BB8 root \u767B\u5F55 (sesman.ini)</span>
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&#39;^AllowRootLogin=&#39;</span> /etc/xrdp/sesman.ini<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^AllowRootLogin=.*/AllowRootLogin=1/&#39;</span> /etc/xrdp/sesman.ini
<span class="token keyword">else</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^\\[Security\\]/a AllowRootLogin=1&#39;</span> /etc/xrdp/sesman.ini
<span class="token keyword">fi</span>

<span class="token assign-left variable">XRDP_STARTWM</span><span class="token operator">=</span><span class="token string">&quot;/etc/xrdp/startwm.sh&quot;</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;CUSTOM_GNOME_SESSION&quot;</span> <span class="token string">&quot;<span class="token variable">$XRDP_STARTWM</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">cp</span> <span class="token string">&quot;<span class="token variable">$XRDP_STARTWM</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${XRDP_STARTWM}</span>.bak.<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/test -x \\/etc\\/X11\\/Xsession/,$d&#39;</span> <span class="token string">&quot;<span class="token variable">$XRDP_STARTWM</span>&quot;</span>
  <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span><span class="token string">&quot;<span class="token variable">$XRDP_STARTWM</span>&quot;</span> <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# CUSTOM_GNOME_SESSION
export GNOME_SHELL_SESSION_MODE=gnome
export XDG_CURRENT_DESKTOP=GNOME
export GNOME_DESKTOP_SESSION_ID=this-is-deprecated
if [ -r /etc/default/locale ]; then
  . /etc/default/locale
  export LANG LANGUAGE LC_ALL
fi
if [ -f &quot;$HOME/.xsession&quot; ]; then
  . &quot;$HOME/.xsession&quot;
fi
exec /usr/bin/gnome-session
EOF</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.xsession&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;gnome-session&quot;</span> <span class="token operator">&gt;</span><span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.xsession&quot;</span>
  <span class="token function">chown</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.xsession&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token keyword">fi</span>

systemctl <span class="token builtin class-name">enable</span> xrdp
systemctl restart xrdp

log INFO <span class="token string">&quot;[5/9] \u5B89\u88C5 TigerVNC&quot;</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> tigervnc-standalone-server tigervnc-common
<span class="token assign-left variable">VNC_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.vnc&quot;</span>
<span class="token function">install</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-m</span> <span class="token number">700</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token parameter variable">-g</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$VNC_DIR</span>&quot;</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span><span class="token string">&quot;<span class="token variable">$VNC_DIR</span>/xstartup&quot;</span> <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
#!/bin/sh
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
export GNOME_SHELL_SESSION_MODE=gnome
export XDG_CURRENT_DESKTOP=GNOME
export GNOME_DESKTOP_SESSION_ID=this-is-deprecated
exec gnome-session &amp;
EOF</span>
<span class="token function">chown</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$VNC_DIR</span>/xstartup&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token function">chmod</span> +x <span class="token string">&quot;<span class="token variable">$VNC_DIR</span>/xstartup&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$VNC_PASS</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;\u8F93\u5165 VNC \u5BC6\u7801(6~8\u4F4D, \u56DE\u8F66\u8DF3\u8FC7): &quot;</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-s</span> VNC_IN<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$VNC_IN</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">VNC_PASS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$VNC_IN</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$VNC_PASS</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">su</span> - <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;mkdir -p ~/.vnc &amp;&amp; echo &#39;<span class="token variable">$VNC_PASS</span>&#39; | vncpasswd -f &gt; ~/.vnc/passwd&quot;</span>
  <span class="token function">chown</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.vnc/passwd&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span>
  <span class="token function">chmod</span> <span class="token number">600</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.vnc/passwd&quot;</span>
<span class="token keyword">fi</span>

log INFO <span class="token string">&quot;[6/9] \u521B\u5EFA VNC systemd \u670D\u52A1&quot;</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/systemd/system/vnc@.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=TigerVNC server for %i (:1)
After=network.target

[Service]
Type=forking
User=%i
PAMName=login
PIDFile=/home/%i/.vnc/%H:%i.pid
ExecStartPre=/bin/sh -c &#39;install -d -m 700 /home/%i/.vnc&#39;
ExecStart=/usr/bin/vncserver -geometry <span class="token variable">\${VNC_GEOMETRY}</span> -depth <span class="token variable">\${VNC_DEPTH}</span> -localhost no :1
ExecStop=/usr/bin/vncserver -kill :1

[Install]
WantedBy=multi-user.target
EOF</span>
systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> vnc@<span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$HOME_DIR</span>/.vnc/passwd&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  systemctl start vnc@<span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">||</span> log WARN <span class="token string">&quot;VNC \u542F\u52A8\u5931\u8D25\uFF0C\u67E5 ~/.vnc/*.log&quot;</span>
<span class="token keyword">else</span>
  log WARN <span class="token string">&quot;\u672A\u8BBE\u7F6E VNC \u5BC6\u7801\uFF0C\u7A0D\u540E: sudo -u <span class="token variable">$TARGET_USER</span> vncpasswd &amp;&amp; systemctl start vnc@<span class="token variable">$TARGET_USER</span>&quot;</span>
<span class="token keyword">fi</span>

log INFO <span class="token string">&quot;[7/9] \u6027\u80FD\u4F18\u5316&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$AUTO_DISABLE_ANIMATION</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">su</span> - <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;gsettings set org.gnome.desktop.interface enable-animations false&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$AUTO_DISABLE_ANIMATION</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  log WARN <span class="token string">&quot;\u8DF3\u8FC7 root \u52A8\u753B\u5173\u95ED (\u7F3A\u5C11\u666E\u901A DBus \u684C\u9762\u4F1A\u8BDD)&quot;</span>
<span class="token keyword">fi</span>

log INFO <span class="token string">&quot;[8/9] \u9632\u706B\u5899&quot;</span>
<span class="token keyword">if</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> ufw <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  ufw allow <span class="token number">3389</span>/tcp <span class="token operator">||</span> <span class="token boolean">true</span>
  ufw allow <span class="token number">5901</span>/tcp <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token keyword">fi</span>

log INFO <span class="token string">&quot;[9/9] dpkg \u81EA\u68C0&quot;</span>
dpkg <span class="token parameter variable">--configure</span> <span class="token parameter variable">-a</span> <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token operator">||</span> <span class="token boolean">true</span>

<span class="token function-name function">health_check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt; \u5065\u5EB7\u68C0\u67E5&quot;</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">fail</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token function-name function">CHK</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[OK] <span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[FAIL] <span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">fail</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>fail<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span><span class="token punctuation">;</span> <span class="token keyword">fi</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">p</span> <span class="token keyword">in</span> gnome-shell gnome-session gdm3 xrdp tigervnc-standalone-server<span class="token punctuation">;</span> <span class="token keyword">do</span>
    CHK <span class="token string">&quot;\u5305\u5B89\u88C5: <span class="token variable">$p</span>&quot;</span> <span class="token string">&quot;dpkg -s <span class="token variable">$p</span> &gt;/dev/null 2&gt;&amp;1&quot;</span>
  <span class="token keyword">done</span>
  CHK <span class="token string">&quot;gdm3 \u6D3B\u8DC3&quot;</span> <span class="token string">&quot;systemctl is-active gdm3 &gt;/dev/null 2&gt;&amp;1&quot;</span>
  CHK <span class="token string">&quot;xrdp \u6D3B\u8DC3&quot;</span> <span class="token string">&quot;systemctl is-active xrdp &gt;/dev/null 2&gt;&amp;1&quot;</span>
  systemctl is-enabled vnc@<span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[OK] VNC \u670D\u52A1\u542F\u7528&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[WARN] VNC \u670D\u52A1\u672A\u542F\u7528&quot;</span>
  systemctl is-active vnc@<span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[OK] VNC \u8FD0\u884C\u4E2D&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;[WARN] VNC \u672A\u8FD0\u884C&quot;</span>
  CHK <span class="token string">&quot;RDP 3389 \u76D1\u542C&quot;</span> <span class="token string">&quot;ss -tln | awk &#39;{print \\<span class="token variable">$4</span>}&#39; | grep -E &#39;(:|<span class="token entity" title="\\\\">\\\\</span>.)3389\\$&#39; &gt;/dev/null&quot;</span>
  CHK <span class="token string">&quot;VNC 5901 \u76D1\u542C&quot;</span> <span class="token string">&quot;ss -tln | awk &#39;{print \\<span class="token variable">$4</span>}&#39; | grep -E &#39;(:|<span class="token entity" title="\\\\">\\\\</span>.)5901\\$&#39; &gt;/dev/null&quot;</span>
  CHK <span class="token string">&quot;Wayland \u7981\u7528&quot;</span> <span class="token string">&quot;grep -q &#39;^WaylandEnable=false&#39; /etc/gdm3/custom.conf&quot;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$fail</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5065\u5EB7\u68C0\u67E5\uFF1A\u5168\u90E8\u901A\u8FC7&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5065\u5EB7\u68C0\u67E5\uFF1A<span class="token variable">$fail</span> \u9879\u5931\u8D25&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt; \u7ED3\u675F&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;================ \u5B89\u88C5\u5B8C\u6210 =================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6A21\u5F0F: <span class="token variable">$DESKTOP_MODE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7528\u6237: <span class="token variable">$TARGET_USER</span>&quot;</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$TARGET_USER</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8B66\u544A: \u5F53\u524D\u4F7F\u7528 root \u56FE\u5F62\u4F1A\u8BDD\uFF0C\u5EFA\u8BAE\u5C3D\u5FEB\u521B\u5EFA\u666E\u901A\u7528\u6237\u3002&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;RDP: 3389 (\u9009\u62E9 Xorg \u4F1A\u8BDD)&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;VNC: 5901 (:1 VNC \u5BC6\u7801 &quot;</span><span class="token variable">$VNC_PASS</span><span class="token string">&quot;)&quot;</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$VNC_PASS</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u672A\u8BBE VNC \u5BC6\u7801: sudo -u <span class="token variable">$TARGET_USER</span> vncpasswd &amp;&amp; systemctl start vnc@<span class="token variable">$TARGET_USER</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;==========================================&quot;</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$RUN_VERIFY</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> health_check
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment">### \u5982\u679C\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF\u5C31\u8FD0\u884C\u4E24\u6B21\u5B89\u88C5\u811A\u672C</span>
Errors were encountered <span class="token keyword">while</span> processing: /tmp/apt-dpkg-install-OElkaL/0027-firefox_1%3a1snap1-0ubuntu2_amd64.deb needrestart is being skipped since dpkg has failed E: Sub-process /usr/bin/dpkg returned an error code <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h2><ol><li>\u4E3A\u4EC0\u4E48\u9700\u8981\u8FDC\u7A0B\u684C\u9762 &amp; \u65B9\u6848\u5BF9\u6BD4</li><li>\u57FA\u7840\u51C6\u5907\uFF08\u66F4\u65B0\u3001\u7528\u6237\u3001\u4E3B\u673A\u540D\u3001\u65F6\u533A\u3001\u955C\u50CF\u6E90\uFF09</li><li>\u9009\u62E9\u684C\u9762\u73AF\u5883\uFF08GNOME / XFCE / MATE / LXQt\uFF09</li><li>\u65B9\u6848\u4E00\uFF1AXRDP\uFF08RDP \u534F\u8BAE\uFF0CWindows \u5BA2\u6237\u7AEF\u53CB\u597D\uFF09</li><li>\u65B9\u6848\u4E8C\uFF1AVNC\uFF08TigerVNC \u5B9E\u6218\uFF09</li><li>\u65B9\u6848\u4E09\uFF1AX2Go\uFF08\u9AD8\u5EF6\u8FDF/\u4F4E\u5E26\u5BBD\u66F4\u6D41\u7545\uFF09</li><li>\u5176\u4ED6\u53EF\u9009\u65B9\u6848\uFF08NoMachine / Chrome Remote Desktop / RustDesk\uFF09</li><li>\u5B89\u5168\u52A0\u56FA\uFF08\u9632\u706B\u5899\u3001\u7AEF\u53E3\u3001\u52A0\u5BC6\u3001Fail2Ban\u3001\u6700\u5C0F\u6743\u9650\uFF09</li><li>\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE</li><li>\u5E38\u89C1\u6545\u969C\u6392\u67E5</li><li>\u5E38\u89C1\u95EE\u7B54\uFF08FAQ\uFF09</li><li>\u5FEB\u901F\u547D\u4EE4\u6E05\u5355\uFF08Cheat Sheet\uFF09</li></ol><hr><h2 id="_1-\u4E3A\u4EC0\u4E48\u9700\u8981\u8FDC\u7A0B\u684C\u9762-\u65B9\u6848\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u9700\u8981\u8FDC\u7A0B\u684C\u9762-\u65B9\u6848\u5BF9\u6BD4" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u9700\u8981\u8FDC\u7A0B\u684C\u9762 &amp; \u65B9\u6848\u5BF9\u6BD4</h2><table><thead><tr><th>\u9700\u6C42</th><th>\u63A8\u8350\u65B9\u6848</th><th>\u4F18\u70B9</th><th>\u6CE8\u610F\u70B9</th></tr></thead><tbody><tr><td>Windows \u81EA\u5E26 mstsc \u76F4\u63A5\u8FDE</td><td>XRDP</td><td>\u65E0\u9700\u989D\u5916\u5BA2\u6237\u7AEF</td><td>\u9ED8\u8BA4 3389 \u9700\u52A0\u56FA</td></tr><tr><td>\u9AD8\u6E05 GUI + \u591A\u7528\u6237 + \u7A33\u5B9A</td><td>XRDP / X2Go</td><td>\u4F1A\u8BDD\u9694\u79BB</td><td>GNOME+XRDP \u5076\u53D1\u9ED1\u5C4F</td></tr><tr><td>\u4F4E\u5E26\u5BBD / \u9AD8\u5EF6\u8FDF</td><td>X2Go</td><td>NX \u538B\u7F29\u597D</td><td>\u5BA2\u6237\u7AEF\u9700\u5B89\u88C5</td></tr><tr><td>\u4E34\u65F6\u8C03\u8BD5 / \u5D4C\u5165\u5176\u4ED6\u5DE5\u5177</td><td>VNC over SSH</td><td>\u7B80\u5355\u901A\u7528</td><td>\u539F\u751F\u52A0\u5BC6\u5F31</td></tr><tr><td>\u7A7F\u900F / \u81EA\u5E26\u4E2D\u7EE7</td><td>RustDesk / Chrome</td><td>\u7B80\u5316 NAT</td><td>\u4F9D\u8D56\u7B2C\u4E09\u65B9\u670D\u52A1</td></tr><tr><td>\u591A\u5A92\u4F53/3D</td><td>NoMachine</td><td>\u56FE\u5F62\u52A0\u901F\u66F4\u597D</td><td>\u95ED\u6E90\u514D\u8D39\u7248\u9650\u5236</td></tr></tbody></table><hr><h2 id="_2-\u57FA\u7840\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u51C6\u5907" aria-hidden="true">#</a> 2. \u57FA\u7840\u51C6\u5907</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u7CFB\u7EDF</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> upgrade

<span class="token comment"># \u5B89\u88C5\u5E38\u7528\u5DE5\u5177</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> <span class="token function">wget</span> <span class="token function">vim</span> <span class="token function">htop</span> net-tools <span class="token function">unzip</span> <span class="token function">tar</span> <span class="token function">git</span>

<span class="token comment"># \u8BBE\u7F6E\u65F6\u533A\uFF08\u793A\u4F8B\uFF1AAsia/Shanghai\uFF09</span>
<span class="token function">sudo</span> timedatectl set-timezone Asia/Shanghai

<span class="token comment"># \u786E\u8BA4\u5F53\u524D\u7528\u6237\uFF08\u907F\u514D\u76F4\u63A5\u7528 root\uFF09</span>
<span class="token function">whoami</span>
</code></pre></div><p>\u5982\u679C\u662F\u4E91\u670D\u52A1\u5668\uFF0C\u5EFA\u8BAE\u5148\u5FEB\u7167 / \u5907\u4EFD\uFF0C\u4EE5\u4FBF\u56DE\u6EDA\u3002</p><hr><h2 id="_3-\u9009\u62E9\u684C\u9762\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-\u9009\u62E9\u684C\u9762\u73AF\u5883" aria-hidden="true">#</a> 3. \u9009\u62E9\u684C\u9762\u73AF\u5883</h2><table><thead><tr><th>\u684C\u9762</th><th>\u5305\u540D</th><th>\u5185\u5B58\u5360\u7528\uFF08\u5927\u81F4\u7A7A\u95F2\uFF09</th><th>\u9002\u5408</th></tr></thead><tbody><tr><td>GNOME (\u9ED8\u8BA4)</td><td>ubuntu-desktop / ubuntu-desktop-minimal</td><td>900MB~1.3GB</td><td>\u5B8C\u6574\u4F53\u9A8C</td></tr><tr><td>XFCE</td><td>xubuntu-core / xubuntu-desktop</td><td>350~600MB</td><td>\u8F7B\u91CF\u901A\u7528</td></tr><tr><td>MATE</td><td>ubuntu-mate-core</td><td>500~800MB</td><td>\u4F20\u7EDF\u5E03\u5C40</td></tr><tr><td>LXQt</td><td>lxqt-core</td><td>300~450MB</td><td>\u6781\u8F7B\u91CF</td></tr></tbody></table><p>\u793A\u4F8B\u5B89\u88C5 XFCE\uFF08\u63A8\u8350\u5728\u8D44\u6E90\u6709\u9650\u7684 VPS\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> xfce4 xfce4-goodies
</code></pre></div><p>GNOME \u7CBE\u7B80\u7248\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ubuntu-desktop-minimal
</code></pre></div><hr><h2 id="_4-\u65B9\u6848\u4E00-xrdp" tabindex="-1"><a class="header-anchor" href="#_4-\u65B9\u6848\u4E00-xrdp" aria-hidden="true">#</a> 4. \u65B9\u6848\u4E00\uFF1AXRDP</h2><h3 id="_4-1-\u5B89\u88C5-xrdp" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5B89\u88C5-xrdp" aria-hidden="true">#</a> 4.1 \u5B89\u88C5 XRDP</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> xrdp
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> xrdp
</code></pre></div><h3 id="_4-2-\u4F7F\u7528\u8F7B\u91CF\u684C\u9762-\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4F7F\u7528\u8F7B\u91CF\u684C\u9762-\u53EF\u9009" aria-hidden="true">#</a> 4.2 \u4F7F\u7528\u8F7B\u91CF\u684C\u9762\uFF08\u53EF\u9009\uFF09</h3><p>\u82E5\u4F60\u88C5\u4E86 XFCE\uFF0C\u5E76\u8BA9 XRDP \u9ED8\u8BA4\u52A0\u8F7D XFCE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;xfce4-session&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/skel/.Xsession
<span class="token builtin class-name">echo</span> <span class="token string">&quot;xfce4-session&quot;</span> <span class="token operator">&gt;</span> ~/.Xsession
</code></pre></div><p>\u6216\u9488\u5BF9\u5355\u7528\u6237\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;startxfce4&quot;</span> <span class="token operator">&gt;</span> ~/.xsession
<span class="token function">chmod</span> +x ~/.xsession
</code></pre></div><h3 id="_4-3-gnome-\u4E0E-xrdp" tabindex="-1"><a class="header-anchor" href="#_4-3-gnome-\u4E0E-xrdp" aria-hidden="true">#</a> 4.3 GNOME \u4E0E XRDP</h3><p>Ubuntu 22.04 \u9ED8\u8BA4\u542F\u7528 Wayland\uFF08\u767B\u5F55\u7269\u7406\u673A\u624D\u5E38\u89C1\uFF09\uFF1BXRDP \u4F9D\u8D56 Xorg\u3002\u5982\u679C\u8FDC\u7A0B\u9ED1\u5C4F\uFF0C\u53EF\u5728 <code>/etc/gdm3/custom.conf</code> \u53D6\u6D88\u6CE8\u91CA\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>#WaylandEnable=false
</code></pre></div><p>\u6539\u6210\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>WaylandEnable=false
</code></pre></div><p>\u7136\u540E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart gdm3
<span class="token function">sudo</span> systemctl restart xrdp
</code></pre></div><h3 id="_4-4-ssl-\u8BC1\u4E66\u4E0E\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_4-4-ssl-\u8BC1\u4E66\u4E0E\u6743\u9650" aria-hidden="true">#</a> 4.4 SSL \u8BC1\u4E66\u4E0E\u6743\u9650</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> adduser xrdp ssl-cert
<span class="token function">sudo</span> systemctl restart xrdp
</code></pre></div><h3 id="_4-5-\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_4-5-\u9632\u706B\u5899" aria-hidden="true">#</a> 4.5 \u9632\u706B\u5899</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow from <span class="token operator">&lt;</span>\u4F60\u7684\u529E\u516C\u51FA\u53E3IP<span class="token operator">&gt;</span>/32 to any port <span class="token number">3389</span>
<span class="token comment"># \u82E5\u6CA1\u6709\u56FA\u5B9A IP\uFF08\u4E0D\u63A8\u8350\uFF09\uFF0C\u4E34\u65F6\uFF1A</span>
<span class="token comment"># sudo ufw allow 3389/tcp</span>
<span class="token function">sudo</span> ufw status
</code></pre></div><h3 id="_4-6-\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_4-6-\u8FDE\u63A5" aria-hidden="true">#</a> 4.6 \u8FDE\u63A5</h3><p>\u5728 Windows\uFF1AWin+R \u2192 mstsc \u2192 \u8F93\u5165\u670D\u52A1\u5668 IP \u2192 \u7528\u6237\u540D + \u5BC6\u7801\u3002<br> \u5982\u679C\u9ED1\u5C4F\uFF1A\u770B\u65E5\u5FD7 <code>/var/log/xrdp.log</code> \u4E0E <code>/var/log/xrdp-sesman.log</code>\u3002</p><hr><h2 id="_5-\u65B9\u6848\u4E8C-vnc-tigervnc" tabindex="-1"><a class="header-anchor" href="#_5-\u65B9\u6848\u4E8C-vnc-tigervnc" aria-hidden="true">#</a> 5. \u65B9\u6848\u4E8C\uFF1AVNC\uFF08TigerVNC\uFF09</h2><h3 id="_5-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5B89\u88C5" aria-hidden="true">#</a> 5.1 \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> tigervnc-standalone-server tigervnc-common
</code></pre></div><h3 id="_5-2-\u521B\u5EFA-vnc-\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_5-2-\u521B\u5EFA-vnc-\u5BC6\u7801" aria-hidden="true">#</a> 5.2 \u521B\u5EFA VNC \u5BC6\u7801</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>vncpasswd
</code></pre></div><h3 id="_5-3-\u9996\u6B21\u8FD0\u884C\u751F\u6210\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-3-\u9996\u6B21\u8FD0\u884C\u751F\u6210\u914D\u7F6E" aria-hidden="true">#</a> 5.3 \u9996\u6B21\u8FD0\u884C\u751F\u6210\u914D\u7F6E</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>vncserver :1
vncserver <span class="token parameter variable">-kill</span> :1
</code></pre></div><h3 id="_5-4-\u914D\u7F6E\u4F1A\u8BDD-xfce-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-4-\u914D\u7F6E\u4F1A\u8BDD-xfce-\u793A\u4F8B" aria-hidden="true">#</a> 5.4 \u914D\u7F6E\u4F1A\u8BDD\uFF08XFCE \u793A\u4F8B\uFF09</h3><p><code>~/.vnc/xstartup</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">unset</span> <span class="token environment constant">SESSION_MANAGER</span>
<span class="token builtin class-name">unset</span> <span class="token environment constant">DBUS_SESSION_BUS_ADDRESS</span>
startxfce4 <span class="token operator">&amp;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x ~/.vnc/xstartup
</code></pre></div><h3 id="_5-5-systemd-\u7BA1\u7406-\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#_5-5-systemd-\u7BA1\u7406-\u53EF\u9009" aria-hidden="true">#</a> 5.5 Systemd \u7BA1\u7406\uFF08\u53EF\u9009\uFF09</h3><div class="language-text ext-text"><pre class="language-text"><code>sudo tee /etc/systemd/system/vnc@.service &gt;/dev/null &lt;&lt;&#39;EOF&#39;
[Unit]
Description=VNC per-user instance
After=network.target

[Service]
Type=forking
User=%i
PAMName=login
PIDFile=/home/%i/.vnc/%H:1.pid
ExecStartPre=/usr/bin/vncserver -kill :1 &gt; /dev/null 2&gt;&amp;1 || true
ExecStart=/usr/bin/vncserver :1 -localhost yes -geometry 1920x1080 -depth 24
ExecStop=/usr/bin/vncserver -kill :1

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><p>\u542F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> vnc@<span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span>.service
</code></pre></div><p>\u6CE8\u610F\uFF1A<code>-localhost yes</code> \u53EA\u76D1\u542C 127.0.0.1\uFF0C\u9700\u914D\u5408 SSH \u96A7\u9053\uFF1A</p><p>\u672C\u5730\u5BA2\u6237\u7AEF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">5901</span>:localhost:5901 user@server_ip
</code></pre></div><p>\u7136\u540E\u7528 VNC Viewer \u8FDE\u63A5\uFF1A<code>localhost:5901</code></p><h3 id="_5-6-\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#_5-6-\u52A0\u5BC6" aria-hidden="true">#</a> 5.6 \u52A0\u5BC6</h3><p>\u539F\u751F VNC \u52A0\u5BC6\u5F31\uFF0C\u63A8\u8350\u6C38\u8FDC\u8D70 SSH \u96A7\u9053\u6216 stunnel\u3002</p><hr><h2 id="_6-\u65B9\u6848\u4E09-x2go" tabindex="-1"><a class="header-anchor" href="#_6-\u65B9\u6848\u4E09-x2go" aria-hidden="true">#</a> 6. \u65B9\u6848\u4E09\uFF1AX2Go</h2><p>\u4F18\u70B9\uFF1A\u9AD8\u538B\u7F29\u3001\u4F1A\u8BDD\u53EF\u65AD\u70B9\u7EED\u8FDE\u3001\u6BD4 VNC \u6D41\u7545\u3002\u7F3A\u70B9\uFF1A\u5BA2\u6237\u7AEF\u9700\u5B89\u88C5\u3002</p><h3 id="_6-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_6-1-\u5B89\u88C5" aria-hidden="true">#</a> 6.1 \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> x2goserver x2goserver-xsession
</code></pre></div><p>\u684C\u9762\u53EF\u9009 XFCE/ MATE\u3002\u5B89\u88C5\u5B8C\u540E\u76F4\u63A5\u7528 X2Go Client\uFF08Windows/macOS/Linux\uFF09\u6DFB\u52A0\u4F1A\u8BDD\uFF1A</p><ul><li>Host\uFF1A\u670D\u52A1\u5668 IP</li><li>SSH Port\uFF1A22</li><li>Session type\uFF1AXFCE / MATE / GNOME (\u9700 Xorg)</li><li>Compression\uFF1A\u6839\u636E\u5E26\u5BBD\u8C03\u6574\uFF08\u9ED8\u8BA4\u5373\u53EF\uFF09</li></ul><hr><h2 id="_7-\u5176\u4ED6\u65B9\u6848-\u4E00\u884C\u70B9\u8BC4" tabindex="-1"><a class="header-anchor" href="#_7-\u5176\u4ED6\u65B9\u6848-\u4E00\u884C\u70B9\u8BC4" aria-hidden="true">#</a> 7. \u5176\u4ED6\u65B9\u6848\uFF08\u4E00\u884C\u70B9\u8BC4\uFF09</h2><table><thead><tr><th>\u65B9\u6848</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>NoMachine (nomachine.com)</td><td>\u56FE\u5F62\u4E0E\u591A\u5A92\u4F53\u8868\u73B0\u597D\uFF0C\u79C1\u6709\u534F\u8BAE</td></tr><tr><td>Chrome Remote Desktop</td><td>\u7A7F\u900F\u7B80\u5355\uFF0C\u9700 Google \u8D26\u53F7</td></tr><tr><td>RustDesk</td><td>\u5F00\u6E90 + \u81EA\u5EFA\u4E2D\u7EE7\u9009\u9879\uFF0C\u5F88\u9002\u5408\u5185\u7F51\u7A7F\u900F</td></tr><tr><td>Apache Guacamole</td><td>Web \u7AEF\u7EDF\u4E00\u63A5\u5165 RDP/VNC/SSH</td></tr><tr><td>RDP over SSH</td><td>\u4E0D\u66B4\u9732 3389\uFF0C\u5B89\u5168\u6027\u63D0\u5347</td></tr></tbody></table><hr><h2 id="_8-\u5B89\u5168\u52A0\u56FA" tabindex="-1"><a class="header-anchor" href="#_8-\u5B89\u5168\u52A0\u56FA" aria-hidden="true">#</a> 8. \u5B89\u5168\u52A0\u56FA</h2><ol><li>\u4E0D\u88F8\u9732 3389 / 5901\uFF1A\u7528 SSH \u96A7\u9053 / WireGuard / VPN\u3002</li><li>\u4FEE\u6539\u9ED8\u8BA4\u7AEF\u53E3\uFF08XRDP\uFF09\uFF1A<code>/etc/xrdp/xrdp.ini</code> \u4E2D <code>port=3389</code> \u2192 \u6539\u4E3A\u81EA\u5B9A\u4E49\u3002</li><li>\u9650\u5236\u6765\u6E90 IP\uFF1A<code>ufw allow from 1.2.3.4 to any port 3389</code>\u3002</li><li>Fail2Ban \u89C4\u5219\uFF08XRDP\uFF09\uFF1A<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> fail2ban
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/fail2ban/jail.d/xrdp.local <span class="token operator">&gt;</span>/dev/null <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[xrdp]
enabled = true
port = 3389
filter = xrdp
logpath = /var/log/auth.log
maxretry = 5
bantime = 3600
EOF</span>
<span class="token function">sudo</span> systemctl restart fail2ban
</code></pre></div>\uFF08\u9700\u81EA\u5EFA filter\uFF1A<code>/etc/fail2ban/filter.d/xrdp.conf</code>\uFF09</li><li>\u4F7F\u7528\u5F3A\u5BC6\u7801 / SSH \u516C\u94A5\u767B\u5F55\u3002</li><li>\u5B9A\u671F\u5347\u7EA7\u5B89\u5168\u8865\u4E01\uFF1A<code>sudo apt update &amp;&amp; sudo apt -y upgrade</code></li><li>\u76D1\u63A7\u767B\u5F55\u884C\u4E3A\uFF1A<code>journalctl -u xrdp --since &quot;1 hour ago&quot;</code> / <code>last</code>\u3002</li><li>\u591A\u7528\u6237\u9694\u79BB\uFF1A\u4E0D\u8981\u5171\u4EAB\u540C\u4E00\u8D26\u53F7\uFF1B\u7528\u6700\u5C0F sudo \u6743\u9650\u3002</li></ol><hr><h2 id="_9-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_9-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> 9. \u6027\u80FD\u4F18\u5316</h2><table><thead><tr><th>\u4F18\u5316\u70B9</th><th>\u64CD\u4F5C</th></tr></thead><tbody><tr><td>\u51CF\u5C11\u7279\u6548</td><td>\u5728\u684C\u9762\u8BBE\u7F6E\u4E2D\u5173\u95ED\u52A8\u753B/\u900F\u660E</td></tr><tr><td>\u4F7F\u7528\u8F7B\u91CF\u684C\u9762</td><td>\u6539\u7528 XFCE / LXQt</td></tr><tr><td>\u964D\u5206\u8FA8\u7387\u3001\u8272\u6DF1</td><td>XRDP \u5BA2\u6237\u7AEF\u9009\u62E9 16-bit \u8272\u6DF1\uFF1BVNC \u964D\u5230 1280x720</td></tr><tr><td>\u538B\u7F29</td><td>X2Go \u9ED8\u8BA4\u5DF2\u505A\uFF1BVNC \u52A0 <code>-quality 50 -depth 16</code></td></tr><tr><td>\u51CF\u5C11\u670D\u52A1</td><td><code>systemctl disable</code> \u4E0D\u5FC5\u8981\u5B88\u62A4\u8FDB\u7A0B</td></tr><tr><td>IO \u4F18\u5316</td><td>\u4F7F\u7528 SSD\uFF0C\u542F\u7528 zram\uFF08\u4F4E\u5185\u5B58 VPS\uFF09</td></tr><tr><td>\u76D1\u63A7\u74F6\u9888</td><td><code>htop</code>, <code>glances</code>, <code>iotop</code>, <code>nload</code></td></tr></tbody></table><hr><h2 id="_10-\u5E38\u89C1\u6545\u969C\u6392\u67E5" tabindex="-1"><a class="header-anchor" href="#_10-\u5E38\u89C1\u6545\u969C\u6392\u67E5" aria-hidden="true">#</a> 10. \u5E38\u89C1\u6545\u969C\u6392\u67E5</h2><p>| \u75C7\u72B6 | \u53EF\u80FD\u539F\u56E0 | \u89E3\u51B3 | | ------------------- | -------------------------- | --------------------------------------------------------- | ----------------------------- | | XRDP \u9ED1\u5C4F | Wayland / .Xauthority \u6743\u9650 | \u5173 Wayland\uFF1B<code>sudo chown user:user ~/.Xauthority</code> | | \u767B\u5F55\u540E\u7ACB\u5373\u65AD\u5F00 | \u684C\u9762\u672A\u5B89\u88C5 / \u8FDB\u7A0B\u5D29\u6E83 | \u786E\u8BA4 <code>startxfce4</code> \u53EF\u672C\u5730\u542F\u52A8 | | VNC \u8FDE\u63A5\u62D2\u7EDD | \u672A\u542F\u52A8 / \u76D1\u542C\u4EC5\u672C\u5730 | <code>ss -tnlp | grep 5901</code>\uFF1B\u68C0\u67E5 systemd \u670D\u52A1 | | \u4E2D\u6587\u4E71\u7801 | \u7F3A\u5B57\u4F53 | <code>sudo apt install -y fonts-wqy-zenhei fonts-wqy-microhei</code> | | PulseAudio \u8FDC\u7A0B\u65E0\u58F0 | XRDP \u9650\u5236 / \u6A21\u5757\u7F3A | \u82E5\u9700\u58F0\u97F3\u8003\u8651 X2Go \u6216 NoMachine | | \u7AEF\u53E3\u88AB\u626B\u7206 | \u76F4\u63A5\u66B4\u9732 | \u6539\u7AEF\u53E3 + \u9632\u706B\u5899 + Fail2Ban + \u96A7\u9053 | | X2Go \u53EA\u663E\u793A\u7070\u5C4F | \u684C\u9762\u7C7B\u578B\u4E0D\u5339\u914D | \u5728\u5BA2\u6237\u7AEF\u4F1A\u8BDD\u9009 XFCE / MATE |</p><p>\u67E5\u770B\u65E5\u5FD7\u547D\u4EE4\u53C2\u8003\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-u</span> xrdp <span class="token parameter variable">-f</span>
journalctl <span class="token parameter variable">-u</span> xrdp-sesman <span class="token parameter variable">-f</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/xrdp.log /var/log/xrdp-sesman.log
<span class="token function">tail</span> <span class="token parameter variable">-f</span> ~/.vnc/*.log
</code></pre></div><hr><h2 id="_11-faq" tabindex="-1"><a class="header-anchor" href="#_11-faq" aria-hidden="true">#</a> 11. FAQ</h2><p><strong>Q: \u5FC5\u987B\u88C5\u6574\u4E2A ubuntu-desktop \u5417\uFF1F</strong><br> A: \u4E0D\u5FC5\u987B\u3002\u8D44\u6E90\u7D27\u5F20\u9009 <code>xfce4</code> \u6216 <code>xubuntu-core</code> \u5373\u53EF\u3002</p><p><strong>Q: \u80FD\u5426\u548C SSH \u5171\u7528\u540C\u4E00\u7528\u6237\uFF1F</strong><br> A: \u53EF\u4EE5\u3002\u4F46\u5EFA\u8BAE\u4E0D\u540C\u4EBA\u4E0D\u540C\u8D26\u53F7\uFF0C\u65E5\u5FD7\u66F4\u6E05\u6670\u3002</p><p><strong>Q: RDP \u8981\u4E0D\u8981\u6362\u7AEF\u53E3\uFF1F</strong><br> A: \u4E0D\u662F\u5FC5\u987B\uFF0C\u4F46\u80FD\u51CF\u5C11\u4F4E\u8D28\u91CF\u626B\u63CF\u566A\u97F3\uFF1B\u771F\u6B63\u5B89\u5168\u4F9D\u8D56\u8BBF\u95EE\u63A7\u5236\u548C\u52A0\u5BC6\u96A7\u9053\u3002</p><p><strong>Q: \u9700\u8981 GPU \u52A0\u901F / AI \u53EF\u89C6\u5316\uFF1F</strong><br> A: \u8003\u8651 NoMachine\u3001Xpra \u6216\u5728\u672C\u5730 Jupyter / VS Code Remote\u3002</p><p><strong>Q: \u80FD\u5426\u53EA\u4F20\u5E94\u7528\u7A97\u53E3\uFF1F</strong><br> A: X2Go / xpra \u652F\u6301\u66F4\u7EC6\u7C92\u5EA6\uFF1B\u672C\u6587\u4E3B\u8981\u8BA8\u8BBA\u6574\u684C\u9762\u4F1A\u8BDD\u3002</p><hr><h2 id="_12-\u5FEB\u901F\u547D\u4EE4\u6E05\u5355-cheat-sheet" tabindex="-1"><a class="header-anchor" href="#_12-\u5FEB\u901F\u547D\u4EE4\u6E05\u5355-cheat-sheet" aria-hidden="true">#</a> 12. \u5FEB\u901F\u547D\u4EE4\u6E05\u5355\uFF08Cheat Sheet\uFF09</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> upgrade

<span class="token comment"># \u5B89\u88C5\u8F7B\u91CF\u684C\u9762 + XRDP</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> xfce4 xfce4-goodies xrdp
<span class="token builtin class-name">echo</span> <span class="token string">&quot;startxfce4&quot;</span> <span class="token operator">&gt;</span> ~/.xsession
<span class="token function">sudo</span> adduser <span class="token environment constant">$USER</span> ssl-cert
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> xrdp

<span class="token comment"># \u9632\u706B\u5899\u9650\u5236\u6765\u6E90</span>
<span class="token function">sudo</span> ufw allow from <span class="token number">1.2</span>.3.4 to any port <span class="token number">3389</span>

<span class="token comment"># VNC (TigerVNC) + SSH \u96A7\u9053</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> tigervnc-standalone-server
vncpasswd
vncserver :1
vncserver <span class="token parameter variable">-kill</span> :1
<span class="token comment"># \u7F16\u8F91 ~/.vnc/xstartup -&gt; startxfce4</span>
vncserver :1 <span class="token parameter variable">-localhost</span> <span class="token function">yes</span>
<span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">5901</span>:localhost:5901 user@server_ip  <span class="token comment"># \u672C\u5730\u8FDE\u63A5 localhost:5901</span>

<span class="token comment"># X2Go</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> x2goserver x2goserver-xsession xfce4

<span class="token comment"># \u5378\u8F7D XRDP\uFF08\u53EF\u9009\uFF09</span>
<span class="token function">sudo</span> systemctl disable <span class="token parameter variable">--now</span> xrdp
<span class="token function">sudo</span> <span class="token function">apt</span> purge <span class="token parameter variable">-y</span> xrdp
</code></pre></div><hr><h2 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h2><p>\u9009\u62E9\u5408\u9002\u7684\u8FDC\u7A0B\u684C\u9762\u65B9\u6848\uFF0C\u5173\u952E\u770B\u4F60\u7684\u5BA2\u6237\u7AEF\u73AF\u5883\u3001\u5E26\u5BBD\u3001\u5EF6\u8FDF\u4E0E\u5B89\u5168\u8981\u6C42\uFF1A</p><ul><li>Windows \u539F\u751F\uFF1AXRDP</li><li>\u4F4E\u5E26\u5BBD + \u7A33\u5B9A\u6027\uFF1AX2Go</li><li>\u9700\u8981\u4E34\u65F6 GUI + \u901A\u7528\u6027\uFF1AVNC over SSH</li><li>\u591A\u5A92\u4F53\u6216\u7A7F\u900F\uFF1ANoMachine / RustDesk</li></ul><p>\u90E8\u7F72\u540E\u8BF7\u52A1\u5FC5\u843D\u5B9E\uFF1A\u9632\u706B\u5899\u9650\u5236\u3001\u5F3A\u5BC6\u7801/\u516C\u94A5\u8BA4\u8BC1\u3001\u65E5\u5FD7\u76D1\u63A7\u53CA\u5B9A\u671F\u5347\u7EA7\uFF0C\u907F\u514D\u8FDC\u7A0B\u684C\u9762\u6210\u4E3A\u653B\u51FB\u5165\u53E3\u3002</p><p>\u5982\u9700\uFF1A</p><ul><li>\u4EC5\u6700\u7CBE\u7B80\u811A\u672C</li><li>\u81EA\u52A8\u5316\u4E00\u952E\u5B89\u88C5\u811A\u672C</li><li>\u4E3A\u4F60\u5F53\u524D\u670D\u52A1\u5668\u914D\u7F6E\u5B9A\u5236\u65B9\u6848</li></ul><p>\u7EE7\u7EED\u7559\u8A00\u5373\u53EF\u3002</p><p>\u795D\u4F60\u90E8\u7F72\u987A\u5229\uFF01</p>`,106),o=[p];function l(c,r){return n(),a("div",null,o)}var k=s(e,[["render",l],["__file","index.html.vue"]]);export{k as default};
