(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{121:function(e,a){},124:function(e,a,t){"use strict";t.r(a);var n,o=t(0),c=t.n(o),r=t(9),i=t.n(r),l=(t(86),t(87),t(28)),s=t(50),m=t(159),u=t(42),d=t(156),h=t(161),p=t(162),g=t(166),v=t(164),f=t(163),E=t(165),b=t(39),w=t(71),O=t.n(w),j=t(24),x=t(35),y=t(72),_={general:[{from:"ali",msg:"hi"},{from:"umer",msg:"hi"}],topic2:[{from:"ali",msg:"hello"},{from:"usman",msg:"hi"}]},N=Object(j.b)({chatReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Received_message":return Object(l.a)({},e,Object(x.a)({},a.payload.topic,[].concat(Object(y.a)(e[a.payload.topic]),[{from:a.payload.from,msg:a.payload.msg}])))}return e}}),D=Object(j.d)(N,Object(j.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),k=Object(d.a)((function(e){return{root:{margin:"50px",padding:e.spacing(3,2)},flex:{display:"flex",alignItems:"center"},topicWindow:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},chatBox:{width:"85%"},button:{width:"15%"}}})),B=Object(b.b)((function(e){return{chatData:e.chatReducers}}))((function(e){console.log(e.chatData);var a=k(),t=Object.keys(e.chatData),r=Object(o.useState)(t[0]),i=Object(s.a)(r,2),d=i[0],b=i[1],w=Object(o.useState)({value:""}),j=Object(s.a)(w,2),x=j[0],y=j[1];void 0===n&&(n=O()(":7000")).on("chat message",(function(e){console.log(e),D.dispatch({type:"Received_message",payload:e})}));var _="username"+Math.random(100).toFixed(2);return console.log(t),console.log(x.value),c.a.createElement("div",null,c.a.createElement(m.a,{className:a.root},c.a.createElement(u.a,{variant:"h3",component:"h3",gutterBottom:!0},"Chat app"),c.a.createElement(u.a,{variant:"h5",component:"h5",gutterBottom:!0},d),c.a.createElement("div",{className:a.flex},c.a.createElement("div",{className:a.topicWindow},c.a.createElement(h.a,null,t.map((function(e,a){return c.a.createElement(p.a,{onClick:function(e){b(e.target.innerText)},button:!0},c.a.createElement(f.a,{primary:e}))})))),c.a.createElement("div",{className:a.chatWindow},e.chatData[d].map((function(e){return console.log(e),c.a.createElement("div",{className:a.flex},c.a.createElement(g.a,{label:e.from,className:a.chip}),c.a.createElement(u.a,{variant:"body1",gutterBottom:!0},e.msg))})))),c.a.createElement("div",{className:a.flex},c.a.createElement(E.a,{label:"send a chat",className:a.chatBox,onChange:function(e){return function(e){y(Object(l.a)({},x,{value:e.target.value}))}(e)},value:x.value}),c.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){var e;e={from:_,msg:x.value,topic:d},n.emit("chat message",e),y(Object(l.a)({},x,{value:""}))}},"send"))))}));var R=function(){return c.a.createElement(b.a,{store:D},c.a.createElement("div",{className:"App"},c.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t(124)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.ab3d9c83.chunk.js.map