export default `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性 */

#nice {
  font-family: "Microsoft YaHei", PingFangSC-regular, sans-serif;
  word-break: break-all;   
}

/*段落*/
#nice p {
  font-size: 16px;
  line-height: 1.7;
  margin: 0.5rem 0;
  text-align: left;
  letter-spacing: 0.6px;
  color: rgb(0, 0, 0);
}

/* 标题 */
#nice h1 {
  font-size: 3em;
  line-height: 1.1em;
  padding-top: 12px;
  margin-bottom: 0px;
  border-top: 1px dashed #e3e3e3;
}

#nice h1 .content {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(#fff 60%, #e3e3e3 40%);
  color: hsl(216, 80%, 44%);
  padding: 2px 13px 2px;
  margin-right: 3px;
  height: 50%;
  font-weight: bold;
}

#nice h2 {
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.3;
  margin: 0px 0px 16px;
  color: hsl(216, 80%, 44%);
}

#nice h2 .content {
}

#nice h3 {
  font-weight: normal;
  color: #333;
  font-size: 1.2em;
}

/* 特殊规定：
 * h4 → 摘要
 * h5 → 强调
 * h6 → 序号
 * em → 高亮
 */

#nice h4 {
  font-weight: normal;
  font-size: 1em;
  width: 80%;
  border: 1px solid hsl(216, 100%, 68%);
  border-top: 4px solid hsl(216, 100%, 68%);
  padding: 10px;
  margin: 30px auto;
  color: #333;
}

#nice h5 {
  font-weight: normal;
  font-size: 1.3em;
  text-align: center;
  background: hsl(216, 100%, 68%);
  border: 3px double #fff;
  width: 80%;
  padding: 10px;
  margin: 30px auto;
  color: #fff;
}

#nice h6 {
  font-size: 1.5em;
  font-weight: normal;
  color: hsl(216, 100%, 68%);
  border-bottom: 1px solid hsl(216, 100%, 68%);
}

#nice em {
  font-style: normal;
  font-weight: normal;
  color: white;
  background: hsl(244, 100%, 75%);
  padding: 2px 4px;
	margin: 0px 2px;
}

/* 其他块元素 */

#nice ol,
#nice ul {
  padding-left: 2em;
}

#nice hr {
  width: 90%;
  margin: 1.5em auto;
  border-top: 2px dashed hsl(216, 100%, 68%);
}

#nice table {
  margin: 1.5em auto;
  width: auto;
}

#nice img {
  width: 90%;
  margin: 0 auto;
  // box-shadow: #CCC 0 10px 15px;
}

#nice blockquote {
  background: #f9f9f9;
  border-left-color: hsl(216, 100%, 68%);
}

#nice blockquote p {
  color: #999;
  padding: 3px 0;
}

#nice a {
  color: hsl(187, 100%, 45%);
  font-weight: normal;
  border-bottom-color: hsl(187, 100%, 45%);
}

#nice strong {
  color: hsl(216, 80%, 44%);
}

#nice s,
#nice del {
  color: #999;
}

#nice p,
#nice li,
#nice li span,
#nice h4,
#nice table tr td {
  // color: #666;
}

#nice table tr th {
  color: #333;
  font-weight: normal;
}

#nice p code,
#nice li code {
  color: hsl(216, 100%, 68%);
}

#nice sup {
  line-height: 0;
}

#nice .footnote-word,
.footnote-ref {
  font-weight: normal;
  color: hsl(187, 100%, 45%);
}

#nice .footnotes-sep {
  font-family: inherit;
}

#nice .footnote-num {
  font-family: inherit;
}

#nice .footnote-item p {
  color: #666;
}

#nice .footnote-item p em {
  color: #999;
  background: transparent;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}
 `;
