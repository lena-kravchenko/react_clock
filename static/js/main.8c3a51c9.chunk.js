(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),i=n(1),r=n(2),s=n(4),u=n(3),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.time=setInterval((function(){e.tick(),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.time)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.date.toLocaleTimeString())}}]),n}(c.a.Component),k=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!1,clockName:0,oldName:null},e.setName=function(){e.setState((function(e){return{oldName:e.clockName,clockName:e.clockName+Math.trunc(100*Math.random())}})),console.log("The Clock was renamed from ".concat(e.state.oldName," to ").concat(e.state.clockName))},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,n=e.clockName;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",t&&c.a.createElement(m,{name:n})),c.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock")," ",c.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock")," ",c.a.createElement("button",{type:"button",onClick:this.setName},"Set Random Name"))}}]),n}(c.a.Component));l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8c3a51c9.chunk.js.map