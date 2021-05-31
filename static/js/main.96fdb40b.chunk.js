(this.webpackJsonptypetestapp=this.webpackJsonptypetestapp||[]).push([[0],{14:function(t,e,a){},9:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(3),r=a(4),i=a(6),h=a(5),o=a(2),c=a.n(o),l=a(8),u=a.n(l),p=(a(14),a(0)),d=function(t){Object(i.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.stringWidths.length;e++)t.push(Object(p.jsx)("input",{type:"text",value:this.props.stringWidths[e],name:e.toString(),onChange:this.props.onArrayInputChange}));return t.push(Object(p.jsx)("input",{type:"text",name:t.length.toString(),onChange:this.props.onArrayInputChange})),Object(p.jsx)("span",{children:t})}}]),a}(c.a.Component),g=function(t){Object(i.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(s.a)(this,a),(r=e.call(this,t)).state={inputStringWidths:[],radioSelect:"by_center",firstStrPos:"",lastStrPos:""},r.handleWidthArrayChange=r.handleWidthArrayChange.bind(Object(n.a)(r)),r.handleSpacingChange=r.handleSpacingChange.bind(Object(n.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(n.a)(r)),r.handlePosChange=r.handlePosChange.bind(Object(n.a)(r)),r}return Object(r.a)(a,[{key:"handleWidthArrayChange",value:function(t){var e=parseInt(t.target.name),a=this.state.inputStringWidths.slice();for(a[e]=t.target.value;a.length>0&&""===a[a.length-1];)a.pop();this.setState({inputStringWidths:a})}},{key:"handleSpacingChange",value:function(t){this.setState({radioSelect:t.target.value})}},{key:"getStrPosByCenter",value:function(t){for(var e=[],a=parseFloat(this.state.firstStrPos),n=parseFloat(this.state.lastStrPos),s=t.length,r=(n-a)/(s-1),i=0;i<s;i++)e.push((a+i*r).toString());return e}},{key:"getStrPosBySpace",value:function(t){var e=[],a=parseFloat(this.state.firstStrPos),n=parseFloat(this.state.lastStrPos),s=t.length,r=n-a,i=0;i+=(parseFloat(t[0])+parseFloat(t[s-1]))/2;for(var h=1;h<s-1;)i+=parseFloat(t[h]),h+=1;var o=(r-i)/(s-1),c=a;for(h=0;h<s&&(e.push(c.toString()),h!==s-1);h++)c+=parseFloat(t[h])/2+o+parseFloat(t[h+1])/2;return e}},{key:"getStrPositionsFromWidths",value:function(t){if("by_center"===this.state.radioSelect)return this.getStrPosByCenter(t);if("by_space"===this.state.radioSelect)return this.getStrPosBySpace(t);if("by_average"===this.state.radioSelect){for(var e=this.getStrPosByCenter(t),a=this.getStrPosBySpace(t),n=[],s=0;s<t.length;s++)n.push(((parseFloat(e[s])+parseFloat(a[s]))/2).toString());return n}return[]}},{key:"formatOutPut",value:function(t,e){for(var a=0;a<t.length;a++)t[a]="Position: "+t[a]+" --- For width: "+e[a]}},{key:"handleSubmit",value:function(t){this.state.inputStringWidths.forEach((function(t){}));var e=this.getStrPositionsFromWidths(this.state.inputStringWidths);this.formatOutPut(e,this.state.inputStringWidths),this.props.updateOutput(e)}},{key:"handlePosChange",value:function(t){"firstStrPos"===t.target.name?this.setState({firstStrPos:t.target.value}):"lastStrPos"===t.target.name&&this.setState({lastStrPos:t.target.value})}},{key:"render",value:function(){return Object(p.jsx)("form",{onSubmit:this.handleSubmit,children:Object(p.jsxs)("fieldset",{children:[Object(p.jsx)("label",{children:"First string position:"}),Object(p.jsx)("input",{type:"text",value:this.state.firstStrPos,name:"firstStrPos",onChange:this.handlePosChange}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Last string position:"}),Object(p.jsx)("input",{type:"text",value:this.state.lastStrPos,name:"lastStrPos",onChange:this.handlePosChange}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Enter string widths:",Object(p.jsx)(d,{stringWidths:this.state.inputStringWidths,onArrayInputChange:this.handleWidthArrayChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["By center",Object(p.jsx)("input",{type:"radio",name:"space_type",value:"by_center",onChange:this.handleSpacingChange,checked:"by_center"===this.state.radioSelect})]}),Object(p.jsxs)("label",{children:["By spacing",Object(p.jsx)("input",{type:"radio",name:"space_type",value:"by_space",onChange:this.handleSpacingChange,checked:"by_space"===this.state.radioSelect})]}),Object(p.jsxs)("label",{children:["By average of center and spacing",Object(p.jsx)("input",{type:"radio",name:"space_type",value:"by_average",onChange:this.handleSpacingChange,checked:"by_average"===this.state.radioSelect})]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"button",value:"Calculate",onClick:this.handleSubmit})]})})}}]),a}(c.a.Component),b=function(t){Object(i.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){for(var t=[],e=0;e<this.props.stringPos.length;e++)t.push(Object(p.jsx)("li",{children:this.props.stringPos[e]}));return Object(p.jsxs)("div",{children:[0!==this.props.stringPos.length&&Object(p.jsx)("p",{children:"String positions:"}),Object(p.jsx)("ol",{children:t})]})}}]),a}(c.a.Component),j=function(t){Object(i.a)(a,t);var e=Object(h.a)(a);function a(t){var r;return Object(s.a)(this,a),(r=e.call(this,t)).state={calculatedStringPos:[]},r.updateOutput=r.updateOutput.bind(Object(n.a)(r)),r}return Object(r.a)(a,[{key:"updateOutput",value:function(t){this.setState({calculatedStringPos:t})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{updateOutput:this.updateOutput}),Object(p.jsx)(b,{stringPos:this.state.calculatedStringPos})]})}}]),a}(c.a.Component);u.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.96fdb40b.chunk.js.map