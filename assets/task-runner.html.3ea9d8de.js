import{d as n}from"./app.3e36dda4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="task-runner" tabindex="-1"><a class="header-anchor" href="#task-runner" aria-hidden="true">#</a> Task Runner</h1><h2 id="why-task-runner" tabindex="-1"><a class="header-anchor" href="#why-task-runner" aria-hidden="true">#</a> Why task runner?</h2><p>Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.</p><h2 id="task-runner-json" tabindex="-1"><a class="header-anchor" href="#task-runner-json" aria-hidden="true">#</a> task-runner.json</h2><p>After installation, you must have a <code>task-runner.json</code> file in your <code>.husky</code> directory that you can use to define your tasks.</p><p>you can run and test your tasks with <code>dotnet husky run</code> command. Once you are sure that your tasks are working properly, you can add it to the hook.</p><p>e.g</p><div class="language-bash ext-sh"><pre class="language-bash"><code>dotnet husky <span class="token function">add</span> pre-commit -c <span class="token string">&quot;dotnet husky run&quot;</span>
</code></pre></div><details class="custom-container details"><summary>A real-world example.</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet-format&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pre-commit&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dotnet-format&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--include&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${staged}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.cs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.vb&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commit-message-linter&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;husky&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;exec&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;.husky/csx/commit-lint.csx&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;--args&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\${args}&quot;</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pre-commit&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;pathMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Client&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${staged}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pre-commit&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;pathMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Client&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--write&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${staged}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.vue&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.json&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.yml&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.css&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;**/*.scss&quot;</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Welcome&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;echo Nice work! \u{1F942}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmd&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;echo Nice work! \u{1F942}&quot;</span><span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div></details>`,9);function p(o,e){return t}var r=s(a,[["render",p]]);export{r as default};
