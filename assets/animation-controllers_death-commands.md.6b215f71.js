import{r as n,o as s,c as a,a as t,w as e,b as p,d as o}from"./404.md.ff8de823.js";const r='{"title":"Death Commands","description":"","frontmatter":{"title":"Death Commands","tags":["recipe"]},"headers":[{"level":2,"title":"Using query.is_alive","slug":"using-query-is-alive"},{"level":2,"title":"Use on player entities","slug":"use-on-player-entities"}],"relativePath":"animation-controllers/death-commands.md","lastUpdated":1627051368338}',l={},i=p("Learn more about Animation Controllers"),c=o('<p>I define <code>Death Effects</code> as &quot;Doing something when an Entity dies&quot;. There are a few wrong ways to achieve this that should be avoided, including:</p><ul><li>Detecting death in the entity file, adding a component, and <em>then</em> trying to detect that component in the animation controller. This is wrong because the entity will be removed from the world before the animation controller has a chance to run.</li><li>Detecting the entity death from an outside source, such as a ticking command block. This method isn&#39;t <em>strictly</em> wrong, and in some circumstances, it may even be preferred. However it is costly and easy to break.</li></ul><h2 id="using-query-is-alive"><a class="header-anchor" href="#using-query-is-alive" aria-hidden="true">#</a> Using query.is_alive</h2><p>The best way to create death effects is by using the <code>is_alive</code> query.</p><p>Simply create an animation controller with a transition based on <code>is_alive</code>. The final <code>on_entry</code> will run before the entity is removed from the world, allowing you to run your commands.</p><p>Here is a sample animation controller:</p>',6),u=p("BP/animation_controllers/death.json"),b=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am dead!&quot;</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="use-on-player-entities"><a class="header-anchor" href="#use-on-player-entities" aria-hidden="true">#</a> Use on player entities</h2><p>In the case of player entities, an additional transition must be added to the second animation state in order to ensure the state resets between deaths:</p>',3),d=p("BP/animation_controllers/death.json"),m=o('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am dead!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive&quot;</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',1);l.render=function(p,o,r,l,k,q){const h=n("BButton"),y=n("CodeHeader");return s(),a("div",null,[t(h,{color:"blue",link:"animation-controllers-intro"},{default:e((()=>[i])),_:1}),c,t(y,null,{default:e((()=>[u])),_:1}),b,t(y,null,{default:e((()=>[d])),_:1}),m])};export default l;export{r as __pageData};