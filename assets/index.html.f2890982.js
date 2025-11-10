import{_ as a,o as n,c as s,a as e}from"./app.414af06b.js";const t={},p=e(`<p>\u672C\u6587\u6863\u5C06\u8BE6\u7EC6\u8BB2\u89E3\u5982\u4F55\u4F7F\u7528 Flutter \u548C\u5DE5\u5177\u6253\u5305\u53D1\u5E03\u591A\u5E73\u53F0\u5E94\u7528\uFF0C\u5305\u62EC Android\u3001iOS\u3001Windows\u3001macOS\u3001Web \u548C Linux\u3002\u5E76\u901A\u8FC7 <code>flutter_distributor</code> \u5DE5\u5177\u6765\u5B9E\u73B0\u9AD8\u7EA7\u6253\u5305\u529F\u80FD\u3002</p><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><ol><li><p><strong>\u5B89\u88C5 Flutter SDK</strong></p><ul><li><p>\u4E0B\u8F7D\u5E76\u5B89\u88C5 Flutter SDK\uFF1AFlutter \u5B98\u7F51</p></li><li><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:/path-to-flutter/bin&quot;</span>
</code></pre></div></li></ul></li><li><p><strong>\u68C0\u67E5\u73AF\u5883\u914D\u7F6E</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter doctor
</code></pre></div></li><li><p><strong>\u5B89\u88C5 <code>flutter_distributor</code> \u5DE5\u5177</strong></p><ul><li><p>\u5B89\u88C5 flutter_distributor</p><div class="language-bash ext-sh"><pre class="language-bash"><code>dart pub global activate flutter_distributor
</code></pre></div></li></ul></li><li><p><strong>\u9879\u76EE\u521D\u59CB\u5316</strong></p><ul><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Flutter \u9879\u76EE\u6216\u6253\u5F00\u73B0\u6709\u9879\u76EE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter create my_app
<span class="token builtin class-name">cd</span> my_app
</code></pre></div></li></ul></li></ol><hr><h2 id="android-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#android-\u6253\u5305" aria-hidden="true">#</a> Android \u6253\u5305</h2><ol><li><p><strong>\u4F7F\u7528 Flutter \u547D\u4EE4\u6253\u5305 APK</strong></p><ul><li><p>\u6253\u5305 APK \u6587\u4EF6\u5E76\u5206\u79BB ABI\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build apk <span class="token parameter variable">--release</span> --split-per-abi
</code></pre></div></li><li><p>\u8F93\u51FA\u7684\u6253\u5305\u6587\u4EF6\u4F4D\u4E8E <code>build/app/outputs/flutter-apk/</code>\u3002</p></li></ul></li><li><p><strong>\u53D1\u5E03 AAB \u6587\u4EF6</strong></p><ul><li><p>\u5982\u679C\u9700\u8981\u53D1\u5E03 AAB \u6587\u4EF6\u5230 Google Play\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build appbundle <span class="token parameter variable">--release</span>
</code></pre></div></li></ul></li></ol><hr><h2 id="ios-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#ios-\u6253\u5305" aria-hidden="true">#</a> iOS \u6253\u5305</h2><ol><li><p><strong>\u6253\u5305 iOS \u5E94\u7528</strong></p><ul><li><p>\u4E0D\u7B7E\u540D\u7684 Release \u6784\u5EFA\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build ios <span class="token parameter variable">--release</span> --no-codesign
</code></pre></div></li></ul></li><li><p><strong>\u751F\u6210 IPA \u6587\u4EF6</strong></p><ul><li><p>\u8FDB\u5165\u6784\u5EFA\u8F93\u51FA\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> build/ios/iphoneos/
</code></pre></div></li><li><p>\u521B\u5EFA Payload \u6587\u4EF6\u5939\u5E76\u79FB\u52A8\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> Payload
<span class="token function">cp</span> <span class="token parameter variable">-r</span> Runner.app Payload/
</code></pre></div></li><li><p>\u6253\u5305\u6210 IPA \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> Runner.ipa Payload
</code></pre></div></li></ul></li></ol><hr><h2 id="web-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#web-\u6253\u5305" aria-hidden="true">#</a> Web \u6253\u5305</h2><ol><li><p><strong>\u6253\u5305 Web \u5E94\u7528</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build web <span class="token parameter variable">--release</span>
</code></pre></div></li><li><p><strong>\u6253\u5305\u7ED3\u679C</strong></p><ul><li>\u6784\u5EFA\u8F93\u51FA\u4F4D\u4E8E <code>build/web</code> \u76EE\u5F55\u4E2D\u3002</li><li>\u53EF\u4EE5\u5C06\u5176\u90E8\u7F72\u5230\u4EFB\u4F55\u652F\u6301\u9759\u6001\u6587\u4EF6\u6258\u7BA1\u7684\u670D\u52A1\uFF08\u5982 Nginx\u3001Firebase Hosting\uFF09\u3002</li></ul></li></ol><hr><h2 id="windows-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#windows-\u6253\u5305" aria-hidden="true">#</a> Windows \u6253\u5305</h2><ol><li><p><strong>\u6253\u5305 Windows \u5E94\u7528</strong></p><ul><li><p>\u4F7F\u7528 Flutter \u6784\u5EFA\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build windows
</code></pre></div></li><li><p>\u6784\u5EFA\u7ED3\u679C\u4F4D\u4E8E <code>build/windows/runner/Release</code> \u76EE\u5F55\u3002</p></li></ul></li><li><p><strong>\u9AD8\u7EA7\u6253\u5305\u5DE5\u5177</strong></p><ul><li>\u4F7F\u7528 <code>flutter_distributor</code> \u6253\u5305\u4E3A EXE \u6216 MSIX\uFF08\u8BE6\u7EC6\u89C1 <a href="#%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BDflutter_distributor">\u9AD8\u7EA7\u529F\u80FD</a>\uFF09\u3002</li></ul></li></ol><hr><h2 id="macos-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#macos-\u6253\u5305" aria-hidden="true">#</a> macOS \u6253\u5305</h2><ol><li><p><strong>\u6253\u5305 macOS \u5E94\u7528</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter build macos
</code></pre></div></li><li><p><strong>\u6784\u5EFA\u8F93\u51FA</strong></p><ul><li>\u6784\u5EFA\u7ED3\u679C\u4F4D\u4E8E <code>build/macos/Build/Products/Release</code> \u76EE\u5F55\u3002</li></ul></li><li><p><strong>\u9AD8\u7EA7\u6253\u5305\u5DE5\u5177</strong></p><ul><li>\u4F7F\u7528 <code>flutter_distributor</code> \u6253\u5305\u4E3A DMG\uFF08\u8BE6\u7EC6\u89C1 <a href="#%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BDflutter_distributor">\u9AD8\u7EA7\u529F\u80FD</a>\uFF09\u3002</li></ul></li></ol><hr><h2 id="linux-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#linux-\u6253\u5305" aria-hidden="true">#</a> Linux \u6253\u5305</h2><ol><li><p><strong>\u6253\u5305 Linux \u5E94\u7528</strong></p><div class="language-text ext-text"><pre class="language-text"><code>flutter build linux
</code></pre></div></li><li><p><strong>\u6784\u5EFA\u8F93\u51FA</strong></p><ul><li>\u6784\u5EFA\u7ED3\u679C\u4F4D\u4E8E <code>build/linux/x64/release/bundle</code> \u76EE\u5F55\u3002</li></ul></li><li><p><strong>\u9AD8\u7EA7\u6253\u5305\u5DE5\u5177</strong></p><ul><li>\u4F7F\u7528 <code>flutter_distributor</code> \u6253\u5305\u4E3A DEB\u3001RPM \u6216 AppImage\uFF08\u8BE6\u7EC6\u89C1 <a href="#%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BDflutter_distributor">\u9AD8\u7EA7\u529F\u80FD</a>\uFF09\u3002</li></ul></li></ol><hr><h2 id="\u9AD8\u7EA7\u529F\u80FD-flutter-distributor" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u529F\u80FD-flutter-distributor" aria-hidden="true">#</a> \u9AD8\u7EA7\u529F\u80FD\uFF1A<code>flutter_distributor</code></h2><p><code>flutter_distributor</code> \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u652F\u6301\u8DE8\u5E73\u53F0\u53D1\u5E03\u548C\u9AD8\u7EA7\u6253\u5305\u9009\u9879\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>\u786E\u4FDD <code>flutter_distributor</code> \u5DF2\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>dart pub global activate flutter_distributor
</code></pre></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u4E3A\u9AD8\u7EA7\u6253\u5305\u914D\u7F6E\u6240\u9700\u7684\u6587\u4EF6\uFF1A</p><ul><li><p>macOS:</p><ul><li><p>\u5982\u679C\u6253\u5305 DMG \u5B89\u88C5\u5305\uFF1A<code>macos/packaging/dmg/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">contents</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">x</span><span class="token punctuation">:</span> <span class="token number">448</span>
    <span class="token key atrule">y</span><span class="token punctuation">:</span> <span class="token number">244</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> link
    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/Applications&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">x</span><span class="token punctuation">:</span> <span class="token number">192</span>
    <span class="token key atrule">y</span><span class="token punctuation">:</span> <span class="token number">244</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> file
    <span class="token key atrule">path</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0.app
</code></pre></div></li><li><p>\u5982\u679C\u6253\u5305 PKG \u5B89\u88C5\u5305\uFF1A<code>macos/packaging/pkg/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">install-path</span><span class="token punctuation">:</span> /Applications
<span class="token comment">#sign-identity: &lt;your-sign-identity&gt;</span>
</code></pre></div></li><li><p><code>distribute_options.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">output</span><span class="token punctuation">:</span> dist/
</code></pre></div></li></ul></li><li><p>Windows:</p><ul><li><p>\u5982\u679C\u6253\u5305 exe \u5B89\u88C5\u5305\uFF1A<code>windows/packaging/exe/inno_setup.sas</code></p><div class="language-SAS ext-SAS"><pre class="language-SAS"><code>[Setup]
AppId={{APP_ID}}
AppVersion={{APP_VERSION}}
AppName={{DISPLAY_NAME}}
AppPublisher={{PUBLISHER_NAME}}
AppPublisherURL={{PUBLISHER_URL}}
AppSupportURL={{PUBLISHER_URL}}
AppUpdatesURL={{PUBLISHER_URL}}
DefaultDirName={{INSTALL_DIR_NAME}}
DisableProgramGroupPage=yes
OutputDir=.
OutputBaseFilename={{OUTPUT_BASE_FILENAME}}
Compression=lzma
SolidCompression=yes
SetupIconFile={{SETUP_ICON_FILE}}
WizardStyle=modern
PrivilegesRequired={{PRIVILEGES_REQUIRED}}
ArchitecturesAllowed=x64
ArchitecturesInstallIn64BitMode=x64
CloseApplications=force

[Languages]
{% for locale in LOCALES %}
{% if locale == &#39;en&#39; %}Name: &quot;english&quot;; MessagesFile: &quot;compiler:Default.isl&quot;{% endif %}
{% if locale == &#39;hy&#39; %}Name: &quot;armenian&quot;; MessagesFile: &quot;compiler:Languages\\\\Armenian.isl&quot;{% endif %}
{% if locale == &#39;bg&#39; %}Name: &quot;bulgarian&quot;; MessagesFile: &quot;compiler:Languages\\\\Bulgarian.isl&quot;{% endif %}
{% if locale == &#39;ca&#39; %}Name: &quot;catalan&quot;; MessagesFile: &quot;compiler:Languages\\\\Catalan.isl&quot;{% endif %}
{% if locale == &#39;zh&#39; %}Name: &quot;chinesesimplified&quot;; MessagesFile: &quot;compiler:Languages\\\\ChineseSimplified.isl&quot;{% endif %}
{% if locale == &#39;co&#39; %}Name: &quot;corsican&quot;; MessagesFile: &quot;compiler:Languages\\\\Corsican.isl&quot;{% endif %}
{% if locale == &#39;cs&#39; %}Name: &quot;czech&quot;; MessagesFile: &quot;compiler:Languages\\\\Czech.isl&quot;{% endif %}
{% if locale == &#39;da&#39; %}Name: &quot;danish&quot;; MessagesFile: &quot;compiler:Languages\\\\Danish.isl&quot;{% endif %}
{% if locale == &#39;nl&#39; %}Name: &quot;dutch&quot;; MessagesFile: &quot;compiler:Languages\\\\Dutch.isl&quot;{% endif %}
{% if locale == &#39;fi&#39; %}Name: &quot;finnish&quot;; MessagesFile: &quot;compiler:Languages\\\\Finnish.isl&quot;{% endif %}
{% if locale == &#39;fr&#39; %}Name: &quot;french&quot;; MessagesFile: &quot;compiler:Languages\\\\French.isl&quot;{% endif %}
{% if locale == &#39;de&#39; %}Name: &quot;german&quot;; MessagesFile: &quot;compiler:Languages\\\\German.isl&quot;{% endif %}
{% if locale == &#39;he&#39; %}Name: &quot;hebrew&quot;; MessagesFile: &quot;compiler:Languages\\\\Hebrew.isl&quot;{% endif %}
{% if locale == &#39;is&#39; %}Name: &quot;icelandic&quot;; MessagesFile: &quot;compiler:Languages\\\\Icelandic.isl&quot;{% endif %}
{% if locale == &#39;it&#39; %}Name: &quot;italian&quot;; MessagesFile: &quot;compiler:Languages\\\\Italian.isl&quot;{% endif %}
{% if locale == &#39;ja&#39; %}Name: &quot;japanese&quot;; MessagesFile: &quot;compiler:Languages\\\\Japanese.isl&quot;{% endif %}
{% if locale == &#39;no&#39; %}Name: &quot;norwegian&quot;; MessagesFile: &quot;compiler:Languages\\\\Norwegian.isl&quot;{% endif %}
{% if locale == &#39;pl&#39; %}Name: &quot;polish&quot;; MessagesFile: &quot;compiler:Languages\\\\Polish.isl&quot;{% endif %}
{% if locale == &#39;pt&#39; %}Name: &quot;portuguese&quot;; MessagesFile: &quot;compiler:Languages\\\\Portuguese.isl&quot;{% endif %}
{% if locale == &#39;ru&#39; %}Name: &quot;russian&quot;; MessagesFile: &quot;compiler:Languages\\\\Russian.isl&quot;{% endif %}
{% if locale == &#39;sk&#39; %}Name: &quot;slovak&quot;; MessagesFile: &quot;compiler:Languages\\\\Slovak.isl&quot;{% endif %}
{% if locale == &#39;sl&#39; %}Name: &quot;slovenian&quot;; MessagesFile: &quot;compiler:Languages\\\\Slovenian.isl&quot;{% endif %}
{% if locale == &#39;es&#39; %}Name: &quot;spanish&quot;; MessagesFile: &quot;compiler:Languages\\\\Spanish.isl&quot;{% endif %}
{% if locale == &#39;tr&#39; %}Name: &quot;turkish&quot;; MessagesFile: &quot;compiler:Languages\\\\Turkish.isl&quot;{% endif %}
{% if locale == &#39;uk&#39; %}Name: &quot;ukrainian&quot;; MessagesFile: &quot;compiler:Languages\\\\Ukrainian.isl&quot;{% endif %}
{% endfor %}

[Tasks]
Name: &quot;desktopicon&quot;; Description: &quot;{cm:CreateDesktopIcon}&quot;; GroupDescription: &quot;{cm:AdditionalIcons}&quot;; Flags: {% if CREATE_DESKTOP_ICON != true %}unchecked{% else %}checkedonce{% endif %}
Name: &quot;launchAtStartup&quot;; Description: &quot;{cm:AutoStartProgram,{{DISPLAY_NAME}}}&quot;; GroupDescription: &quot;{cm:AdditionalIcons}&quot;; Flags: {% if LAUNCH_AT_STARTUP != true %}unchecked{% else %}checkedonce{% endif %}
[Files]
Source: &quot;{{SOURCE_DIR}}\\\\*&quot;; DestDir: &quot;{app}&quot;; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don&#39;t use &quot;Flags: ignoreversion&quot; on any shared system files

[Icons]
Name: &quot;{autoprograms}\\\\{{DISPLAY_NAME}}&quot;; Filename: &quot;{app}\\\\{{EXECUTABLE_NAME}}&quot;
Name: &quot;{autodesktop}\\\\{{DISPLAY_NAME}}&quot;; Filename: &quot;{app}\\\\{{EXECUTABLE_NAME}}&quot;; Tasks: desktopicon
Name: &quot;{userstartup}\\\\{{DISPLAY_NAME}}&quot;; Filename: &quot;{app}\\\\{{EXECUTABLE_NAME}}&quot;; WorkingDir: &quot;{app}&quot;; Tasks: launchAtStartup
[Run]
Filename: &quot;{app}\\\\{{EXECUTABLE_NAME}}&quot;; Description: &quot;{cm:LaunchProgram,{{DISPLAY_NAME}}}&quot;; Flags: {% if PRIVILEGES_REQUIRED == &#39;admin&#39; %}runascurrentuser{% endif %} nowait postinstall skipifsilent


[Code]
function InitializeSetup(): Boolean;
var
  ResultCode: Integer;
begin
  Exec(&#39;taskkill&#39;, &#39;/F /IM \u5E94\u7528\u540D\u79F0.exe&#39;, &#39;&#39;, SW_HIDE, ewWaitUntilTerminated, ResultCode)
  Result := True;
end;
</code></pre></div><p><code>windows/packaging/exe/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">app_id</span><span class="token punctuation">:</span> 6L913538<span class="token punctuation">-</span>42B1<span class="token punctuation">-</span>4596<span class="token punctuation">-</span>G479<span class="token punctuation">-</span>BJ779F21A65D
<span class="token key atrule">publisher</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">publisher_url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/aaa/aaa
<span class="token key atrule">display_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">executable_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0.exe
<span class="token key atrule">output_base_file_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0.exe
<span class="token key atrule">create_desktop_icon</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">install_dir_name</span><span class="token punctuation">:</span> <span class="token string">&quot;{autopf64}\\\\\u5E94\u7528\u540D\u79F0&quot;</span>
<span class="token key atrule">setup_icon_file</span><span class="token punctuation">:</span> ..\\..\\windows\\runner\\resources\\app_icon.ico
<span class="token key atrule">locales</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ar
  <span class="token punctuation">-</span> en
  <span class="token punctuation">-</span> fa
  <span class="token punctuation">-</span> ru
  <span class="token punctuation">-</span> pt
  <span class="token punctuation">-</span> tr
<span class="token key atrule">script_template</span><span class="token punctuation">:</span> inno_setup.sas
</code></pre></div></li><li><p>\u5982\u679C\u6253\u5305 msix <code>windows/packaging/msix/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">display_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">publisher_display_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">identity_name</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0.appioi
<span class="token key atrule">msix_version</span><span class="token punctuation">:</span> 2.5.7.0
<span class="token key atrule">logo_path</span><span class="token punctuation">:</span> windows\\runner\\resources\\app_icon.ico
<span class="token key atrule">capabilities</span><span class="token punctuation">:</span> internetClient<span class="token punctuation">,</span> internetClientServer<span class="token punctuation">,</span> privateNetworkClientServer
<span class="token key atrule">languages</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>us<span class="token punctuation">,</span> zh<span class="token punctuation">-</span>cn<span class="token punctuation">,</span> zh<span class="token punctuation">-</span>tw<span class="token punctuation">,</span> tr<span class="token punctuation">-</span>tr<span class="token punctuation">,</span>fa<span class="token punctuation">-</span>ir<span class="token punctuation">,</span>ru<span class="token punctuation">-</span>ru<span class="token punctuation">,</span>pt<span class="token punctuation">-</span>br<span class="token punctuation">,</span>es<span class="token punctuation">-</span>es
<span class="token key atrule">protocol_activation</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">execution_alias</span><span class="token punctuation">:</span> \u5E94\u7528\u540D\u79F0
<span class="token key atrule">certificate_path</span><span class="token punctuation">:</span> windows\\sign.pfx
<span class="token key atrule">certificate_password</span><span class="token punctuation">:</span>
<span class="token key atrule">publisher</span><span class="token punctuation">:</span> CN=8CB43675<span class="token punctuation">-</span>F44B<span class="token punctuation">-</span>4AA5<span class="token punctuation">-</span>9372<span class="token punctuation">-</span>E8727781BDC4
<span class="token key atrule">install_certificate</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
<span class="token key atrule">enable_at_startup</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">startup_task</span><span class="token punctuation">:</span>
  <span class="token key atrule">parameters</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>autostart
</code></pre></div></li></ul></li><li><p>Linux:</p><ul><li><p><code>linux/packaging/appimage</code></p><p>\u6709\u4E24\u4E2A\u6587\u4EF6<code>linux/packaging/appimage/AppRun</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>usr/lib

<span class="token comment"># Usage info</span>
<span class="token function-name function">show_help</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
Usage: <span class="token variable">\${0<span class="token operator">##</span>*<span class="token operator">/</span>}</span> ...
start app or app, when no parameter is given, app is executed.
    -v              show version
EOF</span>
<span class="token punctuation">}</span>
<span class="token function-name function">show_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;app version &quot;</span>
    jq .version <span class="token operator">&lt;</span>./data/flutter_assets/version.json
<span class="token punctuation">}</span>
<span class="token comment"># Initialize variables:</span>
<span class="token assign-left variable">service</span><span class="token operator">=</span><span class="token number">0</span> <span class="token comment">#declare -i service</span>
<span class="token assign-left variable"><span class="token environment constant">OPTIND</span></span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># Resetting OPTIND is necessary if getopts was used previously in the script.</span>
<span class="token comment"># It is a good idea to make OPTIND local if you process options in a function.</span>

<span class="token comment"># if no arg is provided, execute app</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">exec</span> ./app
<span class="token keyword">else</span>

<span class="token comment"># processing arguments</span>

    <span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
        appCli<span class="token punctuation">)</span>
            <span class="token builtin class-name">exec</span> ./appCli <span class="token variable">\${@<span class="token operator">:</span>3}</span>
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        h<span class="token punctuation">)</span>
            show_help
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        <span class="token function">v</span><span class="token punctuation">)</span>  show_version
            <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            show_help <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>



<span class="token keyword">fi</span>
</code></pre></div><p><code>linux/packaging/appimage/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">display_name</span><span class="token punctuation">:</span> App\u540D\u79F0

<span class="token key atrule">icon</span><span class="token punctuation">:</span> ./assets/images/source/ic_launcher_border.png

<span class="token key atrule">keywords</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Hi

<span class="token key atrule">generic_name</span><span class="token punctuation">:</span> App\u540D\u79F0

<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start
    <span class="token key atrule">label</span><span class="token punctuation">:</span> start
    <span class="token key atrule">arguments</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>start
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Stop
    <span class="token key atrule">label</span><span class="token punctuation">:</span> stop
    <span class="token key atrule">arguments</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>stop

<span class="token key atrule">categories</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Network

<span class="token key atrule">startup_notify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">app_run_file</span><span class="token punctuation">:</span> AppRun

<span class="token comment"># You can specify the shared libraries that you want to bundle with your app</span>
<span class="token comment">#</span>
<span class="token comment"># flutter_distributor automatically detects the shared libraries that your app</span>
<span class="token comment"># depends on, but you can also specify them manually here.</span>
<span class="token comment">#</span>
<span class="token comment"># The following example shows how to bundle the libcurl library with your app.</span>
<span class="token comment">#</span>
<span class="token comment"># include:</span>
<span class="token comment">#   - libcurl.so.4</span>
<span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div></li><li><p><code>linux/packaging/deb</code> \u6587\u4EF6 <code>linux/packaging/deb/make_config.yaml</code></p><div class="language-text ext-text"><pre class="language-text"><code>display_name: Hiddify
package_name: hiddify
maintainer:
  name: hiddify
  email: linux@hiddify.com

priority: optional
section: x11
installed_size: 6604
essential: false
icon: ./assets/images/source/ic_launcher_border.png

postinstall_scripts:
  - echo &quot;Installed Hiddify&quot;
postuninstall_scripts:
  - echo &quot;Surprised Why?&quot;

keywords:
  - Hiddify
  - Proxy
  - VPN
  - V2ray
  - Nekoray
  - Xray
  - Psiphon
  - OpenVPN

generic_name: Hiddify

categories:
  - Network

startup_notify: true
</code></pre></div></li><li><p><code>linux/packaging/rpm</code> <code>linux/packaging/rpm/make_config.yaml</code></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">display_name</span><span class="token punctuation">:</span> App
<span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/app/app<span class="token punctuation">-</span>next/
<span class="token key atrule">license</span><span class="token punctuation">:</span> Other

<span class="token key atrule">packager</span><span class="token punctuation">:</span> App
<span class="token key atrule">packagerEmail</span><span class="token punctuation">:</span> linux@App.com

<span class="token key atrule">priority</span><span class="token punctuation">:</span> optional
<span class="token key atrule">section</span><span class="token punctuation">:</span> x11
<span class="token key atrule">installed_size</span><span class="token punctuation">:</span> <span class="token number">6604</span>
<span class="token key atrule">essential</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> ./assets/images/source/ic_launcher_border.png

<span class="token key atrule">keywords</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Hi

<span class="token key atrule">generic_name</span><span class="token punctuation">:</span> App

<span class="token key atrule">group</span><span class="token punctuation">:</span> Applications/Internet

<span class="token key atrule">startup_notify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div></li></ul></li></ul><h3 id="\u547D\u4EE4\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u793A\u4F8B" aria-hidden="true">#</a> \u547D\u4EE4\u793A\u4F8B</h3><ol><li><p><strong>\u6253\u5305 macOS (DMG \u548C PKG)</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter_distributor package --flutter-build-args<span class="token operator">=</span>verbose <span class="token parameter variable">--platform</span> macos <span class="token parameter variable">--targets</span> dmg,pkg
</code></pre></div></li><li><p><strong>\u6253\u5305 Windows (EXE \u548C MSIX)</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter_distributor package --flutter-build-args<span class="token operator">=</span>verbose <span class="token parameter variable">--platform</span> windows <span class="token parameter variable">--targets</span> exe,msix
</code></pre></div></li><li><p><strong>\u6253\u5305 Linux (DEB\u3001RPM \u548C AppImage)</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>flutter_distributor package --flutter-build-args<span class="token operator">=</span>verbose <span class="token parameter variable">--platform</span> linux <span class="token parameter variable">--targets</span> deb,rpm,appimage
</code></pre></div></li></ol><hr><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="_1-\u5982\u4F55\u8C03\u8BD5\u6253\u5305\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u8C03\u8BD5\u6253\u5305\u9519\u8BEF" aria-hidden="true">#</a> 1. \u5982\u4F55\u8C03\u8BD5\u6253\u5305\u9519\u8BEF\uFF1F</h3><p>\u4F7F\u7528 <code>-v</code> \u67E5\u770B\u8BE6\u7EC6\u65E5\u5FD7\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>flutter build apk -v
</code></pre></div><h3 id="_2-flutter-distributor-\u4E0D\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-flutter-distributor-\u4E0D\u5DE5\u4F5C" aria-hidden="true">#</a> 2. <code>flutter_distributor</code> \u4E0D\u5DE5\u4F5C\uFF1F</h3><p>\u786E\u4FDD <code>dart</code> \u7684\u5168\u5C40\u8DEF\u5F84\u5DF2\u914D\u7F6E\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>export PATH=&quot;$PATH:$HOME/.pub-cache/bin&quot;
</code></pre></div><h3 id="_3-\u6253\u5305-web-\u8BBF\u95EE\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u6253\u5305-web-\u8BBF\u95EE\u95EE\u9898" aria-hidden="true">#</a> 3. \u6253\u5305 Web \u8BBF\u95EE\u95EE\u9898\uFF1F</h3><p>\u68C0\u67E5\u670D\u52A1\u5668\u914D\u7F6E\u662F\u5426\u6B63\u786E\uFF0C\u786E\u4FDD\u652F\u6301 HTML5 \u8DEF\u7531\u3002</p><hr><h2 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h2><p>\u901A\u8FC7\u672C\u6587\u6863\uFF0C\u60A8\u53EF\u4EE5\u8F7B\u677E\u5B8C\u6210 Flutter \u591A\u5E73\u53F0\u5E94\u7528\u7684\u6253\u5305\u4E0E\u53D1\u5E03\u3002\u9AD8\u7EA7\u7528\u6237\u8FD8\u53EF\u4EE5\u5229\u7528 <code>flutter_distributor</code> \u5DE5\u5177\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u6253\u5305\u9700\u6C42\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u53C2\u8003 Flutter \u5B98\u65B9\u6587\u6863 \u6216\u52A0\u5165\u793E\u533A\u5BFB\u6C42\u5E2E\u52A9\u3002</p><hr>`,46),o=[p];function l(i,c){return n(),s("div",null,o)}var r=a(t,[["render",l],["__file","index.html.vue"]]);export{r as default};
