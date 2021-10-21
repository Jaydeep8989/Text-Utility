(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),r=c.n(s),l=(c(22),c(10)),o=(c(23),c(9)),i=c(0);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/Text-Utility",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/contacts",children:e.aboutText})})}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}b.defaultProps={title:"Set title here",aboutText:"Contact US"};c(30);function d(e){var t=function(){r(""),e.showAlert("Text Cleared!","success")},c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],r=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{className:"mb-4",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:function(){var t=s.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:function(){var t=s.toLowerCase();r(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:t,children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:t,children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1  ",onClick:function(){var t=s.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Nothing to preview!"})]})]})}var h=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},j=c(2);function m(e){return Object(i.jsxs)("div",{className:"contanier",style:{color:"light"===e.mode?"#042743":"white"},children:[Object(i.jsx)("center",{children:Object(i.jsx)("h1",{className:"my-4",style:{color:"light"===e.mode?"#042743":"white"},children:"Contact Us"})}),Object(i.jsx)("center",{children:Object(i.jsx)("h6",{children:"Please feel free to contact us. We appreciate your feedback in case you have a technical problem, have a suggestion for a new functionality or a change to an existing one."})}),Object(i.jsx)("center",{children:Object(i.jsx)("h2",{className:"my-3",children:"Feedback"})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"mybox",rows:"8",placeholder:"Please write your valuable feedback"})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){alert("Thank You for your vaulable feedback.")},children:"Send Feedback"})})]})}var u=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}},new Date),Object(i.jsx)(h,{alert:u}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/contacts",children:Object(i.jsx)(m,{mode:c})}),Object(i.jsx)(j.a,{exact:!0,path:"/Text-Utility",children:Object(i.jsx)(d,{showAlert:p,heading:"TextUtils help you for the words and characters count and remove the extra spaces from sentences. ",mode:c})})]})})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.116f4783.chunk.js.map