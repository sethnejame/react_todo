(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,e,n){t.exports=n(62)},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(31),c=n.n(r),l=n(19),i=n(6),s=n(7),u=n(9),d=n(8),p=n(10),m=n(14),f=n(11),h=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.deleteListItem.bind(this,e),style:b},"x")))}}]),e}(o.Component),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},g=h,y=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(g,{key:e.id,todo:e,toggleComplete:t.props.toggleComplete,deleteListItem:t.props.deleteListItem})})}}]),e}(o.Component);var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:E,to:"/"},"Home")," | ",a.a.createElement(m.b,{style:E,to:"/about"},"About"))},O=n(34),x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add ToDo. . .",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function C(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0.  It is part of a React crash course from Traversy Media."),a.a.createElement("p",null,"React JS Crash Course - 2019 https://youtu.be/sBws8MSXN7A"))}var S=n(15),k=n.n(S),w=(n(61),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.toggleComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed,console.log(e.completed)),e})})},n.deleteListItem=function(t){k.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){k.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;k.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{addTodo:t.addTodo}),a.a.createElement(y,{todos:t.state.todos,toggleComplete:t.toggleComplete,deleteListItem:t.deleteListItem}))}}),a.a.createElement(f.a,{path:"/about",component:C}))))}}]),e}(o.Component));c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.046f32ff.chunk.js.map