(this.webpackJsonptypetestapp=this.webpackJsonptypetestapp||[]).push([[0],{14:function(t,e,n){},9:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(3),i=n(4),r=n(6),h=n(5),c=n(2),o=n.n(c),l=n(8),u=n.n(l),p=(n(14),n(0)),d=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.stringWidths.length;e++)t.push(Object(p.jsx)("input",{type:"text",value:this.props.stringWidths[e],name:e.toString(),onChange:this.props.onArrayInputChange}));return t.push(Object(p.jsx)("input",{type:"text",name:t.length.toString(),onChange:this.props.onArrayInputChange})),Object(p.jsx)("span",{children:t})}}]),n}(o.a.Component),b=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={inputStringWidths:[],radioSelect:"by_center",firstStrPos:"",lastStrPos:""},i.handleWidthArrayChange=i.handleWidthArrayChange.bind(Object(a.a)(i)),i.handleSpacingChange=i.handleSpacingChange.bind(Object(a.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(a.a)(i)),i.handlePosChange=i.handlePosChange.bind(Object(a.a)(i)),i}return Object(i.a)(n,[{key:"handleWidthArrayChange",value:function(t){var e=parseInt(t.target.name),n=this.state.inputStringWidths.slice();for(n[e]=t.target.value;n.length>0&&""===n[n.length-1];)n.pop();this.setState({inputStringWidths:n})}},{key:"handleSpacingChange",value:function(t){this.setState({radioSelect:t.target.value})}},{key:"getStrPositionsFromWidths",value:function(t){var e=[],n=parseFloat(this.state.firstStrPos),a=parseFloat(this.state.lastStrPos),s=t.length,i=a-n;if("by_center"===this.state.radioSelect)for(var r=i/(s-1),h=0;h<s;h++)e.push("Position: "+(n+h*r).toString()+" --- For string width: "+t[h]);else if("by_space"===this.state.radioSelect){var c=0;c+=(parseFloat(t[0])+parseFloat(t[s-1]))/2;for(var o=1;o<s-1;)c+=parseFloat(t[o]),o+=1;var l=(i-c)/(s-1),u=n;for(o=0;o<s&&(e.push("Position: "+u.toString()+" --- For string width: "+t[o]),o!==s-1);o++)u+=parseFloat(t[o])/2+l+parseFloat(t[o+1])/2}return e}},{key:"handleSubmit",value:function(t){this.state.inputStringWidths.forEach((function(t){}));var e=this.getStrPositionsFromWidths(this.state.inputStringWidths);this.props.updateOutput(e)}},{key:"handlePosChange",value:function(t){"firstStrPos"===t.target.name?this.setState({firstStrPos:t.target.value}):"lastStrPos"===t.target.name&&this.setState({lastStrPos:t.target.value})}},{key:"render",value:function(){return Object(p.jsx)("form",{onSubmit:this.handleSubmit,children:Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("label",{children:"First string position:"}),Object(p.jsx)("input",{type:"text",value:this.state.firstStrPos,name:"firstStrPos",onChange:this.handlePosChange}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Last string position:"}),Object(p.jsx)("input",{type:"text",value:this.state.lastStrPos,name:"lastStrPos",onChange:this.handlePosChange}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Enter string widths:",Object(p.jsx)(d,{stringWidths:this.state.inputStringWidths,onArrayInputChange:this.handleWidthArrayChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["By center",Object(p.jsx)("input",{type:"radio",name:"space_type",value:"by_center",onChange:this.handleSpacingChange,checked:"by_center"===this.state.radioSelect})]}),Object(p.jsxs)("label",{children:["By spacing",Object(p.jsx)("input",{type:"radio",name:"space_type",value:"by_space",onChange:this.handleSpacingChange,checked:"by_space"===this.state.radioSelect})]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"button",value:"Calculate",onClick:this.handleSubmit})]})})}}]),n}(o.a.Component),j=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.stringPos.length;e++)t.push(Object(p.jsx)("li",{children:this.props.stringPos[e]}));return Object(p.jsxs)("div",{children:[0!==this.props.stringPos.length&&Object(p.jsx)("p",{children:"String positions:"}),Object(p.jsx)("ol",{children:t})]})}}]),n}(o.a.Component),g=function(t){Object(r.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={calculatedStringPos:[]},i.updateOutput=i.updateOutput.bind(Object(a.a)(i)),i}return Object(i.a)(n,[{key:"updateOutput",value:function(t){this.setState({calculatedStringPos:t})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{updateOutput:this.updateOutput}),Object(p.jsx)(j,{stringPos:this.state.calculatedStringPos})]})}}]),n}(o.a.Component);u.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.b5b0e518.chunk.js.map