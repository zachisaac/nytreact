(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},44:function(e,t,a){var n=a(8),r={runQuery:function(e,t,a){var r="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=097be422255e45a18b6864a8176f4a6c&q="+e+"&begin_date="+t+"0101&end_date="+a+"0101";return n.get(r).then(function(e){for(var t=[],a=e.data.response.docs,n=0,r=0;r<a.length;r++){if(n>4)return t;a[n].headline.main&&a[n].pub_date&&a[n].web_url&&(t.push(a[n]),n++)}return t})},postArticle:function(e,t,a){n.post("/api/saved",{title:e,date:t,url:a}).then(function(e){return console.log("Posted to MongoDB"),e})}};e.exports=r},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(23),a(3)),l=a(4),i=a(7),u=a(5),d=a(6),m=a(1),p=a(8),h=a.n(p),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",startYear:"",endYear:""},a.handleChange=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)},a.handleClick=function(){a.props.setTerm(a.state.topic,a.state.startYear,a.state.endYear)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-primary"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h2",{className:"panel-title text-center"},r.a.createElement("strong",null,"Search"))),r.a.createElement("div",{className:"panel-body text-center"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("h4",{className:""},r.a.createElement("strong",null,"Topic")),r.a.createElement("input",{type:"text",className:"form-control text-center",id:"topic",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("h4",{className:""},r.a.createElement("strong",null,"Start Year")),r.a.createElement("input",{type:"text",className:"form-control text-center",id:"startYear",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("h4",{className:""},r.a.createElement("strong",null,"End Year")),r.a.createElement("input",{type:"text",className:"form-control text-center",id:"endYear",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleClick},"Search")))))}}]),t}(r.a.Component),f=(r.a.Component,r.a.Component,a(44)),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topic:"",startYear:"",endYear:"",results:[],savedArticles:[]},a.setTerm=function(e,t,n){a.setState({topic:e,startYear:t,endYear:n})},a.saveArticle=function(e,t,n){f.postArticle(e,t,n),a.getArticle()},a.deleteArticle=function(e){console.log(e),h.a.delete("/api/saved/"+e._id).then(function(e){return this.setState({savedArticles:e.data}),e}.bind(Object(m.a)(Object(m.a)(a)))),a.getArticle()},a.getArticle=function(){h.a.get("/api/saved").then(function(e){this.setState({savedArticles:e.data})}.bind(Object(m.a)(Object(m.a)(a))))},a.componentDidUpdate=function(e,t){t.topic!=a.state.topic&&(console.log("UPDATED"),f.runQuery(a.state.topic,a.state.startYear,a.state.endYear).then(function(e){console.log(e),e!=this.state.results&&this.setState({results:e})}.bind(Object(m.a)(Object(m.a)(a)))))},a.componentDidMount=function(){h.a.get("/api/saved").then(function(e){this.setState({savedArticles:e.data})}.bind(Object(m.a)(Object(m.a)(a))))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(./assets/images/newspaper.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100% 100%",backgroundAttachment:"fixed"}},r.a.createElement("h2",{className:"text-center",style:{color:"white",textShadow:"3px 3px 10px black",fontSize:"54px"}},"New York Times Article Search and Save"),r.a.createElement("p",{className:"text-center",style:{color:"white",textShadow:"3px 3px 10px black",fontSize:"24px"}},"Search for and save articles of interest!"))),r.a.createElement("div",{className:"row"},r.a.createElement(b,{setTerm:this.setTerm})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.9b36cb30.chunk.js.map