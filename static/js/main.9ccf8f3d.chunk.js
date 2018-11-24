(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(33),i=a.n(r),o=(a(77),a(15)),s=a(16),c=a(18),u=a(17),m=a(19),h=a(113),d=a(114),p=a(152),b=a(158),f=a(153),g=a(21),v=a(148),E=a(149),y=a(150),j=a(160),O=a(151),k=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,a))).handleChange=n.handleChange.bind(Object(g.a)(Object(g.a)(n))),n.handleNameChange=n.handleNameChange.bind(Object(g.a)(Object(g.a)(n))),n.sendToFirebase=n.sendToFirebase.bind(Object(g.a)(Object(g.a)(n))),n.state={value:"",name:"",buttonDisabled:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getValidationState",value:function(){return this.state.value.length>0?"success":null}},{key:"getNameValidationState",value:function(){return this.state.name.length>0?"success":null}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"sendToFirebase",value:function(){this.state.value.length>0&&this.state.name.length>0?(this.props.database.ref("students/"+this.state.name).set({message:this.state.value}),this.setState({buttonDisabled:!0}),alert("Thank you for your submission, "+this.state.name+"!")):alert("Please enter an input.")}},{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(E.a,{controlId:"formInlineName",validationState:this.getNameValidationState()},l.a.createElement(y.a,null,"Name")," ",l.a.createElement(j.a,{type:"text",value:this.state.name,placeholder:"Name",onChange:this.handleNameChange}))," ",l.a.createElement(E.a,{controlId:"formInlineEmail",validationState:this.getValidationState()},l.a.createElement(y.a,null,"Message")," ",l.a.createElement(j.a,{type:"text",value:this.state.value,placeholder:"Write a short message",onChange:this.handleChange}))," ",l.a.createElement(O.a,{type:"button",onClick:this.sendToFirebase,disabled:this.state.buttonDisabled},"Submit"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={messages:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.database.ref().on("value",function(t){var a=t.val(),n=Object.values(a.students);e.setState({messages:n})})}},{key:"renderCurrentMessages",value:function(){return this.state.messages.map(function(e,t){return l.a.createElement(h.a,{key:t},e.message)})}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,null,"Family Planning: Planning for the Future"),l.a.createElement(k,{database:this.props.database}),l.a.createElement("div",{style:{paddingTop:15}},l.a.createElement(b.a,null,l.a.createElement(b.a.Heading,null,l.a.createElement(b.a.Title,{componentClass:"h3"},"What the People have to Say")),l.a.createElement(b.a.Body,null,l.a.createElement(f.a,null,this.renderCurrentMessages())))))}}]),t}(n.Component),w=a(41),S=a(162),D=a(161),I=a(159),T=a(155),x=a(156),N=a(154),B=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(I.a,{default:!0,collapseOnSelect:!0},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(I.a.Header,null,l.a.createElement(I.a.Brand,null,l.a.createElement(N.a,{to:"/"})),l.a.createElement(I.a.Toggle,null)),l.a.createElement(I.a.Collapse,null,l.a.createElement(T.a,{pullRight:!0,style:{display:"flex",flexDirection:"row"}},l.a.createElement(x.a,{eventKey:1,componentClass:N.a,href:"/",to:"/"},"Home"),l.a.createElement(x.a,{eventKey:2,componentClass:N.a,href:"/learn",to:"/learn"},"Learn More")))))}}]),t}(n.Component),F=a(157),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(F.a,null,l.a.createElement("h1",null,"What We Can Do"),l.a.createElement("p",null,"Family planning stagnates population growth, prevents pregnancy-related health risks, reduces infant mortality rate, helps prevents HIV/AIDS, provides contraception, and more. The efforts to promote family planning around the world is simple! It can range from simply filling out the form to joining an organization. Below is a list, but not limited to, of actions that we can take.")),l.a.createElement(f.a,null,l.a.createElement(h.a,{href:"https://www.sos.arkansas.gov/uploads/elections/2018ElectionCalendar.pdf"},"Vote at elections.  Your voice is strong, but a unified voice is even stronger."),l.a.createElement(h.a,{href:"https://secure2.convio.net/pf/site/Donation2?df_id=7062&mfc_pref=T&7062.donation=form1"},"Donate to family planning services around the globe."),l.a.createElement(h.a,{href:"http://iyafp.org/"},"Join the International Youth Alliance for Family Planning."),l.a.createElement(h.a,null,"Simply spread the word.")))}}]),t}(n.Component),W={apiKey:"AIzaSyCzH2BGypwLRjo-whRf0caujhLAB2ng0cg",authDomain:"public-speaking-c1365.firebaseapp.com",databaseURL:"https://public-speaking-c1365.firebaseio.com",projectId:"public-speaking-c1365",storageBucket:"public-speaking-c1365.appspot.com",messagingSenderId:"1057108097204"},A=function(e){function t(){var e;return Object(o.a)(this,t),e=Object(c.a)(this,Object(u.a)(t).call(this)),w.apps.length||w.initializeApp(W),e.defaultDatabase=w.database(),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(S.a,null,l.a.createElement("div",null,l.a.createElement(B,null),l.a.createElement(D.a,{exact:!0,path:"/",render:function(){return l.a.createElement(C,{database:e.defaultDatabase})}}),l.a.createElement(D.a,{exact:!0,path:"/learn",component:V})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(146)},77:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.9ccf8f3d.chunk.js.map